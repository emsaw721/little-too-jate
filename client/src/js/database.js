import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate_db', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate_db', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.error('putDb not implemented');
  console.log('PUT to the database');

  const jateDb = await openDB('jate_db', 1);

  const tx = jateDb.transaction('jate_db', 'readwrite');

  const store = tx.objectStore('content');

  const request = store.put({ id: 1, value: content});

  const result = await request; 
  console.log('Content saved to database', result.value); 
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.error('getDb not implemented');

  console.log('GET from database');

  const jateDb = await openDB('jate_db', 1);

  const tx = jateDb.transaction('jate_db', 'readonly');

  const store = tx.objectStore('content');

  const request = store.getAll();

  const result = await request; 
  console.log('result.value', result);
  return result; 

};

initdb();
