function getComputerChoice(){
    let count1 = count2 = count3 = 0;
    for(let x = 0; x<1000000; x++){
    let choice = Math.floor(Math.random()*3);
    switch (choice){
        case 0:{
            count1++;
            break;
        }
        case 1:{
            count2++;
            break;
        }
        case 2:{
            count3++;   
            break;
        }
    }
}
console.log(count1/10000);
console.log(count2/10000);
console.log(count3/10000);
}
