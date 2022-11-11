const markWeight = 95;
const markHeight = 1.88;
const markBMI = markWeight / (markHeight**2);

const johnWeight = 85;
const johnHeight = 1.76;
const johnBMI = johnWeight / (johnHeight**2);

const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);


/* 
takes values for weight, height and bmi of two people before returning whether person 1 has a higher bmi than person 2
*/
