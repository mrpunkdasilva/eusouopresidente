import { ImageResponse } from "next/og";

export const alt = "Eu Sou o Presidente — documentos oficiais personalizados";
export const size = {
  width: 1200,
  height: 630,
};
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
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at 50% 0%, #064e3b 0%, #000000 60%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 12,
            background: "linear-gradient(90deg, #009c3b 0%, #ffdf00 50%, #002776 100%)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 120,
            height: 120,
            borderRadius: 9999,
            border: "4px solid #34d399",
            marginBottom: 36,
            fontSize: 56,
            fontWeight: 700,
            color: "#34d399",
          }}
        >
          EP
        </div>
        <div
          style={{
            fontSize: 78,
            fontWeight: 800,
            letterSpacing: 2,
            textTransform: "uppercase",
            textAlign: "center",
            lineHeight: 1.1,
          }}
        >
          Eu Sou o Presidente
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 32,
            color: "#a1a1aa",
            textAlign: "center",
            maxWidth: 900,
            lineHeight: 1.4,
          }}
        >
          Escolha o brasão, escreva o pronunciamento e exporte como documento
          oficial em PDF.
        </div>
        <div
          style={{
            marginTop: 42,
            display: "flex",
            gap: 16,
            fontSize: 22,
            color: "#34d399",
            letterSpacing: 3,
            textTransform: "uppercase",
          }}
        >
          <span>Brasão</span>
          <span>•</span>
          <span>Texto</span>
          <span>•</span>
          <span>PDF</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
