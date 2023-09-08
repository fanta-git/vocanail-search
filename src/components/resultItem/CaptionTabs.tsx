import { Container, Tab, TabList, TabPanel, TabPanelProps, TabPanels, Tabs, Text } from "@chakra-ui/react";

type Props = {
  video: VideoData;
};

const TAB_PANEL_STYLE = {
  px: 0,
  pb: 0,
} satisfies TabPanelProps;

export default function CaptionTabs(props: Props) {
  const { video } = props;

  return (
    <Tabs variant={"enclosed"}>
      <TabList>
        <Tab>日本語</Tab>
        <Tab>English</Tab>
      </TabList>

      <TabPanels>
        <TabPanel {...TAB_PANEL_STYLE}>
          <Container>
            {video.introduction_ja.split(/(?<=。)/).flatMap((v, i) => (
              i ? [<br key={i} />, <>{v}</>] : [<>{v}</>]
            ))}
          </Container>
        </TabPanel>
        <TabPanel {...TAB_PANEL_STYLE}>
          <Container>
            {video.introduction.split(/(?<=\.)/).flatMap((v, i) => (
              i ? [<br key={i} />, <>{v}</>] : [<>{v}</>]
            ))}
          </Container>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
