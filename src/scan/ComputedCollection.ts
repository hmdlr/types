import {
  CrawlerCollection,
  FrequencyMapper,
  FrequencyMapperFor,
  HtmlCollection,
  ImagesCollection,
  LinksCollection,
  NetworkCollection,
  SslCollection,
  UrlCollection,
} from "./Collection";

export type ComputedCollection = SslCollection &
  HtmlCollection & {
    /* Overriding LinksCollection, we don't need the actual hrefs here, just the match percentage */
    linksCollection: FrequencyMapperFor<
      Omit<LinksCollection["linksCollection"], "hrefs">,
      {
        brandIdFromDomains: string; // from the active brands, which one is the most similar to the domain
        brandIdFromAnchorsTexts: string; // from the active brands, which one is the most similar to the anchor texts
      }
    >;
    /* Overriding UrlCollection, we don't need the actual url here, just the match */
    urlCollection: FrequencyMapper<Omit<UrlCollection["urlCollection"], "url">>;
    /* Overriding ImagesCollection, we don't need the actual favicon / layout here, just the match percentage */
    imagesCollection: Omit<
      ImagesCollection["imagesCollection"],
      "favicon" | "webpageLayout"
    >;
    networkCollection: FrequencyMapper<
      Omit<NetworkCollection["networkCollection"], "calls">
    >;
    crawlerCollection: FrequencyMapper<
      Omit<CrawlerCollection["crawlerCollection"], "redirectUrl">
    >;
  };
