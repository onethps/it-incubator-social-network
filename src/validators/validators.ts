export const requeredFiled = (value:string) => {
    if (value) return undefined
    return "Field is required"
}


// export const maxLength30 = (value:string) => {
//   if(value.length > 15) return "Max Lengst fwqfqwfqwf"
//     return  undefined
// }

export const maxLength = (maxLength:number) => (value:string) => {
    if (value.length > maxLength) return `Max length should be to ${maxLength}`
    return undefined
}



