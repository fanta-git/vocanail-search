import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Box, Container, Link, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

type Props = {
  video: VideoData;
};

const langs = ['ja', 'en'] as const;

export default function LyricTabs(props: Props) {
  const { video } = props;

  return (
    <Tabs variant={"enclosed"}>
      <TabList>
        <Tab isDisabled={!video.lyrics.ja.value}>日本語</Tab>
        <Tab isDisabled={!video.lyrics.en.value}>English</Tab>
      </TabList>

      <TabPanels>
        {
          langs.map(lang => (
            /* calcは消せたら消したいがCSSがわからないので消せない */
            <TabPanel key={lang} px={0} pb={0}>
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
            </TabPanel>
          ))
        }
      </TabPanels>
    </Tabs>
  );
}
