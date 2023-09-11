import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import CaptionTabs from "./CaptionTabs";
import EmbedPlayerTabs from "./EmbedPlayerTabs";
import LyricTabs from "./LyricTabs";

type Props = {
  video: VideoData | undefined;
};

export default function ModalContentTabs (props: Props) {
  const { video } = props;

  const tabsCore = [
    {
      tabTitle: 'プレイヤー',
      SecondTabs: EmbedPlayerTabs,
      isDisabled: !video || !(video.nvId || video.ytId)
    },
    {
      tabTitle: 'キャプション',
      SecondTabs: CaptionTabs,
      isDisabled: !video || !(video.introduction_ja || video.introduction)
    },
    {
      tabTitle: '歌詞',
      SecondTabs: LyricTabs,
      isDisabled: !video || !(video.lyrics.ja.value || video.lyrics.en.value)
    },
  ] as const;

  return (
    <Tabs variant={"soft-rounded"} size={"sm"}>
      <TabList>
        {tabsCore.map(({ tabTitle, isDisabled }) => (
          <Tab key={tabTitle} isDisabled={isDisabled}>
            {tabTitle}
          </Tab>
        ))}
      </TabList>

      <TabPanels>
        {tabsCore.map(({ SecondTabs }) => (
          <TabPanel key={SecondTabs.name} px={0}>
            <SecondTabs video={video} />
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
}
