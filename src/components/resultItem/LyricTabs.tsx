import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Box, Container, Link, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

type Props = {
  video: VideoData | undefined;
};

const TABS_CORE = [
  {
    tabTitle: '日本語',
    lang: 'ja',
  },
  {
    tabTitle: 'English',
    lang: 'en',
  },
] as const;

export default function LyricTabs(props: Props) {
  const { video } = props;

  return (
    <Tabs variant={"enclosed"}>
      <TabList>
        {TABS_CORE.map(({ tabTitle, lang }) => (
          <Tab key={tabTitle} isDisabled={!video?.lyrics[lang].value}>
            {tabTitle}
          </Tab>
        ))}
      </TabList>

      <TabPanels>
        {TABS_CORE.map(({ lang }) => (
          <TabPanel key={lang} px={0} pb={0}>
            {video &&
              <Container maxH={"calc(100vh - 22rem)"} overflowY={"scroll"}>
                {video.lyrics[lang].value.split("\n").flatMap((v, i) => (
                  i ? [<br key={i} />, <>{v}</>] : [<>{v}</>]
                ))}
                {video.lyrics[lang].source && <Box pt={2}>
                  <Link href={video.lyrics[lang].url} color={"teal.500"} isExternal>
                    {video.lyrics[lang].source}
                    <ExternalLinkIcon mx='2px' />
                  </Link>
                </Box>}
              </Container>
            }
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
}
