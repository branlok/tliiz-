import Dexie from "dexie";

export const db = new Dexie("myDatabase");
db.version(1).stores({
    friends: "++id, image", // Primary key and indexed props
});
