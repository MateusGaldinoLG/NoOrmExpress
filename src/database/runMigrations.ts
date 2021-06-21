import path from "path";
import fs from "fs";

import { createConnection } from "./connection";

(async () => {
    const client = await createConnection();
    const fileDataBaseDir = path.join(__dirname, "migrations")

    console.log("Start Migrations", new Date());

    fs.readdir(fileDataBaseDir, (err, files) =>{
        if(err){
            console.error(err)
        }
        files.forEach(file =>{
            fs.readFile(path.join(fileDataBaseDir, file), async (err, content)=>{
                if(err){
                    console.error(err)
                }

                const runMigrationQuery = content.toString();

                await client.query(runMigrationQuery); //creates the query for the database
                //console.log(content.toString());
            });
        });
        console.log("Finish Migrations", new Date());
    });
})();