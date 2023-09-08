import searchVideos from "@/foundations/searchVideos";
import { SimpleGrid } from "@chakra-ui/react";
import ThumbnailItem from "./resultItem/ThumbnailItem";

type Props = {
  keyword: string;
};

export default function ResultField (props: Props) {
  const { keyword } = props;
  const resultVideos = searchVideos(keyword);

  return (
    <SimpleGrid w={"100%"} columns={[3, 4]} gap={[2, 4]}>
      {resultVideos.map(id => (
        <ThumbnailItem key={id} id={id} />
      ))}
    </SimpleGrid>
  );
}
