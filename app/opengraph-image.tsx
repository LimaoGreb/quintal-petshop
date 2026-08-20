import { ImageResponse } from "next/og";

export const alt = "Quintal Pet Shop — banho, tosa e daycare no Rio Branco, Porto Alegre";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          background: "#FFFCF5",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            padding: "10px 22px",
            borderRadius: 999,
            background: "#E3ECDF",
            color: "#1E4A2D",
            fontSize: 26,
            fontFamily: "sans-serif",
          }}
        >
          Pet Shop · Rio Branco, Porto Alegre
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 40,
            fontFamily: "sans-serif",
            fontWeight: 700,
            fontSize: 100,
            lineHeight: 1.05,
            color: "#E34A1C",
          }}
        >
          <span>quintal</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 4,
            fontSize: 34,
            fontFamily: "sans-serif",
            color: "#2C633E",
            textTransform: "uppercase",
            letterSpacing: 4,
          }}
        >
          Pet Shop
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 36,
            fontSize: 30,
            color: "#4A4842",
            fontFamily: "sans-serif",
          }}
        >
          Banho, tosa e daycare com cuidado de perto
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 48,
            width: 120,
            height: 8,
            borderRadius: 999,
            background: "#E34A1C",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
