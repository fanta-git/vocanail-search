import { useEffect, useState } from 'react';

type Options = {
  lazyTime?: number;
};

export const useHashState = (options?: Options) => {
  const { lazyTime } = options ?? {};

  const [hash, setHash] = useState<string>();

  useEffect(() => {
    const onHashChange = () => {
      setHash(() => window.location.hash.slice(1));
    }

    onHashChange();

    window.addEventListener('hashchange', onHashChange);
    return () => {
      window.removeEventListener('hashchange', onHashChange);
    }
  }, []);

  useEffect(() => {
    if (hash === undefined) return;
    const attachedHash = hash ? `#${hash}` : '';
    if (attachedHash === window.location.hash) return;
    const url = new URL(window.location.href);
    url.hash = attachedHash;

    const pushState = () => {
      window.history.pushState(window.history.state, '', url);
    };

    if (lazyTime === undefined) {
      pushState();
    } else {
      const timer = setTimeout(pushState, lazyTime);
      return () => clearTimeout(timer);
    }
  }, [lazyTime, hash]);

  return [hash, setHash] as const;
}
