
export class AssetManager {
  private assets = new Map<string, string>();

  register(name: string, url: string): void {
    this.assets.set(name, url);
  }

  get(name: string): string | undefined {
    return this.assets.get(name);
  }

  remove(name: string): void {
    this.assets.delete(name);
  }

  list(): string[] {
    return [...this.assets.keys()];
  }

  clear(): void {
    this.assets.clear();
  }
}
