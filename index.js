// Code your solution in this file!
const returnFirstTwoDrivers = drivers =>{
    const newDrivers = [...drivers];
    return newDrivers.splice(0, 2)
}
const returnLastTwoDrivers = drivers => {
    const newDrivers = [...drivers]
    return newDrivers.splice(-2)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = n => {
    return function(num) {
        return num * n;
    }
}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3) 
 const selectDifferentDrivers = (arrayofDrivers, returnFirstTwoDrivers)=> {
     return returnFirstTwoDrivers(arrayofDrivers)
 }