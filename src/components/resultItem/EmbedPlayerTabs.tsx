import { AspectRatio, Container, Tab, TabList, TabPanel, TabPanelProps, TabPanels, Tabs } from "@chakra-ui/react";
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

const EMBED_PROPS = {
  width: 480,
  height: 270,
  style: {
    height: '100%',
    width: '100%',
  },
} as const;

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
          <Container {...TAB_PANEL_STYLE}>
            <AspectRatio ratio={16 / 9}>
              <NicovideoPlayer id={video.nvId} {...EMBED_PROPS} />
            </AspectRatio>
          </Container>
        </TabPanel>
        <TabPanel {...TAB_PANEL_STYLE}>
          <Container {...TAB_PANEL_STYLE}>
            <AspectRatio ratio={16 / 9}>
              <YouTubePlayer id={video.ytId} {...EMBED_PROPS} />
            </AspectRatio>
          </Container>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
