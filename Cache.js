class DataCache {
    constructor() {
        if(DataCache.instance == null) {
            this.cache = new Map();
            DataCache.instance = this;
        }

        return DataCache.instance;
    }

    add(key, value) {
        this.cache.set(key, value);
    }

    get(key) {
        return this.cache.get(key);
    }
}

const cache1 = new DataCache();
const cache2 = new DataCache();

cache1.add('name', 'Jon Doe');

console.log(cache2.get('name'));