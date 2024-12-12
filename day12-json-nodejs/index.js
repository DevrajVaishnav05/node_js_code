const bioData ={
    name:"Devraj",
    age:20,
    Work:"Software Developer"
}
// console.log(bioData.name)
// console.log(bioData.Work)
// console.log(bioData.age)
// console.log(bioData)

// Object to change in json in ====> stringify
const jsonData = JSON.stringify(bioData)
// console.log(jsonData)


// json to change Object in ====> parse

const objData = JSON.parse(jsonData);
console.log(objData)