import searchVideos from "@/foundataions/searchVideos";
import { Grid, GridItem, Image } from "@chakra-ui/react";

import Link from "next/link";

type Props = {
  keyword: string;
};

export default function ResultThumbnails (props: Props) {
  const { keyword } = props;
  const resultVideos = searchVideos(keyword);

  return (
    <Grid templateColumns='repeat(5, 1fr)' gap={2}>
      {resultVideos.map(v => (
        <GridItem key={v.contentId}>
          {getThumbnail(v)}
        </GridItem>
      ))}
    </Grid>
  );
}

function getThumbnail(video: VideoData) {
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
