import songsData from '@/consts/gte1m-20230904-wi_ja.json'
import lunrJa from './lunrJa'

const idx = lunrJa(function () {
  this.use(lunrJa.ja)

  this.ref('contentId')
  this.field('introduction')
  this.field('introduction_ja')

  songsData.forEach(doc => this.add(doc));
});

const map = new Map<string, VideoData>(songsData.map(v => [v.contentId, v]));

export default function searchVideos (keyword: string): VideoData[] {
  if (!keyword) return [];
  const resultsData = idx.search(keyword);

  const r = resultsData.map(v => map.get(v.ref)!);
  console.log(resultsData);
  return r;
}
