const fs =  require('fs')
const path = require('path')
const prompt = require('prompt-sync')()


function createjsonfile(){
const userdata =  {
        "id": "A1",
        "name": "Jim",
        "math": 60,
        "physics": 66,
        "chemistry": 61
    }

   const jsonString=  JSON.stringify(userdata, null, 2)

   console.log(jsonString)

    
    fs.writeFile('userdata.json', JSON.stringify(userdata, null, 2), (err) => {
    if (err) {
        console.error("Error writing file:", err);
    } else {
        console.log("JSON file created successfully!");
    }
});
}




