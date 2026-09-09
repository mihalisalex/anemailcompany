import { ImageResponse } from "next/og"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#120F1D",
        }}
      >
        <div
          style={{
            width: 132,
            height: 132,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            background: "#67E8F9",
          }}
        >
          <span
            style={{
              fontSize: 66,
              fontWeight: 800,
              color: "#120F1D",
              letterSpacing: "-2px",
            }}
          >
            e/
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}
