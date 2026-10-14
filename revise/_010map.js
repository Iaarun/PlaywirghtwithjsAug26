//Map is a javascript object used to store data in keyvalue pair
// key can be anything (string, number, object, function)

function mapbasics(){
 const myMap=  new Map([
    [101, 'Arun'],
    [102, 'Rohit'],
    [103,'Abhishek']
 ])

 // get function to fetch the data get(key)
 console.log(myMap.get(101))

 // set function to store the data
  const userroles= new Map()
  userroles.set("user1","Admin")
  userroles.set("user2","Analyst")
  userroles.set("user3","Reader")
  userroles.set("user5","developer")
  userroles.set("user4","manager")

  console.log(userroles)
  console.log("Data stored in map: "+userroles.size)
  //check if key is available
  console.log("check if key is available: "+ userroles.has('user4'))
  console.log(userroles.delete('user4'))
  console.log("check if key is available: "+ userroles.has('user4'))
  console.log(userroles.delete('user4'))
}
mapbasics()
  //iterate over map
  function iterateOverMap(){
    const userroles= new Map()
  userroles.set("user1","Admin")
  userroles.set("user2","Analyst")
  userroles.set("user3","Reader")
  userroles.set("user5","developer")
  userroles.set("user4","manager")
  console.log("******** for of*******")

   for(let[key, value] of userroles ){
    console.log(`for ${key} value is ${value}`)
   }
 console.log("******** foreach*******")
   userroles.forEach((value, key)=>{
    console.log(`for ${key} value is ${value}`)
   })

   console.log("******** iterate over keys*******")
   for(let key of userroles.keys()){
      console.log(key +"==>"+ userroles.get(key))
   }
  }
 
  // remve the duplicate data from string/array-> string
  // ilovelearningjavascript

  function removeDuplicates(str){
      // str = 'ilovelearningjavascript'
      const uniquedata = new Map()
      let result=""
      for(const ch of str){
        if(!uniquedata.has(ch)){
            uniquedata.set(ch, true)
            result+=ch
        }
      }
      return result
  }
str = 'ilovelearningjavascript'
  console.log(removeDuplicates(str))

