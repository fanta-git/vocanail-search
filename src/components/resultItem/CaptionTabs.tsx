import { Container, Tab, TabList, TabPanel, TabPanelProps, TabPanels, Tabs, Text } from "@chakra-ui/react";

type Props = {
  video: VideoData;
};

const TABS_CORE = [
  {
    tabTitle: '日本語',
    intrKey: 'introduction_ja',
    delimiter: /(?<=。)/,
  },
  {
    tabTitle: 'English',
    intrKey: 'introduction',
    delimiter: /(?<=\.)/,
  },
] as const;

export default function CaptionTabs(props: Props) {
  const { video } = props;

  return (
    <Tabs variant={"enclosed"}>
      <TabList>
        {TABS_CORE.map(({ tabTitle, intrKey }) => (
          <Tab key={intrKey} isDisabled={!video[intrKey]}>
            {tabTitle}
          </Tab>
        ))}
      </TabList>

      <TabPanels>
        {TABS_CORE.map(({ intrKey, delimiter }) => (
          <TabPanel key={intrKey} px={0} pb={0}>
            <Container maxH={"calc(100vh - 22rem)"} overflowY={"scroll"}>
              {video[intrKey].split(delimiter).flatMap((v, i) => (
                i ? [<br key={i} />, <>{v}</>] : [<>{v}</>]
              ))}
            </Container>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
}
