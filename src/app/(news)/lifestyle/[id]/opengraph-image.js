import Image from "next/image";
import { ImageResponse } from "next/og";
import { lifestyle } from "@/data/lifestyle";
import { lifestyleHistory } from "@/history/lifestyle";
const formatData = [...lifestyle, ...lifestyleHistory];

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
        <Image src={datum.image} alt={datum.id} />
      </div>
    ),
    size
  );
}
