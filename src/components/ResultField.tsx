import { useHashState } from "@/hooks/useHashState";
import useSearchVideos from "@/hooks/useSearchVideos";
import { SimpleGrid, VisuallyHidden } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { memo } from "react";
import ThumbnailItem from "./resultItem/ThumbnailItem";

type Props = {
  keyword: string;
};

const ResultField = memo(function ResultField (props: Props) {
  const { keyword } = props;

  const searchVideos = useSearchVideos();
  const { data: resultVideos = [] } = useQuery(
    ["search", keyword],
    () => searchVideos(keyword),
    { staleTime: Infinity }
  );

  const [activeModalId = "", setActiveModalId] = useHashState();
  const isExist = resultVideos.includes(activeModalId);

  return (
    <>
      <SimpleGrid w={"100%"} columns={[3, 4]} gap={[2, 4]}>
        {!isExist && (
          <VisuallyHidden>
            <ThumbnailItem
              id={activeModalId}
              activeModalId={activeModalId}
              setActiveModalId={setActiveModalId}
            />
          </VisuallyHidden>
        )}
        {resultVideos.map(id => (
          <ThumbnailItem
            key={id}
            id={id}
            activeModalId={activeModalId}
            setActiveModalId={setActiveModalId}
          />
        ))}
      </SimpleGrid>
    </>
  );
})

export default ResultField;
