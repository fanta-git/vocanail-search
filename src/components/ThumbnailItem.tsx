import { Image } from "@chakra-ui/react";
import Link from "next/link";

type Props = {
  video: VideoData;
};

export default function ThumbnailItem(props: Props) {
  const { video } = props;

  return (
    <Link href={`https://www.nicovideo.jp/watch/${video.contentId}`} target="_blank">
      <Image
        src={video.thumbnailUrl}
        alt={video.title}
        aspectRatio={"16 / 9"}
        fit={"cover"}
      />
    </Link>
  );
}
