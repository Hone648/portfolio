import { expect, type Page } from "@playwright/test";

const testOrigin = "http://127.0.0.1:3001";

const applicationResourceTypes = new Set([
  "document",
  "script",
  "stylesheet",
  "font",
  "image",
]);

type ApplicationErrorOptions = {
  readonly allowedDocumentStatuses?: readonly number[];
};

export function collectApplicationErrors(
  page: Page,
  options: ApplicationErrorOptions = {},
) {
  const errors: string[] = [];
  const allowedDocumentStatuses = new Set(
    options.allowedDocumentStatuses ?? [],
  );

  const isSameOrigin = (url: string) => {
    try {
      return new URL(url).origin === testOrigin;
    } catch {
      return false;
    }
  };

  page.on("pageerror", (error) => {
    errors.push(`pageerror: ${error.message}`);
  });

  page.on("console", (message) => {
    if (message.type() !== "error") {
      return;
    }

    // Chromium emits this expected diagnostic for the deliberate 404 test.
    if (
      allowedDocumentStatuses.has(404) &&
      message.text() ===
        "Failed to load resource: the server responded with a status of 404 (Not Found)"
    ) {
      return;
    }

    errors.push(`console: ${message.text()}`);
  });

  page.on("requestfailed", (request) => {
    if (
      isSameOrigin(request.url()) &&
      applicationResourceTypes.has(request.resourceType())
    ) {
      errors.push(
        `requestfailed: ${request.method()} ${request.url()} (${
          request.failure()?.errorText ?? "unknown error"
        })`,
      );
    }
  });

  page.on("response", (response) => {
    const request = response.request();
    const status = response.status();

    if (!isSameOrigin(response.url())) {
      return;
    }

    if (status >= 500) {
      errors.push(`response: ${status} ${response.url()}`);
      return;
    }

    if (
      status >= 400 &&
      applicationResourceTypes.has(request.resourceType()) &&
      !(
        request.resourceType() === "document" &&
        allowedDocumentStatuses.has(status)
      )
    ) {
      errors.push(`resource response: ${status} ${response.url()}`);
    }
  });

  return () => {
    expect(errors, "application browser errors").toEqual([]);
  };
}
