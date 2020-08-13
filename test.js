console.log("Hello")
console.log("task1")
function findOppositeNumber(n, firstNum) {
    let oppositenum;
    if (firstNum <= (n / 2)) {
        oppositenum = firstNum + n / 2

    }
    else {
        oppositenum = firstNum - n / 2
    }
    return oppositenum
}
console.log("tim soos ddooi dien firstnum trong day n so nguyen lien tiep ")
let n = prompt("NHap so n")
let firstNum = prompt("nhap firstnum")
n = parseInt(n)
firstNum = parseInt(firstNum)
console.log("gia tri so do dien la:")
console.log(findOppositeNumber(n, firstNum))
// console.log("task2")
// function merge2String(s1, s2) {
//     let mergedString = ""
//     if (s1.length <= s2.length) {
//         for (let i = 0; i < s1.length; i++) {
//             mergedString = mergedString + s1[i] + s2[i]
//         }
//         for (let j = s1.length; j < s2.length; j++) {
//             mergedString = mergedString + s2[j]
//         }
//     } else {
//         for (let i = 0; i < s2.length; i++) {
//             mergedString = mergedString + s1[i] + s2[i]
//         }
//         for (let j = s2.length; j < s1.length; j++) {
//             mergedString = mergedString + s1[j]
//         }
//     }
//     return mergedString
// }

// console.log("chuong trinh ghep 2 chuoi nha vao tu ban phim")
// let s = prompt("Nhap chuoi thu nhat: ")
// let sa = prompt("nhap chuoi thu 2: ")
// console.log("ket qua: ")
// console.log(merge2String(s, sa))
