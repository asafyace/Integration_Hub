import NodeCache from 'node-cache';
import { ServiceUpdate } from './types';

// Cache TTL set to 6 hours
const CACHE_TTL = 6 * 60 * 60;

class UpdateCache {
  private static instance: UpdateCache;
  private cache: NodeCache;

  private constructor() {
    this.cache = new NodeCache({ stdTTL: CACHE_TTL });
  }

  public static getInstance(): UpdateCache {
    if (!UpdateCache.instance) {
      UpdateCache.instance = new UpdateCache();
    }
    return UpdateCache.instance;
  }

  public set(key: string, value: ServiceUpdate): boolean {
    return this.cache.set(key, value);
  }

  public get(key: string): ServiceUpdate | undefined {
    return this.cache.get(key);
  }

  public getAll(): Record<string, ServiceUpdate> {
    return this.cache.mget(this.cache.keys());
  }

  public flush(): void {
    this.cache.flushAll();
  }
}

export default UpdateCache.getInstance();