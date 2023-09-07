import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import YouTube from "react-youtube";
import NicovideoPlayer from "./NicovideoPlayer";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  video: VideoData;
};

const PLAYER_SIZE = {
  width: 360,
  height: 200,
} as const;

export default function VideoModal (props: Props) {
  const { isOpen, onClose, video } = props;

  return (
    <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{video.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Tabs variant={"enclosed"}>
            <TabList>
              <Tab>ニコニコ動画</Tab>
              <Tab isDisabled={!video.ytId}>YouTube</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <NicovideoPlayer id={video.nvId} {...PLAYER_SIZE} />
              </TabPanel>
              <TabPanel>
                <YouTube videoId={video.ytId} opts={PLAYER_SIZE} />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
