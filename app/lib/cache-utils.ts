/**
 * Cache Management Utilities
 * Provides functions to manage caching at different levels
 */

// Cache version for invalidation
let cacheVersion = Date.now();

/**
 * Get current cache version
 * This changes whenever we want to invalidate all caches
 */
export function getCacheVersion(): number {
  return cacheVersion;
}

/**
 * Invalidate all caches by updating the version
 * Call this when content is updated
 */
export function invalidateAllCaches(): void {
  cacheVersion = Date.now();
  console.log(`Cache invalidated at ${new Date(cacheVersion).toISOString()}`);
}

/**
 * Add cache-busting query parameter to URLs
 * Useful for forcing fresh content when needed
 */
export function addCacheBuster(url: string): string {
  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}v=${cacheVersion}`;
}

/**
 * Generate cache key with version
 * Ensures cache invalidation when version changes
 */
export function generateCacheKey(key: string): string {
  return `${key}_v${cacheVersion}`;
}

/**
 * Check if cache should be invalidated based on time
 * Default: invalidate every 24 hours
 */
export function shouldInvalidateCache(lastInvalidation: number, maxAge: number = 24 * 60 * 60 * 1000): boolean {
  return Date.now() - lastInvalidation > maxAge;
}

/**
 * Cache invalidation strategies
 */
export const CacheStrategies = {
  // Aggressive: invalidate every 6 hours
  AGGRESSIVE: 6 * 60 * 60 * 1000,
  // Balanced: invalidate every 12 hours (default)
  BALANCED: 12 * 60 * 60 * 1000,
  // Conservative: invalidate every 24 hours
  CONSERVATIVE: 24 * 60 * 60 * 1000,
} as const;

/**
 * Auto-invalidate caches based on strategy
 * Call this in your app initialization
 */
export function setupAutoCacheInvalidation(strategy: number = CacheStrategies.BALANCED): void {
  // Check if we should invalidate based on last invalidation
  const lastInvalidation = localStorage.getItem('lastCacheInvalidation');
  const lastTime = lastInvalidation ? parseInt(lastInvalidation) : 0;
  
  if (shouldInvalidateCache(lastTime, strategy)) {
    invalidateAllCaches();
    localStorage.setItem('lastCacheInvalidation', Date.now().toString());
  }
}

/**
 * Force cache refresh for specific content
 * Useful for critical updates
 */
export function forceCacheRefresh(): void {
  invalidateAllCaches();
  
  // Clear browser caches if possible
  if ('caches' in window) {
    caches.keys().then(names => {
      names.forEach(name => {
        caches.delete(name);
      });
    });
  }
  
  // Clear localStorage cache timestamps
  localStorage.removeItem('lastCacheInvalidation');
  
  // Reload page to ensure fresh content
  window.location.reload();
}

/**
 * Get cache status information
 * Useful for debugging and monitoring
 */
export function getCacheStatus(): {
  version: number;
  lastInvalidation: string;
  age: number;
  strategy: string;
} {
  const lastInvalidation = localStorage.getItem('lastCacheInvalidation');
  const lastTime = lastInvalidation ? parseInt(lastInvalidation) : 0;
  const age = Date.now() - lastTime;
  
  let strategy = 'Unknown';
  if (age < CacheStrategies.AGGRESSIVE) strategy = 'Aggressive';
  else if (age < CacheStrategies.BALANCED) strategy = 'Balanced';
  else if (age < CacheStrategies.CONSERVATIVE) strategy = 'Conservative';
  else strategy = 'Expired';
  
  return {
    version: cacheVersion,
    lastInvalidation: new Date(lastTime).toISOString(),
    age,
    strategy,
  };
}
