import { LinksCollection, SslCollection } from './Collection';

export type ComputedCollection =
    LinksCollection &
    SslCollection &
    { /* Overriding UrlCollection, we don't need the actual url here, just the match */
      urlCollection: {
        url: undefined,
        brandNameContainedInUrl: boolean;
        symbolsPercentage: number;
        isIP: boolean;
        shortened: boolean;
        isPunycode: boolean;
      }
    } &
    { /* Overriding ImagesCollection, we don't need the actual favicon / layout here, just the match percentage */
      imagesCollection: {
        favicon: undefined,
        webpageLayout: undefined,
        hasFavicon: boolean,
        faviconMatched: boolean,
        faviconSimilarity: number,
        totalImageSpace: number,
      }
    };
