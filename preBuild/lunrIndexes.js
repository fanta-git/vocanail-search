const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const lunr = require('lunr');

require('lunr-languages/lunr.stemmer.support')(lunr);
require("lunr-languages/tinyseg")(lunr);
require('lunr-languages/lunr.ja')(lunr);

const FILE_NAME = 'gte1m-20230904-wi_ja.csv';

lunr(function () {
    this.use(lunr.ja);

    this.ref("id");
    this.field("introduction");
    this.field("introduction_ja");

    let id = 0;
    fs.createReadStream(path.join(__dirname, FILE_NAME))
        .pipe(csv())
        .on('data', data => {
            this.add({ ...data, id });
            fs.writeFileSync(`./public/fake-api/video/${id}.json`, JSON.stringify(data));
            id++;
        })
        .on('end', () => {
            fs.writeFileSync('./src/consts/indexed.json', JSON.stringify(this.build().toJSON()));
        });
});
