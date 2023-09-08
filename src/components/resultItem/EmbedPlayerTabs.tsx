import { Center, Tab, TabList, TabPanel, TabPanelProps, TabPanels, Tabs } from "@chakra-ui/react";
import { CSSProperties } from "react";
import NicovideoPlayer from "../embedPlayer/NicovideoPlayer";
import YouTubePlayer from "../embedPlayer/YouTubePlayer";

type Props = {
  video: VideoData;
};

const TAB_PANEL_STYLE = {
  px: 0,
  pb: 0,
} satisfies TabPanelProps;

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

export default function EmbedPlayerTabs(props: Props) {
  const { video } = props;

  return (
    <Tabs variant={"enclosed"}>
      <TabList>
        <Tab>ニコニコ動画</Tab>
        <Tab isDisabled={!video.ytId}>YouTube</Tab>
      </TabList>

      <TabPanels>
        <TabPanel {...TAB_PANEL_STYLE}>
          <Center style={EMBED_WRAPPER_STYLE}>
            <NicovideoPlayer id={video.nvId} {...PLAYER_SIZE} style={EMBED_STYLE} />
          </Center>
        </TabPanel>
        <TabPanel {...TAB_PANEL_STYLE}>
          <Center style={EMBED_WRAPPER_STYLE}>
            <YouTubePlayer id={video.ytId} {...PLAYER_SIZE} style={EMBED_STYLE} />
          </Center>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
