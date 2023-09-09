import { AspectRatio, Image } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { Suspense, useState } from "react";
import VideoModal from "./VideoModal";

type Props = {
  id: string;
  activeModalId: string;
  setActiveModalId: (id: string) => void;
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
  const { id, activeModalId, setActiveModalId } = props;
  const [canBack, setCanBack] = useState(false);

  const isOpen = activeModalId === id;
  const onOpen = () => {
    setCanBack(true);
    setActiveModalId(id);
  };

  const onClose = () => {
    if (canBack) {
      window.history.back();
      setCanBack(false);
    } else {
      setActiveModalId("");
    }
  }

  const { data: video } = useQuery<VideoData>({
    queryKey: [`key:${id}`],
    queryFn: () =>
      fetch(`/fake-api/video/${id}.json`)
        .then(res => res.json()),
  });

  // TODO: なくす
  if (!video) return <></>

  return (
    <>
      <AspectRatio ratio={16 / 9}>
        <Image
          onClick={onOpen}
          src={video.thumbnailUrl}
          alt={video.title}
          fit={"cover"}
        />
      </AspectRatio>

      <VideoModal
        isOpen={isOpen}
        onClose={onClose}
        video={video}
      />
    </>
  );
}
