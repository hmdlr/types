import {
  CrawlerCollection,
  FrequencyMapper,
  HtmlCollection,
  ImagesCollection,
  LinksCollection,
  NetworkCollection,
  SslCollection,
  UrlCollection,
} from "./Collection";

export type ComputedCollection = ComputedSslCollection &
  ComputedHtmlCollection & {
    /* Overriding LinksCollection, we don't need the actual hrefs here, just the match percentage */
    linksCollection: ComputedLinksCollection;
    /* Overriding UrlCollection, we don't need the actual url here, just the match */
    urlCollection: ComputedUrlCollection;
    /* Overriding ImagesCollection, we don't need the actual favicon / layout here, just the match percentage */
    imagesCollection: ComputedImagesCollection;
    networkCollection: ComputedNetworkCollection;
    crawlerCollection: ComputedCrawlerCollection;
  };

export type ComputedLinksCollection = FrequencyMapper<
  Omit<LinksCollection["linksCollection"], "hrefs">
>;

export type ComputedUrlCollection = FrequencyMapper<
  Omit<UrlCollection["urlCollection"], "url">
>;

export type ComputedImagesCollection = Omit<
  ImagesCollection["imagesCollection"],
  "favicon" | "webpageLayout"
>;

export type ComputedNetworkCollection = FrequencyMapper<
  Omit<NetworkCollection["networkCollection"], "calls">
>;

export type ComputedCrawlerCollection = FrequencyMapper<
  Omit<CrawlerCollection["crawlerCollection"], "redirectUrl">
>;

export type ComputedSslCollection = SslCollection;
export type ComputedHtmlCollection = HtmlCollection;
