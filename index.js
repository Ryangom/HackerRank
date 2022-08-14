let a=[17 ,28 ,30]
let b=[99 ,16 ,8]

function compareTriplets(a, b) {
    // Write your code here
    let c=[0,0]
    for(let i=0;i<a.length;i++){
        if(a[i]>b[i]){
            c[0]+=1
        }
        else if(a[i]<b[i]){
            c[1]+=1
        }
    }
    return c

}
