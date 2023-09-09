import { useEffect, useState } from 'react';

type Options = {
  lazyTime?: number;
};

export const useQueryState = (name: string, options?: Options) => {
  const { lazyTime } = options ?? {};

  const [state, setState] = useState<string>();

  useEffect(() => {
    const queryState = new URLSearchParams(window.location.search).get(name) ?? "";
    setState(queryState);
  }, [name]);

  useEffect(() => {
    const url = new URL(window.location.href);
    if (url.searchParams.get(name) === state) return;

    if (state) {
      url.searchParams.set(name, state);
    } else {
      url.searchParams.delete(name);
    }

    const replaceState = () => {
      window.history.replaceState(window.history.state, '', url);
    };

    if (lazyTime === undefined) {
      replaceState();
    } else {
      const timer = setTimeout(replaceState, lazyTime);
      return () => clearTimeout(timer);
    }
  }, [lazyTime, name, state]);

  return [state, setState] as const;
}
