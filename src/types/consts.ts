type VideoData = {
    nvId: string;
    thumbnailUrl: string;
    title: string;
    viewCounter: number;
    introduction: string;
    introduction_ja: string;
    songTitle: string;
    artistString: string;
    ytId: string;
    lengthSeconds: number;
    lyrics: {
        ja: {
            source: string;
            url: string;
            value: string;
        };
        en: {
            source: string;
            url: string;
            value: string;
        };
    }
};
