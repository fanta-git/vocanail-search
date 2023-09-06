import indexed from '@/consts/indexed.json'
import lunr from 'lunr';

const idx = lunr.Index.load(indexed);

export default function searchVideos (keyword: string) {
  if (!keyword) return [];
  const resultsData = idx.search(keyword);

  return resultsData.map(v => v.ref);
}
