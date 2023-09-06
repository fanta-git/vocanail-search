import { Image } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { Suspense } from "react";

type Props = {
  id: string;
};

export default function ThumbnailItem(props: Props) {
  return (
    <Suspense fallback={<ThumbnailItemFallback />}>
      <ThumbnailItemInner {...props} />
    </Suspense>
  );
}

function ThumbnailItemFallback() {
  return (
    <>Loading...</>
  );
}

function ThumbnailItemInner(props: Props) {
  const { id } = props;
  const { data: video } = useQuery<VideoData>({
    queryKey: [`key:${id}`],
    queryFn: () =>
      fetch(`/fake-api/video/${id}.json`)
        .then(res => res.json()),
  });

  // TODO: なくす
  if (!video) return <></>

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
