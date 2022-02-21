function fizzbuzz(){
    for(let i = 1; i <= 100; i++){
    if(i > 3 && i%3 === 0){
            i%5 === 0 ? console.log('fizzbuzz') : console.log('fizz');
        } else if(i > 3 && i%5 === 0) console.log('buzz')
        else console.log(i)
    }
}

function newRandom(nums, percentage){
    
}

function sum(arr){
    // for(let i=0; i < arr.length; i++){
    //     for(let k = i+1; k < arr.length; k++){
    //         if(arr[i] + arr[k] === 10){
    //             console.log(i, k);
    //         }
    //     }
    // }

    for(let i=0; i < arr.length; i++){
        let res = [];
        let k = 10 - arr[i];
        let index = arr.indexOf(k);
        if(index !== -1 && res.indexOf(i) === -1){
            res.push(i, k);
            console.log(i, k)
        } 
    }
    
}