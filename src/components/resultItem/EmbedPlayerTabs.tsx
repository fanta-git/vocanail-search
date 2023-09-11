import { AspectRatio, Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import NicovideoPlayer from "../embedPlayer/NicovideoPlayer";
import YouTubePlayer from "../embedPlayer/YouTubePlayer";

type Props = {
  video: VideoData | undefined;
};

const PANELS_CORE = [
  {
    tabTitle: 'ニコニコ動画',
    idKey: 'nvId',
    Player: NicovideoPlayer,
  },
  {
    tabTitle: 'YouTube',
    idKey: 'ytId',
    Player: YouTubePlayer,
  },
] as const;

export default function EmbedPlayerTabs(props: Props) {
  const { video } = props;

  return (
    <Tabs variant={"enclosed"}>
      <TabList>
        {PANELS_CORE.map(({ idKey, tabTitle }) => (
          <Tab key={idKey} isDisabled={!video?.[idKey]}>
            {tabTitle}
          </Tab>
        ))}
      </TabList>

      <TabPanels>
        {PANELS_CORE.map(({ idKey, Player }) => (
          <TabPanel key={idKey} px={0} pb={0}>
            <Container px={0} pb={0}>
              <AspectRatio ratio={16 / 9}>
                {video?.[idKey]
                  ? <Player
                    id={video[idKey]}
                    width={480}
                    height={270}
                    style={{
                      height: '100%',
                      width: '100%',
                    }}
                  />
                  : <Box bgColor={"black"} />
                }
              </AspectRatio>
            </Container>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
}
