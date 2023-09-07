import { CSSProperties, useEffect, useLayoutEffect, useRef, useState } from "react";

type Props = {
  id: string;
  width: number;
  height: number;
};

export default function NicovideoPlayer (props: Props) {
  const { id, width, height } = props;

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [styleMaxWidth, setStyleMaxWidth] = useState<CSSProperties>({});
  const [styleSize, setStyleSize] = useState<CSSProperties>({});
  const [isLandscape, setIsLandScape] = useState<boolean>(false);
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);

  const src = `https://embed.nicovideo.jp/watch/${id}?persistence=1&oldScript=1&referer=&from=0&allowProgrammaticFullScreen=1`;

  const styleFullScreen: CSSProperties = isFullScreen ? {
    top: 0,
    left: isLandscape ? 0 : '100%',
    position: 'fixed',
    zIndex: 2147483647,
    maxWidth: 'none',
    transformOrigin: '0% 0%',
    transform: isLandscape ? 'none' : 'rotate(90deg)',
    WebkitTransformOrigin: '0% 0%',
    WebkitTransform: isLandscape ? 'none' : 'rotate(90deg)',
  } : {};

  const style = Object.assign({ border: 'none' }, styleMaxWidth, styleSize, styleFullScreen);

  useEffect(() => {
    const iframeElement = iframeRef.current;
    if (iframeElement === null) return;

    if (window.getComputedStyle(iframeElement).getPropertyValue('max-width') === 'none') {
      setStyleMaxWidth({ maxWidth: '100%' });
    }

    const onMessage = (event: MessageEvent<any>) => {
      if (event.source !== iframeElement.contentWindow) return;
      if (event.data.eventName === 'enterProgrammaticFullScreen') {
        setIsFullScreen(true);
      } else if (event.data.eventName === 'exitProgrammaticFullScreen') {
        setIsFullScreen(false);
      }
    };

    window.addEventListener('message', onMessage);

    return () => {
      window.removeEventListener('message', onMessage);
    };
  }, []);

  useLayoutEffect(() => {
    const iframeElement = iframeRef.current;
    if (iframeElement === null || !isFullScreen) return;

    const initialScrollX = window.scrollX;
    const initialScrollY = window.scrollY;
    let timer: NodeJS.Timeout;
    let ended = false;

    const pollingResize = () => {
      if (ended) return;

      const isLandscape = window.innerWidth >= window.innerHeight;
      const width = `${isLandscape ? window.innerWidth : window.innerHeight}px`;
      const height = `${isLandscape ? window.innerHeight : window.innerWidth}px`;

      if (iframeElement.style.width !== width || iframeElement.style.height !== height) {
        setStyleSize({ width, height });
        window.scrollTo(0, 0);
      }

      setIsLandScape(isLandscape);
      timer = setTimeout(startPollingResize, 200);
    }

    const startPollingResize = () => {
      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(pollingResize);
      } else {
        pollingResize();
      }
    }

    startPollingResize();

    return () => {
      clearTimeout(timer);
      ended = true;
      window.scrollTo(initialScrollX, initialScrollY);
    };
  }, [isFullScreen]);

  return (
    <iframe
      ref={iframeRef}
      allowFullScreen={true}
      allow="autoplay"
      style={style}
      width={width}
      height={height}
      src={src}
    />
  );
}
