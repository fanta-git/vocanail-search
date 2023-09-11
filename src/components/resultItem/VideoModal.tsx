import { url } from "@/utils/config";
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Skeleton, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import ModalContentTabs from "./ModalContentTabs";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  id: string;
};

export default function VideoModal (props: Props) {
  const { isOpen, onClose, id } = props;

  const { data: video, isLoading } = useQuery<VideoData>(
    ["video", id],
    () => fetch(url`/fake-api/video/${id}.json`)
      .then(res => res.json()),
    { suspense: false, staleTime: Infinity, enabled: isOpen }
  );

  return (
    <Modal scrollBehavior={"inside"} size={"xl"} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Skeleton fitContent isLoaded={!isLoading}>
            <Text>{video?.songTitle ?? "？？？？？？？？？？？？？？？？"}</Text>
          </Skeleton>
          <Skeleton fitContent isLoaded={!isLoading}>
            <Text fontSize={"sm"} color={"gray.500"}>{video?.artistString ?? "？？？？？？？？？？？？"}</Text>
          </Skeleton>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <ModalContentTabs video={video} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
