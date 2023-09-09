import thumbnails from '@/consts/thumbnails.json';
import { AspectRatio, Image } from "@chakra-ui/react";
import { useState } from "react";
import VideoModal from "./VideoModal";

type Props = {
  id: string;
  activeModalId: string;
  setActiveModalId: (id: string) => void;
};

export default function ThumbnailItem(props: Props) {
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

  const thumbnailUrl = ((thumbnails as any)[id] as string | undefined) ?? "";

  return (
    <>
      <AspectRatio ratio={16 / 9}>
        <Image
          onClick={onOpen}
          src={thumbnailUrl}
          alt={"動画サムネイル"}
        />
      </AspectRatio>

      <VideoModal
        isOpen={isOpen}
        onClose={onClose}
        id={id}
      />
    </>
  );
}
