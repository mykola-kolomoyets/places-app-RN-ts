import * as SQLite from 'expo-sqlite';

class Database {
	private static instance: Database;
	
	public database = SQLite.openDatabase('places.db');
	
	constructor() {}
	
	public static getInstance() :Database {
		return Database.instance || new Database();
	}
	
	public init() {
		return new Promise((res, rej) => this.database.transaction((tx) => {
				tx.executeSql(`CREATE TABLE IF NOT EXISTS places (
			id INTEGER PRIMARY KEY NOT NULL,
			title TEXT NOT NULL,
			imageUri TEXT NOT NULL,
			address TEXT NOT NULL,
			lat REAL NOT NULL,
			lng REAL NOT NULL
		)`,
					[],
					() => res(true),
					(_, error) => {
						rej();
						return false;
					});
			})
		);
	}
};

export default new Database();

