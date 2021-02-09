checkRange=(a,x,y)=>a.filter(i=>i>=x&&i<=y)




console.log(checkRange([2, 5, 6, 7, 1, 3, 4, 11, 56, 49],1,7))

    // const filtered = a.filter((int) => ( int < x ? null : int > y ? null : int))
    // const filtered = a.filter((int) => ( int >= x ? int <= y ? int : null : null))

    
// checkRange([2, 5, 6, 7, 1, 3, 4, 11, 56, 49],1,7)
    
// checkRange([2, 5, 6, 7, 1, 3, 4, 11, 56, 49],3,5)
    
// checkRange([2, 5, 6, 7, 1, 3, 4, 11, 56, 49],7,10)
    
// checkRange([7, 5, 11, 8, 9, 1, 13, 12, 88],99,100)
    
// checkRange([12, 1, 45, 56, 98, 14, 23, 46],14,14)
    
// checkRange([1, 1, 1, 99, 99, 99],88,88)
    
    