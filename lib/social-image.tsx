import { ImageResponse } from "next/og";

export const socialImageSize = {
  width: 1200,
  height: 630,
};

export const socialImageContentType = "image/png";
export const socialImageAlt =
  "Hunter Kam full-stack developer portfolio social card";

const projectContexts = [
  "Production web application",
  "Business system in active development",
  "Local automation infrastructure",
] as const;

export function createSocialImage(): ImageResponse {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "#f4f1ea",
          color: "#182027",
          display: "flex",
          flexDirection: "column",
          fontFamily: "sans-serif",
          height: "100%",
          justifyContent: "space-between",
          padding: "58px 64px 54px",
          width: "100%",
        }}
      >
        <div
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              color: "#1f4d70",
              display: "flex",
              fontFamily: "monospace",
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            PORTFOLIO
          </div>
          <div
            style={{
              background: "#9a583b",
              display: "flex",
              height: 8,
              width: 150,
            }}
          />
        </div>

        <div
          style={{
            borderTop: "2px solid #1f4d70",
            display: "flex",
            flexDirection: "column",
            paddingTop: 34,
          }}
        >
          <div
            style={{
              display: "flex",
              fontFamily: "serif",
              fontSize: 82,
              fontWeight: 700,
              lineHeight: 1,
            }}
          >
            Hunter Kam
          </div>
          <div
            style={{
              color: "#34434d",
              display: "flex",
              fontSize: 30,
              lineHeight: 1.25,
              marginTop: 22,
            }}
          >
            Computer Science student and full-stack developer
          </div>
        </div>

        <div
          style={{
            borderBottom: "2px solid #182027",
            borderTop: "2px solid #182027",
            display: "flex",
            width: "100%",
          }}
        >
          {projectContexts.map((context, index) => (
            <div
              key={context}
              style={{
                alignItems: "center",
                borderLeft: index === 0 ? "none" : "1px solid #9b9387",
                display: "flex",
                flex: 1,
                fontFamily: "monospace",
                fontSize: 20,
                lineHeight: 1.3,
                minHeight: 112,
                padding: "18px 24px",
              }}
            >
              {context}
            </div>
          ))}
        </div>
      </div>
    ),
    socialImageSize,
  );
}
