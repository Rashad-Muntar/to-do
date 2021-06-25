
class LocalStorageMock {
    constructor() {
      this.store = [];
    }
  
    setItem(obj) { this.store.push(obj); }
  
    getItem() { return this.store; }
  
    clear() { this.store = []; }
  
    removeItem(obj) { this.store.splice(this.store.indexOf(obj), 1); }
  
    updateItem(oldObj, newObj) { this.store.splice(this.store.indexOf(oldObj), 1, newObj); }
  }
  
  export default LocalStorageMock;