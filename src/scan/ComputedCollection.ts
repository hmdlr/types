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
  ComputedHtmlCollection &
  /* Overriding LinksCollection, we don't need the actual hrefs here, just the match percentage */
  ComputedLinksCollection &
  /* Overriding UrlCollection, we don't need the actual url here, just the match */
  ComputedUrlCollection &
  /* Overriding ImagesCollection, we don't need the actual favicon / layout here, just the match percentage */
  ComputedImagesCollection &
  ComputedNetworkCollection;
// crawlerCollection: ComputedCrawlerCollection;

export type ComputedLinksCollection = {
  linksCollection: FrequencyMapper<
    Omit<LinksCollection["linksCollection"], "hrefs">
  >;
};

export type ComputedUrlCollection = {
  urlCollection: FrequencyMapper<Omit<UrlCollection["urlCollection"], "url">>;
};

export type ComputedNetworkCollection = {
  networkCollection: FrequencyMapper<
    Omit<NetworkCollection["networkCollection"], "calls">
  >;
};

export type ComputedCrawlerCollection = {
  crawlerCollection: FrequencyMapper<
    Omit<CrawlerCollection["crawlerCollection"], "redirectUrl">
  >;
};

export type ComputedHtmlCollection = {
  htmlCollection: FrequencyMapper<
    Omit<HtmlCollection["htmlCollection"], "texts">
  >;
};

export type ComputedSslCollection = SslCollection;
export type ComputedImagesCollection = ImagesCollection;
