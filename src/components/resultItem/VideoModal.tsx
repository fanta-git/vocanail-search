import { placeholderData } from "@/consts/video";
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { Suspense } from "react";
import ModalContentTabs from "./ModalContentTabs";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  id: string;
};

export default function VideoModal (props: Props) {
  const { isOpen, onClose } = props;

  return (
    <Modal scrollBehavior={"inside"} size={"xl"} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <Suspense fallback={<>Loading...</>}>
          <VideoModalInner {...props} />
        </Suspense>
      </ModalContent>
    </Modal>
  );
}

function VideoModalInner (props: Props) {
  const { id } = props;

  const { data: video } = useQuery<VideoData>(
    ["video", id],
    () => fetch(`/fake-api/video/${id}.json`)
      .then(res => res.json()),
    { placeholderData: { ...placeholderData, id } }
  );

  if (!video) {
    return <></>;
  }

  return (
    <>
      <ModalHeader>
        <Text>{video.songTitle}</Text>
        <Text fontSize={"sm"} color={"gray.500"}>{video.artistString}</Text>
      </ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <ModalContentTabs video={video} />
      </ModalBody>
    </>
  );
}
