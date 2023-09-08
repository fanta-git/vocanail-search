import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

type Options = {
  lazyTime?: number;
};

export const useQueryState = <State extends string>(name: string, options?: Options) => {
  const { lazyTime } = options ?? {};
  const router = useRouter();

  const [state, setState] = useState("");

  useEffect(() => {
    if (!router.isReady) return;
    const query = router.query[name];
    const queryState = Array.isArray(query) ? query[0] : query;
    if (queryState !== undefined) {
      setState(queryState as State);
    }
  }, [name, router]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get(name) === state) return;

    if (state) {
      params.set(name, state);
    } else {
      params.delete(name);
    }

    const replaceState = () => {
      window.history.replaceState(window.history.state, '', `?${params.toString()}`);
    };

    if (lazyTime === undefined) {
      replaceState();
    } else {
      const timer = setTimeout(replaceState, lazyTime);
      return () => clearTimeout(timer);
    }
  }, [lazyTime, name, router, state]);

  return [state, setState] as const;
}
