import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  const dbData = await openDB("jate", 1);
  const record = dbData.transaction("jate", "readwrite");
  const store = record.objectStore("jate");

  const modifiedData = store.put({ id: 1, text: content });
  const result = await modifiedData;
  console.log(`Data stored ${result}`);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  const dbData = await openDB("jate", 1);
  const record = dbData.transaction("jate", "readonly");
  const store = record.objectStore("jate");

  const allData = await store.getAll();
  console.log(`Data from database is ${JSON.stringify(allData)}`);
  return allData.value;
};

initdb();
