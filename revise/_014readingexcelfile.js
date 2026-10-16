const reader =    require('xlsx')

function readcompleteData(){
const dataFile= reader.readFile("E:\\PLaywrightwithjavascriptaug26\\javascriptaug26\\jscode\\TestData.xlsx")
const name = dataFile.SheetNames
console.log(name) 
let data=[]
// reading data from all the sheets 
for (let i=0; i<name.length; i++){
    console.log(dataFile.SheetNames[i])
    const temp=   reader.utils.sheet_to_json(dataFile.Sheets[dataFile.SheetNames[i]])
    temp.forEach((res)=>{
        data.push(res)
    })
}
 console.log(data)
}


function readspecificCellValue(){
  const workbook= reader.readFile("E:\\PLaywrightwithjavascriptaug26\\javascriptaug26\\jscode\\TestData.xlsx")
const sheetname=   workbook.SheetNames[0]
const sheet=  workbook.Sheets[sheetname]
const cellAddress = 'D2'
const targetCell = sheet[cellAddress]
const cellValue=  targetCell ? targetCell.v: undefined
console.log(cellValue)
}

function readspecificcolumn(){
const workbook= reader.readFile("E:\\PLaywrightwithjavascriptaug26\\javascriptaug26\\jscode\\TestData.xlsx")
const sheetname=   workbook.SheetNames[0]
const sheet=  workbook.Sheets[sheetname]
const range=  reader.utils.sheet_to_json(sheet, {header:1})
console.log(range)
const targetColumnIndex = 2

const columndata=  range.map(row=>row[targetColumnIndex])

console.log(columndata)
}
readspecificcolumn()

   