// code your solution here

const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

// superbowlWin function
function superbowlWin(record){
    if (record.find(record => record.result === "W")){
        return record.find(record => record.result === "W").year
    }
    else{
        return undefined
    }
}

console.log(superbowlWin(record))
