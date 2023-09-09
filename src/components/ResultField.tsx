import searchVideos from "@/foundations/searchVideos";
import { useHashState } from "@/hooks/useHashState";
import { SimpleGrid } from "@chakra-ui/react";
import ThumbnailItem from "./resultItem/ThumbnailItem";

type Props = {
  keyword: string;
};

export default function ResultField (props: Props) {
  const { keyword } = props;
  const resultVideos = searchVideos(keyword);
  const [activeModalId = "", setActiveModalId] = useHashState();

  return (
    <SimpleGrid w={"100%"} columns={[3, 4]} gap={[2, 4]}>
      {resultVideos.map(id => (
        <ThumbnailItem
          key={id}
          id={id}
          activeModalId={activeModalId}
          setActiveModalId={setActiveModalId}
        />
      ))}
    </SimpleGrid>
  );
}
