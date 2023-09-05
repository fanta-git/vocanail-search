// @ts-nocheck
import lunr from 'lunr'
import stemmerSupport from 'lunr-languages/lunr.stemmer.support'
import tinyseg from 'lunr-languages/tinyseg'
import ja from 'lunr-languages/lunr.ja'

type LunrJa = (typeof lunr) & {
    ja: Builder.Plugin;
}

stemmerSupport(lunr);
tinyseg(lunr);
ja(lunr);

export default lunr as LunrJa;
