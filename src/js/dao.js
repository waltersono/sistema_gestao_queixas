var dbPromisse = idb.open('sgq', 1, function (upgradeDB) {

    if (!upgradeDB.objectStoreNames.contains('cases')) {
        upgradeDB.createObjectStore('cases', { keyPath: 'id', autoIncrement: true });
    }



});


function writeData(st, data) {
    return dbPromisse
        .then(function (db) {
            var tx = db.transaction(st, 'readwrite');
            var store = tx.objectStore(st);
            store.add(data);
            return tx.complete;
        });
}


function readAllData(st) {
    return dbPromisse
        .then(function (db) {
            var tx = db.transaction(st, 'readonly');
            var store = tx.objectStore(st);
            return store.getAll();
        })
}

function removeDataById(st, id) {
    dbPromisse
        .then(function (db) {
            var tx = db.transaction(st, 'readwrite');
            var store = tx.objectStore(st);
            store.delete(id);
            return tx.complete;
        }).catch(function (err) {
            console.log('Failed to remove', err);
        })
}

function removeAllData(st) {
    dbPromisse
        .then(function (db) {
            var tx = db.transaction(st, 'readwrite');
            var store = tx.objectStore(st);
            store.clear();
            return tx.complete;
        })
}