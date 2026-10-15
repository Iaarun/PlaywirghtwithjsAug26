
function readingJsonData(){
    const userdata = require("E:\\PLaywrightwithjavascriptaug26\\javascriptaug26\\revise\\userdata.json")
    console.log(JSON.stringify(userdata,null,2))
    console.log(userdata.students[0].name)
    console.log("Total students available: "+userdata.students.length)
    console.log("Object Length is: "+Object.keys(userdata).length)

    console.log(userdata.stream)
    console.log("Total Streams available: ",userdata.stream.length)

    console.log("Stream 2 value is: ",userdata.stream[1].stream2)
}

readingJsonData()

