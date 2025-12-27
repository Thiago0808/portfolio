import ContentBr from "./br.json";
import ContentEn from "./en.json";
import type { Language } from "../App";

export const contents: Record<Language, typeof ContentEn> = {
  br: ContentBr,
  en: ContentEn,
};
