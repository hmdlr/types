export interface SimilarityResult {
  idRuleset: string;
  idWinnerImage: string;
  similarityPercentage: number;
}

export interface SimilarityPayload {
  rulesets: RulesetPayload[];
}

export interface RulesetPayload {
  idRuleset: string;
  imagesIds: string[];
}
