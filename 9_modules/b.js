import MyMain, { sum, z as Z } from "./a.js";
import * as A from "./a.js";

console.log("C", A);
let p = "A";

var q = "B";

const ans = p + q;
const o = sum(3, 4);

console.log(o, ans, Z, A.z, A.default);
MyMain("Accio Job");
