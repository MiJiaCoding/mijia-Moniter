const cache = [];

export function getCache() {
  return cache;
}

export function addCache(data) {
  cache.push(data);
}

export function clearCache() {
  cache.length = 0
}
