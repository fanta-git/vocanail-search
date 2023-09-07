import { Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";

type Props = {
  video: VideoData;
};

export default function LyricTabs(props: Props) {
  const { video } = props;

  return (
    <Tabs variant={"enclosed"}>
      <TabList>
        <Tab isDisabled={!video.lyrics.ja.value}>日本語</Tab>
        <Tab isDisabled={!video.lyrics.en.value}>English</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <Container>
            {video.lyrics.ja.value.split("\n").flatMap((v, i) => (
              i ? [<br key={i} />, <>{v}</>] : [<>{v}</>]
            ))}
          </Container>
        </TabPanel>
        <TabPanel>
          <Container>
            {video.lyrics.en.value.split("\n").flatMap((v, i) => (
              i ? [<br key={i} />, <>{v}</>] : [<>{v}</>]
            ))}
          </Container>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
