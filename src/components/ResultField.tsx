import searchVideos from "@/foundations/searchVideos";
import { Grid, GridItem } from "@chakra-ui/react";
import ThumbnailItem from "./resultItem/ThumbnailItem";

type Props = {
  keyword: string;
};

export default function ResultField (props: Props) {
  const { keyword } = props;
  const resultVideos = searchVideos(keyword);

  return (
    <Grid templateColumns='repeat(5, 1fr)' gap={2}>
      {resultVideos.map(id => (
        <GridItem key={id}>
          <ThumbnailItem id={id} />
        </GridItem>
      ))}
    </Grid>
  );
}
