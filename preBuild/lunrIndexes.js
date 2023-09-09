const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const lunr = require('lunr');

require('lunr-languages/lunr.stemmer.support')(lunr);
require("lunr-languages/tinyseg")(lunr);
require('lunr-languages/lunr.ja')(lunr);

const FILE_NAME = 'gte1m-20230904-wi_ja_vdb.csv';

lunr(function () {
    this.use(lunr.ja);

    this.ref("id");
    this.field("introduction");
    this.field("introduction_ja");
    this.field("lyrics.en.value", {
        boost: 0.5,
        extractor: data => data.lyrics.en.value,
    });
    this.field("lyrics.ja.value", {
        boost: 0.5,
        extractor: data => data.lyrics.ja.value,
    });

    let id = 0;
    const all = {};
    fs.createReadStream(path.join(__dirname, FILE_NAME))
        .pipe(csv())
        .on('data', data => {
            const {
                'lyrics.ja.source': lyricsJaSource,
                'lyrics.ja.url': lyricsJaUrl,
                'lyrics.ja.value': lyricsJaValue,
                'lyrics.en.source': lyricsEnSource,
                'lyrics.en.url': lyricsEnUrl,
                'lyrics.en.value': lyricsEnValue,
                ...rest
            } = data;

            const formatted = {
                ...rest,
                id,
                lyrics: {
                    ja: {
                        source: lyricsJaSource,
                        url: lyricsJaUrl,
                        value: lyricsJaValue.replaceAll('\\n', '\n'),
                    },
                    en: {
                        source: lyricsEnSource,
                        url: lyricsEnUrl,
                        value: lyricsEnValue.replaceAll('\\n', '\n'),
                    },
                },
            }

            this.add(formatted);
            all[id] = rest.thumbnailUrl;
            fs.writeFileSync(`./public/fake-api/video/${id}.json`, JSON.stringify(formatted));
            id++;
        })
        .on('end', () => {
            fs.writeFileSync('./src/consts/indexed.json', JSON.stringify(this.build().toJSON()));
            fs.writeFileSync('./src/consts/thumbnails.json', JSON.stringify(all));
        });
});
