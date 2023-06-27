export interface IBrand {
  id: string;
  /**
   * Ruleset name. Can be anything.
   */
  name: string;
  /**
   * The domain of the ruleset.
   * todo: make it an array
   */
  domain: string;
  /**
   * The URL to the authentication page. Used to know where to send the crawler to.
   */
  authUrl: string;
  /**
   * The main logo of the ruleset.
   * todo: rename to mainLogo
   */
  logo: string;
  /**
   * The favicon of the ruleset.
   */
  favicon: string;
  /**
   * The title found in the authentication page.
   */
  title: string;
  /**
   * The known logos of the brand.
   * e.g for facebook it might be the round logo, the square logo, the logo with the text, etc.
   * For maximum precision, we should store all the logos we know about.
   */
  knownLogos: string[];
}
