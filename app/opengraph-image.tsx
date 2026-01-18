import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Shahriar Ridom - Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const fontMapper = async () => {
  const res = await fetch(
    "https://cdn.jsdelivr.net/npm/@fontsource/inter@5.0.18/files/inter-latin-700-normal.woff",
  );

  if (!res.ok) {
    throw new Error("Failed to fetch font");
  }

  return res.arrayBuffer();
};

export default async function Image() {
  const fontData = await fontMapper();

  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#09090B",
        backgroundImage: "linear-gradient(to bottom, #09090B, #111111)",
        color: "white",
        fontFamily: "Inter",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "600px",
          background: "rgba(34, 197, 94, 0.15)",
          filter: "blur(100px)",
          borderRadius: "50%",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 10,
        }}
      >
        <img
          src="https://mkelrgepyvmrqxxmmvix.supabase.co/storage/v1/object/public/image/shahriar-ridom-suit-cream.jpg"
          width="120"
          height="120"
          style={{
            borderRadius: "50%",
            border: "4px solid rgba(255,255,255,0.1)",
            marginBottom: 40,
          }}
        />

        <div
          style={{
            fontSize: 70,
            fontWeight: 800,
            letterSpacing: "-0.05em",
            marginBottom: 20,
          }}
        >
          SHAHRIAR RIDOM
        </div>

        <div
          style={{
            fontSize: 32,
            color: "#A1A1AA",
            background: "rgba(255,255,255,0.05)",
            padding: "10px 30px",
            borderRadius: "50px",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          Full Stack Developer
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: fontData,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
