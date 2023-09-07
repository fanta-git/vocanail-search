import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import ModalContentTabs from "./ModalContentTabs";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  video: VideoData;
};

export default function VideoModal (props: Props) {
  const { isOpen, onClose, video } = props;

  return (
    <Modal blockScrollOnMount={false} size={"xl"} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{video.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <ModalContentTabs video={video} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
