画像から文章を生成するAIを使ってボカロ曲のサムネイルを文字起こしして検索可能にし、「あのサムネの曲なんだっけ？」を解決するWebアプリ。

https://fanta-git.github.io/vocanail-search

文字起こしには[LLaMA-Adapter V2 Multimodal](https://github.com/OpenGVLab/LLaMA-Adapter/tree/main/llama_adapter_v2_multimodal7b)を、翻訳に[DeepL](https://www.deepl.com/ja/pro-api)を、動画情報の取得には[ニコニコ動画スナップショット検索API](https://site.nicovideo.jp/search-api-docs/snapshot)と[VocaDB](https://vocadb.net/swagger/index.html)を使用しました。
2023/09/04日時点でニコニコ動画上で100万再生以上（カバー・PVをつけてみたなど含む）の合成音声楽曲880曲を対象としています。
