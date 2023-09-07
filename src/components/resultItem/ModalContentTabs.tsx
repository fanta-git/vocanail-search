import { Tab, TabList, TabPanel, TabPanelProps, TabPanels, Tabs } from "@chakra-ui/react";
import CaptionTabs from "./CaptionTabs";
import EmbedPlayerTabs from "./EmbedPlayerTabs";
import LyricTabs from "./LyricTabs";

type Props = {
  video: VideoData;
};

const TabPanelStyle = {
  px: 0,
  pb: 0,
} satisfies TabPanelProps;

export default function ModalContentTabs (props: Props) {
  const { video } = props;
  const hasLyrics = video.lyrics.ja.value || video.lyrics.en.value;

  return (
    <Tabs variant={"soft-rounded"} size={"sm"}>
      <TabList>
        <Tab>プレイヤー</Tab>
        <Tab>キャプション</Tab>
        <Tab isDisabled={!hasLyrics}>歌詞</Tab>
      </TabList>

      <TabPanels>
        <TabPanel {...TabPanelStyle}>
          <EmbedPlayerTabs video={video} />
        </TabPanel>
        <TabPanel {...TabPanelStyle}>
          <CaptionTabs video={video} />
        </TabPanel>
        <TabPanel {...TabPanelStyle}>
          <LyricTabs video={video} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
