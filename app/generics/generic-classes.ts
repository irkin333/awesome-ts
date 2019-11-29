/*** i don't care about data type for my StorageClass items ***/

class StorageClass<T> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if(this.data.indexOf(item) === -1) { return }
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const storageInstance = new StorageClass();
storageInstance.addItem('Anna');
storageInstance.addItem({name: 'Max'});
//console.log(storageInstance.getItems());

/*** this storage will work only with strings ***/
const stringsStorageInstance = new StorageClass<string>();
stringsStorageInstance.addItem('Anna');
// console.log(stringsStorageInstance.getItems());