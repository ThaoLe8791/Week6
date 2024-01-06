function best(arr){
    let maxP = 0;
    for (let i=0;i<arr.length;i++){
        const buy=arr[i];
        // console.log(buy);
        for (let j=i;j<arr.length;j++){
            const sell=arr[j];
            // console.log(sell);
            const profit = sell-buy;
            if (profit > maxP){
                maxP = profit;
            }
        }    
    }
    return maxP
}

console.log(best([7,9,5,6,3,2]));
console.log(best([7, 9, 5, 6, 3, 2]));
