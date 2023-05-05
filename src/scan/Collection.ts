export interface ImagesCollection {
  imagesCollection: {
    totalImageSpace: number; // [0...1] the total space that images take up on the page
    webpageLayout: string | undefined; // base64 encoded image of the webpage layout
    favicon: string | undefined; // base64 encoded image of the favicon
  };
}

export interface UrlCollection {
  urlCollection: {
    url: string;
    symbolsPercentage: number; // [0...1] number of symbols in the url (numbers, special characters)
    isIP: boolean; // is the url an IP address?
    shortened: boolean; // is the url shortened? [bitly, rebrandly, tinyurl, shortio, etc],
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
    numberOfLinks: number; // number of links in the page
    invalidPercentage: number; // [0...1] malformed links and `#`'s
    trickyPercentage: number; // [0...1] redirects to pages that are not the same as the original
  };
}

export type Collection = UrlCollection
& SslCollection
& LinksCollection
& ImagesCollection;

export interface HtmlCollection {
  htmlCollection: {
    html: string;
  }
}

export type TrainCollection = Collection & HtmlCollection;
