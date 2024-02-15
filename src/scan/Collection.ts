import { NetworkCall } from "./NetworkCall";

export interface ImagesCollection {
  imagesCollection: {
    totalImageSpace: number; // [0...1] the total space that images take up on the page
    hasFavicon: boolean; // does the page have a favicon?
  };
}

export interface UrlCollection {
  urlCollection: {
    url: string;
    symbolsPercentage: number; // [0...1] number of symbols in the url (numbers, special characters)
    isIP: boolean; // is the url an IP address?
    isPunycode: boolean; // is the url punycode?
  };
}

export interface SslCollection {
  sslCollection: {
    has: boolean;
  };
}

export interface LinksCollection {
  linksCollection: {
    hrefs: string[]; // hrefs found in the page
    numberOfLinks: number; // number of links in the page
    invalidPercentage: number; // [0...1] malformed links and `#`'s
    trickyPercentage: number; // [0...1] redirects to pages that are not the same as the original
  };
}

export interface NetworkCollection {
  networkCollection: {
    badStatusPercentage: number; // [0...1] percentage of network requests that return a bad status
    calls: NetworkCall[]; // network calls made by the page
  };
}

export interface HtmlCollection {
  htmlCollection: {
    hasTwoTextInputs: boolean; // does the page have two text inputs?
    texts: string[]; // text found in the page
  };
}

export type Collection = UrlCollection &
  SslCollection &
  LinksCollection &
  ImagesCollection &
  NetworkCollection &
  HtmlCollection;

/**
 * A frequency mapper is a type that has a brandId property, and is used to map a collection to a brand,
 * if any similarities were found.
 * Any FrequencyMapper will help in config-based scanning.
 */
export type FrequencyMapper<T> = T & {
  brandId?: string;
};

export interface CrawlerCollection {
  crawlerCollection: {
    redirectUrl: string;
    crossDomainRedirect: boolean;
  };
}

export type TrainCollection = Collection & HtmlCollection;
