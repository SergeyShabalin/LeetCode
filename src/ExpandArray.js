
function expandArray(arr){

    let newArr = []

    arr.forEach(item =>{
      if(!Array.isArray(item)){
          newArr.push(item)
      } else{
          const res = expandArray(item)
          newArr.push(...res)
      }
    })
    console.log(newArr)
    return newArr
}


expandArray([1,2,3,[4,5,[6], [7],8],9])

