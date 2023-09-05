import songsData from '@/consts/gte1m-20230904-wi_ja.json'

export default function searchVideos (keyword: string): VideoData[] {
  const words = keyword.split("AND").map(v => v.trim());

  const resultsData = words.some(v => v)
    ? songsData.filter(v => words.every(word => v.introduction.includes(word) || v.introduction_ja.includes(word)))
    : [];
  return resultsData
}
