import EmbedPlayerTabs from "./EmbedPlayerTabs";

type Props = {
  video: VideoData;
};

export default function ModalContentTabs (props: Props) {
  const { video } = props;

  return (
    <EmbedPlayerTabs video={video} />
  );
}
