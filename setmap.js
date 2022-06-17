new Set([1,1,2,2,3,4]) // 1,2,3,4

[...new Set("referee")].join("")// "ref"


let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

// {[1,2,3]:true,[1,2,3]:false }

//Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

hasDuplicate([1,3,2,1,]) // true
hasDuplicate([1,5,-1,4,'p','l' ]) // false

function hasDuplicate(arr) {

    const uniArr = new Set(arr);


    return !(arr.length === uniArr.size);
    
}

//Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }

function vowelCount(str) {
    //let c = 1;

   const arrStr = str.split('');
   const vowelCount = new Map();
   const vowels = 'aeiou';
   const vowelArr = arrStr.filter((char) => vowels.includes(char));
   
   vowelArr.forEach(char => {
       if(!vowelCount.has(char)){
        vowelCount.set(char,1);

       }else{
        vowelCount.set(char, vowelCount.get(char) + 1);
       }
    });
   return vowelCount;   
   }

   
