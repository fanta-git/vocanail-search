// @ts-nocheck
import lunr from 'lunr'
import stemmerSupport from 'lunr-languages/lunr.stemmer.support'
import tinyseg from 'lunr-languages/tinyseg'
import ja from 'lunr-languages/lunr.ja'

type Test = (typeof lunr) & {
    ja: any;
}

stemmerSupport(lunr);
tinyseg(lunr);
ja(lunr);

export default lunr as Test;
