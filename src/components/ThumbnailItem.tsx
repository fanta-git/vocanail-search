import { Center, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { Suspense } from "react";

type Props = {
  id: string;
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
  const { id } = props;

  const { isOpen, onOpen, onClose } = useDisclosure();
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
      <Image
        onClick={onOpen}
        src={video.thumbnailUrl}
        alt={video.title}
        aspectRatio={"16 / 9"}
        fit={"cover"}
      />

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{video.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Center>
              <Image
                src={video.thumbnailUrl}
                alt={video.title}
                aspectRatio={"16 / 9"}
                fit={"cover"}
              />
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
