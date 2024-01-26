import sqlite3 from "sqlite3";

// TODO error handling for all functions (specially the disconnect function)
// use the array parameters in the sqlite3 methods to pass variables to query instead of using placeholders
// the values and where parameters in the update and delete function need to be enter as sql query format (e.g. column1 = value1, column2 = value 2, where column = value)
// write a function to filter-search values

const sqlite = sqlite3.verbose();

async function connectDB() {
    return new Promise((resolve, reject) => {
        const db = new sqlite.Database("./database.db", (err) => {
            if(err) { reject("Failed to connect to DB"); }
            resolve(db);
        });
    });
}

async function initDB() {
    const db = await connectDB();
    const sql = `SELECT name FROM sqlite_schema WHERE type = 'table' AND name NOT LIKE 'sqlite_%'`;
     return new Promise((resolve, reject) => {
        db.all(sql, [], (err, rows) => {
            if(err) { throw err; }
            if(rows.length === 0) {
                const sqlChores = `CREATE TABLE chores (
                    choreID TEXT PRIMARY KEY NOT NULL UNIQUE,
                    chore TEXT NOT NULL,
                    quantity INTEGER NOT NULL,
                    finished INTEGER NOT NULL,
                    comments TEXT
                )`; 
                const sqlProjects = `CREATE TABLE projects (
                    projectID TEXT PRIMARY KEY NOT NULL UNIQUE,
                    project TEXT NOT NULL,
                    activities INTEGER NOT NULL,
                    finished INTEGER NOT NULL,
                    deadline TEXT,
                    comments TEXT
                )`;
                const sqlActivities = `CREATE TABLE activities (
                    activityID TEXT PRIMARY KEY NOT NULL UNIQUE,
                    activity TEXT NOT NULL,
                    project INTEGER NOT NULL,
                    finished INTEGER NOT NULL,
                    deadline TEXT,
                    comments TEXT,
                    FOREIGN KEY (project)
                    REFERENCES projects (project)
                )`;
                const sqlLogs = `CREATE TABLE logs (
                    logID TEXT PRIMARY KEY NOT NULL UNIQUE,
                    date TEXT NOT NULL,
                    log TEXT
                )`;
                resolve(db
                .run(sqlChores)
                .run(sqlProjects)
                .run(sqlActivities)
                .run(sqlLogs));
            }
            resolve("Not should happen");
        });
    })
}

async function checkColumns(table) {
    const db = await connectDB();
    const sql = `PRAGMA table_info(${table})`;
    const columns = [];
    return new Promise((resolve, reject) => {
        db.each(sql, [], (err, row) => {
            if(err) { throw err }
            columns.push(row.name);
            resolve(columns);
        });
    });
}

async function selectEverything(table) {
    const sql = `SELECT * FROM ${table}`;
    const db = await connectDB();
    const rows = [];
    return new Promise((resolve, reject) => {
        db.each(sql, [], (err, row) => {
            if(err) { throw err }
            rows.push(row);
            resolve(rows);
        });
    });
}

async function getID(table, where) {
    const db = await connectDB();
    const sql = `SELECT * FROM ${table} WHERE ${where}`;
    return new Promise((resolve, reject) => {
        db.get(sql, [], (err, row)  => {
            if (err) { throw err }
            resolve(row[0]);
        });
    });
}

async function selectByID(table, idColumn, id) {
    const db = await connectDB();
    const sql = `SELECT * FROM ${table} WHERE ${idColumn} = ${id}`;
    return new Promise((resolve, reject) => {
        db.get(sql, [], (err, row) => {
            if(err) { throw err }
            resolve(row);
            })
    })
}

async function insertData(table, values) {
    const db = await connectDB();
    const columns = await checkColumns(table);
//    const columnsToInsert = [];
//    for(let index = 1; index < columns.length; index++) {
//        columnsToInsert[index-1] = columns[index];
//    }
//    columnsToInsert.join(", ");
    const sql = `INSERT INTO ${table}(${columns}) VALUES (${values})`;
    return new Promise((resolve, reject) => {
        db.run(sql, [], (err) => {
        if(err) { throw err}
        resolve(`${values} inserted into ${table}`);
        });
    });
} 

async function updateData(table, values, where) {
    const db = await connectDB();
    const sql = `UPDATE ${table} SET ${values} WHERE ${where}`;
    return new Promise((resolve, reject) => {
        db.run(sql, [], (err) => {
            if(err) { throw err }
            resolve(`${values} inserted into ${where} in ${table}`);
        });
    });
}

async function deleteData(table, where) {
    const db = await connectDB();
    const sql = `DELETE FROM ${table} WHERE ${where}`;
    return new Promise((resolve, reject) => {
        db.run(sql, [], (err) => {
            if(err) { throw err }
            resolve(`Removed row where ${where} from ${table}`);
            });
        });
}

//    let whereValue = (search * 1) ? `= ${search * 1}` : `LIKE '${search}%'`;
//    const columns = await db.checkColumns("logs");
//    const query = [];
//    columns.shift();
//    for(let x in columns) {
//        let found = await db.selectData("logs", columns[x], whereValue);
//        if(found.length !== 0) {
//            for(let y in found) {
//                query.push(found[y]);
//            }
//        }
//    }

export { selectEverything, getID, selectByID, insertData, updateData, deleteData, checkColumns, initDB };
