import { ImageResponse } from "next/og";
import { technology } from "@/data/technology";
import { technologyHistory } from "@/history/technology";
const formatData = [...technology, ...technologyHistory];

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
