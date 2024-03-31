//aray ki orignal propery display karo

let array1 = [1,2,3,4,5]

Array.prototype.extra = "pawan"

console.log(array1)

for (const key in array1) {
    console.log(key)
    console.log("value",array1[key])
}


//hame bus array ki orignal value chahiye
for (const key in array1) {
   if(array1.hasOwnProperty(key)){
    console.log("orignal array1 ki value",array1[key])
   }

}



