//write an array function named arrayAvg that accecpt an array of numbers and returns the average of those numberbs

const arrayAvg=(numbers)=>{
    let sum=0;
    for(let i=0;i<numbers.length;i++){
        sum+=numbers[i]
    }
    return sum/numbers.length;
    
}

let num=[1,2,3,4,5,7,8,9]
console.log(arrayAvg(num))


//write an arrow function that return a no is ever or not

const isEven=(number)=>{
    if(number%2===0){
        console.log("the no is even");
    }
    else{
        console.log("the no is not even");
    }

}
let num2 =23;

console.log(isEven(num2))

//what will be the output for the below code

const object={
    message:"hello world",
    logMessage(){
        console.log(this.message)
    }
   
}

setTimeout(()=>{
     console.log(object.logMessage)
    
},1000)

//ans: it will return the logMessage function
//[function :logMessage]