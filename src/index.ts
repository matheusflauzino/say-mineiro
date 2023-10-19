const dialects = require("./dialects.json");



export function all() {
    return dialects;
}

export function random() {
    return dialects[Math.floor(Math.random() * dialects.length)];
}


export default {
    all,
    random,
};