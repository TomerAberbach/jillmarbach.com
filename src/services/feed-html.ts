/** Makes the rendered Markdown's URLs absolute, as feed readers require. */
export const toFeedHtml = (html: string, site: URL): string =>
  html.replaceAll(/<(?:a|img)\s(?:"[^"]*"|[^">])*>/gu, tag =>
    tag
      .replaceAll(/\s(?:srcset|sizes)="[^"]*"/gu, ``)
      .replaceAll(
        /(?<attribute>\s(?:href|src)=")(?<path>\/(?!\/)[^"]*)/gu,
        (_, attribute: string, path: string) =>
          `${attribute}${new URL(path, site).href}`,
      ),
  )
