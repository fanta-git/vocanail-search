import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import EmbedPlayerTabs from "./EmbedPlayerTabs";
import CaptionTabs from "./CaptionTabs";
import LyricTabs from "./LyricTabs";

type Props = {
  video: VideoData;
};

export default function ModalContentTabs (props: Props) {
  const { video } = props;

  return (
    <Tabs variant={"soft-rounded"} size={"sm"}>
      <TabList>
        <Tab>プレイヤー</Tab>
        <Tab>キャプション</Tab>
        <Tab>歌詞</Tab>
      </TabList>

      <TabPanels>
        <TabPanel p={0}>
          <EmbedPlayerTabs video={video} />
        </TabPanel>
        <TabPanel p={0}>
          <CaptionTabs video={video} />
        </TabPanel>
        <TabPanel p={0}>
          <LyricTabs video={video} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
