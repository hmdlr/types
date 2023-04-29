export interface SimilarityResult {
  idRuleset: string;
  idWinnerImage: string;
}

export interface SimilarityPayload {
  rulesets: RulesetPayload[];
}

export interface RulesetPayload {
  idRuleset: string;
  imagesIds: string[];
}
