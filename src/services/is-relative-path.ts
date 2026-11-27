/** Returns whether the path is neither absolute nor a URL. */
export const isRelativePath = (path: string): boolean =>
  !/^(?:\/|[a-z][a-z\d+.-]*:)/iu.test(path)
