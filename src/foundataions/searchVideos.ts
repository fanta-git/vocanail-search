import songsData from '@/consts/gte1m-20230904-wi_ja.json'
import indexed from '@/consts/indexed.json'
import lunr from 'lunr';

const idx = lunr.Index.load(indexed);

const map = new Map<string, VideoData>(songsData.map(v => [v.contentId, v]));

export default function searchVideos (keyword: string): VideoData[] {
  if (!keyword) return [];
  const resultsData = idx.search(keyword);
  console.log(resultsData[0]?.matchData.metadata);

  return resultsData.map(v => map.get(v.ref)!);
}
