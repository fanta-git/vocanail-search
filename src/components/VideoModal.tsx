import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Center } from "@chakra-ui/react";
import NicovideoPlayer from "./NicovideoPlayer";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  video: VideoData;
};

export default function VideoModal (props: Props) {
  const { isOpen, onClose, video } = props;

  return (
    <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{video.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Center>
            <NicovideoPlayer id={video.contentId} width={360} height={200} />
          </Center>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
