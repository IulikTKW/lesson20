const strArr = ['str1', 'str2', 'astr3'];

const vocale = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'O', 1, 'U', 'I'];

// const result = strArr.reduce((acc, curr) => {
//     if(vocale.includes(curr[0])) acc.push(curr);
//     return acc;
// }, [])

// const result = strArr.reduce((acc, curr) => {
//     if(!vocale.includes(curr[0])) acc.push(curr);
//     return acc;
// }, [])

// const result = strArr.reduce((acc, curr) => {
//     if(vocale.includes(curr[curr.length - 1])) acc.push(curr);
//     return acc;
// }, [])

// const result = strArr.reduce((acc, curr) => {
//     if(!vocale.includes(curr[curr.length - 1])) acc.push(curr);
//     return acc;
// }, [])

// const addElements = (list1, list2, k) => {
//     const validation = list1.some(item => typeof item !== 'string') || list2.some(item => typeof item !== 'string')

//     if(validation) return 'please use array of strings'

//     const results = list2.reduce((acc, curr, index) => {
//         if(index < k) acc.push(curr)
//         return acc;
//     }, [])

//     return [...list1, ...results]    
// }


// const addElements = (list) => {
//     return list.reduce((acc, curr) => {
//         if(curr.age >= 20 && curr.age <= 40) acc.push(curr)
//         return acc;
//     }, [])
// }

const showCons = (list, order) => {
    list.reduce((acc, curr, index) => {
        const elementIdx = order === 'ASC' ? index : list.length - 1 - index
        console.log(list[elementIdx])     
    }, null)

}

showCons(strArr, 'ASC')


// console.log(addElements(strArr, vocale, 3))