import { CSSProperties } from "react";

type Props = {
  id: string;
  width: number;
  height: number;
  style?: CSSProperties;
};

export default function YouTubePlayer (props: Props) {
  const { id, width, height, style = {} } = props;

  const src = `https://www.youtube.com/embed/${id}`;
  const mergedStyle = {
    border: 'none',
    maxWidth: '100%',
    ...style,
  };

  return (
    <iframe
      allowFullScreen
      title="YouTube"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      style={mergedStyle}
      width={width}
      height={height}
      src={src}
    />
  );
}
