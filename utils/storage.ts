export class LocalStorage {
    cache: Record<string, any> = {};
  
    getItem(key: string){
      if (this.cache[key]) {
        return Promise.resolve(this.cache[key]);
      }
  
      if (typeof window === 'undefined') return Promise.resolve(true);
  
      const value = window.localStorage.getItem(key);
  
      if (!value) {
        return Promise.reject();
      }
  
      this.cache[key] = JSON.parse(value);
  
      return Promise.resolve(JSON.parse(value));
    }
  
    removeItem(key: string){
      delete this.cache[key];
  
      if (typeof window !== 'undefined') window.localStorage.removeItem(key);
  
      return Promise.resolve();
    }
  
    setItem(key: string, value: any){
      delete this.cache[key];
  
      if (typeof window !== 'undefined') window.localStorage.setItem(key, JSON.stringify(value));
  
      return Promise.resolve();
    }
  }
  