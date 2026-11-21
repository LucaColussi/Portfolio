import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default async function Icon() {
  const photo = await readFile(join(process.cwd(), "public/images/luca-colussi.jpeg"));

  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", overflow: "hidden", borderRadius: "50%" }}>
        {/* Keep the full photo width and shift the square crop down to the face. */}
        <img
          src={`data:image/jpeg;base64,${photo.toString("base64")}`}
          alt=""
          width={64}
          height={64}
          style={{ objectFit: "cover", objectPosition: "50% 58%" }}
        />
      </div>
    ),
    size,
  );
}
