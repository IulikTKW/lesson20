// const obj = {
//     name: 'Alex',
//     job: 'dev',
//     age: '33'
// }

// const arr = ['str', 'str1', 'str2']

// arr[1]

// obj.age

// console.log(obj['job'])

// for (let index in arr) {
//     console.log('for in', index)
// }

// for (let value of arr) {
//     console.log('for of', value)
// }


// for (let index in obj) {
//     console.log('for in', obj[index])
// }

// const obj = {
//     name: 'Alex',
//     job: 'dev',
//     age: '33'
// }

// const values = Object.values(obj)
// const keys = Object.keys(obj)

// console.log('v', values)
// console.log('k', keys)

// const arr = [
//     {
//         closeToHome: true,
//         high: false,
//         black: true,
//         test: true,
//     },
//     {
//         closeToHome: true,
//         high: false,
//         black: true,
//         test: false,
//     },
    // {
    //     closeToHome: true,
    //     high: false,
    //     black: true,
    //     test: false,
    // },
    // {
    //     closeToHome: true,
    //     high: false,
    //     black: true,
    //     test: false,
    // },
    // {
    //     closeToHome: true,
    //     high: false,
    //     black: true,
    //     test: false,
    // },
// ]

// const showObj = (list) => {
//     return list.reduce((acc, curr) => {

//         console.log('acc pass1', acc)
//         console.log('acc pass1', curr)


//         const accValues = Object.values(acc)

//         console.log('pass 2', Object.values(acc))

//         const filtered = Object.values(acc).filter((item) => {
//             return item;
//         })
//         const filtered1 = Object.values(curr).filter((item) => {
//             return item;
//         })
//         console.log('pass 3', filtered)
//         console.log('pass 4 acc lungime', filtered.length)
//         console.log('pass 4 curr lungime', filtered1.length)

//         console.log('pas 5', filtered.length > filtered1.length )


        // const filtredAcc = accValues.filter(item => item)
        // const currValues = Object.values(curr).filter(item => item)

        // console.log('acc', filtredAcc)
        // console.log('curr', currValues)

        // return filtredAcc.length > currValues.length ? acc : curr
//     })
// }

// showObj(arr)

const arr = [1,4,2,4,6,4,2,5,7]

// sortare crescatoare
// const sortASC = arr.sort((a, b) => {
//     return a - b
// })
// console.log('ASC', sortASC)
// sortare descrescatoare

// const sortDSC = arr.sort((a, b) => {
//     return  b - a
// })
// console.log('DSC', sortDSC)

// item % 2 === 
//filtrati numerele pare
// const sortASCEven = sortASC.filter(item => item % 2 === 0)
// console.log(sortASCEven)
//filtrati numerele impare

// const sortDSCOdd = sortDSC.filter(item => item % 2 !== 0)
// console.log(sortDSCOdd)

// cifrele pare in crestere dupa care cifrele impare in descrestere

// const sortFunc = (numList) => {
//     const even = numList.filter(item => item % 2 === 0).sort((a, b) => {
//         return a - b
//     })
//     const odd = numList.filter(item => item % 2 !== 0).sort((a, b) => b - a)

//     return [...even, ...odd]
// }

// console.log(sortFunc(arr))