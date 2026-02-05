import { getProjectBySlug } from "@/app/actions";
import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export const alt = "Project Details";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  const fontData = await fetch(
    "https://cdn.jsdelivr.net/npm/@fontsource/inter@5.0.18/files/inter-latin-700-normal.woff",
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        position: "relative",
        backgroundColor: "#09090B",
      }}
    >
      <img
        src={project?.thumbnailUrl}
        alt={project?.title}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.85)",
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.95) 100%)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "60px",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "#22c55e",
              boxShadow: "0 0 15px #22c55e",
            }}
          ></div>
          <span
            style={{
              fontSize: 20,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              color: "#22c55e",
              fontWeight: 700,
              opacity: 0.9,
            }}
          >
            Based on Project
          </span>
        </div>

        <div
          style={{
            fontSize: 80,
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: 20,
            textShadow: "0 4px 10px rgba(0,0,0,0.5)",
          }}
        >
          {project?.title}
        </div>

        <div
          style={{
            fontSize: 28,
            color: "#d4d4d8",
            maxWidth: "900px",
            lineHeight: 1.4,
            marginBottom: 30,
          }}
        >
          {project?.description}
        </div>

        <div style={{ display: "flex", gap: 16 }}>
          {project?.tags.map((tag, index) => (
            <div
              key={tag}
              style={{
                padding: "10px 24px",
                backgroundColor:
                  index === 0 ? "#22c55e" : "rgba(255,255,255,0.1)",
                color: index === 0 ? "black" : "white",
                fontWeight: 700,
                fontSize: 20,
                borderRadius: "50px",
                border:
                  index === 0 ? "none" : "1px solid rgba(255,255,255,0.2)",
              }}
            >
              {tag}
            </div>
          ))}
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
          weight: 700,
        },
      ],
    },
  );
}
