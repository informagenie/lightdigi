export type AccentWord = {
  word: string;
  accent: boolean;
};

/** Convertit « texte *accent* texte » en mots, en marquant ceux qui sont entre astérisques. */
export function splitAccentWords(text: string): AccentWord[] {
  const words: AccentWord[] = [];

  text.split(/(\*[^*]+\*)/).forEach((segment) => {
    const accent = segment.startsWith("*") && segment.endsWith("*");
    const content = accent ? segment.slice(1, -1) : segment;

    content
      .split(/\s+/)
      .filter(Boolean)
      .forEach((word) => {
        // Ponctuation collée à un accent (« marque*. ») : on la rattache au mot précédent.
        if (/^[.,;:!?…]+$/.test(word) && words.length) {
          words[words.length - 1].word += word;
          return;
        }

        words.push({ word, accent });
      });
  });

  return words;
}

export function stripAccentMarks(text: string): string {
  return text.replace(/\*/g, "");
}
