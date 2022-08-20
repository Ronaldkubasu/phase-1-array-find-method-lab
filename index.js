// code your solution here
let superbowlWin = arrayOfObjects=> {
    let found = arrayOfObjects.find(element=>element.result=='W')
      if (found){
          return found.year
      }
      else{
          return undefined
      }
  }
  
  const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
  { year: "2010", result: "W"},
  ]
  
  console.log(superbowlWin(record))
