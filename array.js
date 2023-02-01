 //Clouser
 //Recursion
 //Hostiong
 //Exception Hendling i-e Try Catch

 //Add
 const add= (x, y) => {
            if(isNaN(x) || isNaN(y)){
                throw "Plese provide valid arguments";
            }
            return x + y;
        }
        
        let x='5';
        let y=5;
         
        try {
            console.log(add(x,y));
        }
        catch(err) {
            console.log("Please Provide the valid arguments");
        }
        finally{
            console.log(add(x,y));
        }
        
        //Un Natural
      
        // const sum = add(x,y);
        // console.log(sum);
//Array Destructuring
const arr = ["Saab", "Volvo", "BMW"];
console.log(arr);
let [a,b]=arr;
console.log(a);
//Push an Element
arr.push(6);
console.log(arr);
//Replace Specific Element
for (const index in arr) {
    if(arr[index]==6){
        arr[index]+=2;
        break;
    }
}
console.log(arr);




//Get Even Number Array
const evenNum=(arr2)=>{
    return arr2.filter((element) => element % 2 == 0)
}


var arr1 = [2, 5, 7, 8, 10, 13, 16];
const even=evenNum(arr1);
console.log(even);


//Check String is Palendrom or not
function palendrom(input) {
    let rev = input.split("").reverse().join("");
    return rev === input;
   }
   
   
const input='ABCB';
const palen=palendrom(input);
if(palen==true){
    console.log(`String is Paleendrom that is: ${input}`)
}else{
    console.log(`String is not Paleendrom that is: '${input}`)
}


// Bubble sort Implementation using Javascript
  
// function bubbleSort(arr){
   
//     var i, j;
//     var len = arr.length;
     
//     var isSwapped = false;
     
//     for(i =0; i < len; i++){
       
//       isSwapped = false;
       
//       for(j = 0; j < len; j++){
//           if(arr[j] > arr[j + 1]){
//             var temp = arr[j]
//             arr[j] = arr[j+1];
//             arr[j+1] = temp;
//             isSwapped = true;
//           }
//       }
       
      // IF no two elements were swapped by inner loop, then break
       
//       if(!isSwapped){
//         break;
//       }
//     }
     
//     // Print the array
//     console.log(arr)
//   }
   
   
//   var arr = [243, 45, 23, 356, 3, 5346, 35, 5];
//   console.log(`Origional Array: ${arr}`)
   
//   // calling the bubbleSort Function
//   console.log('Sorted Array in Asending Order: ');
//   bubbleSort(arr);
//   //count sort Algorithm
