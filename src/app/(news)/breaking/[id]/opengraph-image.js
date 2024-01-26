import { ImageResponse } from "next/og";
import { breaking } from "@/data/breaking";
import { breakingHistory } from "@/history/breaking";
const formatData = [...breaking, ...breakingHistory];

export const size = {
  width: 900,
  height: 450,
};

export const contentType = "image/png";

export default async function og({ params }) {
  const datum = formatData.find((i) => i.id === params.id);

  return new ImageResponse(
    (
      <div tw="relative flex items-center justify-center">
        <img
          src={`https://www.briefism.com/_next/image?url=${datum.image}&w=1920&q=75`}
          alt={datum.id}
        />
      </div>
    ),
    size
  );
}
