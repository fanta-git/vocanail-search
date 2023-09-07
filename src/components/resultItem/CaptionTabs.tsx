import { Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";

type Props = {
  video: VideoData;
};

export default function CaptionTabs(props: Props) {
  const { video } = props;

  return (
    <Tabs variant={"enclosed"}>
      <TabList>
        <Tab>日本語</Tab>
        <Tab>English</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          {video.introduction_ja.split(/(?<=。)/).flatMap((v, i) => (
            i ? [<br key={i} />, <>{v}</>] : [<>{v}</>]
          ))}
        </TabPanel>
        <TabPanel>
          {video.introduction.split(/(?<=\.)/).flatMap((v, i) => (
            i ? [<br key={i} />, <>{v}</>] : [<>{v}</>]
          ))}
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
