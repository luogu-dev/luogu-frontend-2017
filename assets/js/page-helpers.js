export const setPage = hash => hash && hash.startsWith('#page-')
  ? parseInt(hash.split('-')[1], 10)
  : 1 // Defaults to 1.
