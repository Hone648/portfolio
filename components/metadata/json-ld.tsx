type JsonPrimitive = boolean | null | number | string;

export type JsonValue =
  | JsonPrimitive
  | { readonly [key: string]: JsonValue }
  | readonly JsonValue[];

type JsonLdProps = {
  readonly data: JsonValue;
};

export function JsonLd({ data }: JsonLdProps) {
  const serializedData = JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializedData }}
    />
  );
}
