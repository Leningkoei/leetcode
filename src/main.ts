import fs from "fs";
import path from "path";

const main = async () => {
    fs.readdir(path.resolve("src", "problems"), (err, files) => {
        files.forEach(file => {
            const newName = file.split("_").join("-");

            fs.rename(
                path.resolve("src", "problems", file),
                path.resolve("src", "problems", newName),
                err => { throw err }
            );
        });
    });
};

main();

