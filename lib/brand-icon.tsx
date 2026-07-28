import { ImageResponse } from "next/og";

export const brandIconContentType = "image/png";

export function createBrandIcon(size: number): ImageResponse {
  const borderWidth = Math.max(2, Math.round(size * 0.055));
  const ruleHeight = Math.max(3, Math.round(size * 0.09));

  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#f4f1ea",
          border: `${borderWidth}px solid #1f4d70`,
          borderRadius: `${Math.round(size * 0.16)}px`,
          color: "#182027",
          display: "flex",
          fontFamily: "sans-serif",
          fontSize: Math.round(size * 0.4),
          fontWeight: 800,
          height: "100%",
          justifyContent: "center",
          position: "relative",
          width: "100%",
        }}
      >
        HK
        <div
          style={{
            background: "#9a583b",
            bottom: 0,
            display: "flex",
            height: ruleHeight,
            left: 0,
            position: "absolute",
            right: 0,
          }}
        />
      </div>
    ),
    { width: size, height: size },
  );
}
