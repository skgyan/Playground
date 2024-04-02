import { createRequire } from 'module';
const require = createRequire(import.meta.url);

require("./import/file1.js");
import "./import/file2.mjs"; // this import statement gets hoisted to the top of the file
import "./import/file3.mjs"; // this import statement gets hoisted to the top of the file

function getModule() {
    import("./import/file4.mjs"); // this is import method - dynamic import, this returns a promise 
    require("./import/file5.js"); // this is require method, synchronous loading, hence file5.js loads before file4.mjs
}

getModule();