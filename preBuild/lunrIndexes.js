const lunr = require('lunr');
const fs = require('fs');
const songsData = require('../src/consts/gte1m-20230904-wi_ja.json');

require('lunr-languages/lunr.stemmer.support')(lunr);
require("lunr-languages/tinyseg")(lunr);
require('lunr-languages/lunr.ja')(lunr);

const idx = lunr(function () {
    this.use(lunr.ja);

    this.ref("contentId");
    this.field("introduction");
    this.field("introduction_ja");

    songsData.forEach((doc) => this.add(doc));
});

fs.writeFileSync('./src/consts/indexed.json', JSON.stringify(idx));
