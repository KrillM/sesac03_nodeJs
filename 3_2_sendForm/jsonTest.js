const data ={
    name: "krille",
    language: ["korean","english","russian"],
    job: "blogger",
    height: 175
};

const json=JSON.stringify(data);
console.log("json",json);
console.log("js object",JSON.parse(json));