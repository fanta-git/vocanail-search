import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";
import ModalContentTabs from "./ModalContentTabs";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  video: VideoData;
};

export default function VideoModal (props: Props) {
  const { isOpen, onClose, video } = props;

  return (
    <Modal blockScrollOnMount={false} scrollBehavior={"inside"} size={"xl"} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Text>{video.songTitle}</Text>
          <Text fontSize={"sm"} color={"gray.500"}>{video.artistString}</Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <ModalContentTabs video={video} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
