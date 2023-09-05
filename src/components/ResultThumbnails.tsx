import searchVideos from "@/foundataions/searchVideos";
import { Grid, GridItem } from "@chakra-ui/react";
import ThumbnailItem from "./ThumbnailItem";

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
          <ThumbnailItem video={v}/>
        </GridItem>
      ))}
    </Grid>
  );
}