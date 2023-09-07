import { Center, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { CSSProperties } from "react";
import NicovideoPlayer from "./NicovideoPlayer";
import YouTubePlayer from "./YouTubePlayer";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  video: VideoData;
};

const PLAYER_SIZE = {
  width: 480,
  height: 270,
} as const;

const EMBED_WRAPPER_STYLE = {
  aspectRatio: '16 / 9',
} satisfies CSSProperties;

const EMBED_STYLE = {
  height: '100%',
  width: '100%',
} satisfies CSSProperties;

export default function VideoModal (props: Props) {
  const { isOpen, onClose, video } = props;

  return (
    <Modal blockScrollOnMount={false} size={"xl"} isOpen={isOpen} onClose={onClose}>
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
                <Center style={EMBED_WRAPPER_STYLE}>
                  <NicovideoPlayer id={video.nvId} {...PLAYER_SIZE} style={EMBED_STYLE} />
                </Center>
              </TabPanel>
              <TabPanel>
                <Center style={EMBED_WRAPPER_STYLE}>
                  <YouTubePlayer id={video.ytId} {...PLAYER_SIZE} style={EMBED_STYLE} />
                </Center>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
