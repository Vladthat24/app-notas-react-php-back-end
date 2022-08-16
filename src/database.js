import mysql from "mysql2/promise";
import { config } from "./config";

export const connect = async () => {

   return await mysql.createConnection(config);
    
  //const result = await con.query("SELECT 1+1")
  //const [rows] = await con.query("SELECT 1+1")
};


