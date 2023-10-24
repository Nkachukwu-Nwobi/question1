function multiplier(arr){
    let multiply = []
    for (i=0; i<arr.length; i++){
       
        multiply.push(arr[i] * 2)
    }

    return [multiply[0],...multiply]
    
}