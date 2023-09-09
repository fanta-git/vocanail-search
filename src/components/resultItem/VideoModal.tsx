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
    <Modal blockScrollOnMount={false} scrollBehavior={"inside"} size={"xl"} isOpen={isOpen} onClose={onClose}>
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
  const { data: video } = useQuery(
    ["video", id],
    () => fetch(`/fake-api/video/${id}.json`)
      .then(res => res.json())
  );

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
