const normalize = (text: string): string =>
  text
    .normalize(`NFKD`)
    .replaceAll(/\p{Mn}/gu, ``)
    .replaceAll(/[‘’]/gu, `'`)
    .toLowerCase()

/** Returns whether the text contains every word of the query. */
export const matches = (text: string, query: string): boolean => {
  const normalizedText = normalize(text)
  return normalize(query)
    .split(/\s+/u)
    .every(word => normalizedText.includes(word))
}
