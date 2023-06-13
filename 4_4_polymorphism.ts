// 제네릭 LocalStorage<T> 로부터 받음
interface SStorage<T> {
  [key: string]: T;
}

class LocalStorage<T> {
  private storage: SStorage<T> = {};

  set(key: string, value: T) {
    this.storage[key] = value;
  }
  remove(key: string) {
    delete this.storage[key];
  }
  get(key: string): T {
    return this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}

const stringsStorage = new LocalStorage<string>();
stringsStorage.set("hihi", "cat");
console.log(stringsStorage.get("hihi"));

const booleanStorage = new LocalStorage<boolean>();
booleanStorage.set("happy", true);
console.log(booleanStorage.get("happy"));
