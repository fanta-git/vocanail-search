import indexed from '@/consts/indexed.json'
import lunr from 'lunr';
import { useCallback, useRef } from 'react';

const idx = lunr.Index.load(indexed);

export default function useSearchVideos () {
  const lastResult = useRef<string[]>([]);

  const searchVideos = useCallback((keyword: string) => {
    if (!keyword) return [];

    try {
      const resultsIndexes = idx.search(keyword);
      const resultData = resultsIndexes.map(v => v.ref);
      lastResult.current = resultData;

      return resultData;
    } catch (e) {
      return lastResult.current;
    }
  }, []);

  return searchVideos;
}
