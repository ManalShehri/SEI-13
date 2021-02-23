// map map map !! 
// 1 - conver it into an array of objects => [{name : "yasir" } , ..... ] 
var array = ["yasser" , "Saad" , "eber" , "atheer"]

var objects = array.map(ele => {
  return {name:ele}
})



console.log(objects)

// =========================================================================================
// 2-Make me a array where only ages of objects => [27 , 27.23 , ....]
var array = [{name : "yasser" , age : 21} , {name : "ebere" , age : 27.23 },
{name : "nahid" , age : 29 } , {name : "Ahmed" , age : 31 }  , {name : "Atheer" , age : 25 }  ]

var AgesOfages = array.map(ele => {
  return {age:ele.age}
}) 




console.log(AgesOfages)

// =========================================================================================
// 3 - add id into this objects inside the array => [{name: "yasir" , age : 27  , id : 1} , ...] 
var array = [{name : "yasser" , age : 21} ,  {name : "Khalid" , age : 31 } ,{name : "ebere" , age : 27.23 },
{name : "nahid" , age : 29 } ,  {name : "Atheer" , age : 25 }  ]

var arrayWithId = array.map((ele , id) => {
  var newEle=ele;
  newEle.id=id+1;
  return newEle
}) 



console.log(arrayWithId)

// =========================================================================================
//  4 - import the array of student from the students.js file and : 
// add to objects gifts  => [{name:'Khulod'  , Gender :'female' , gift :"Flower" }, ..... ]
// if Gender female the gift is Flower and if Gender male the gift is Coffee .

const {students} = require('./students.js'); 

var studentsWithGifts = students.map(student => {
  let giftStd=student;
  if (student.Gender==='female'){
    giftStd.gift="Flower"
    
  }
  else{
    giftStd.gift="Coffee"
  }
  return giftStd;
})




console.log(studentsWithGifts)


//   ========================================================================================
//                              !!+!!!+!  Bonus !+!!!+!! 
// أ - use only map! to conver the sentence to array of objects like =>[{name: "yasser" , age : 27  , id : 1} , ...]
// and no undfinde plz !  
var isThatArray = "Yasser 21 Abdulrahman 31 Adel 27 Abdulaziz 29 Atheer 25"



let oneLine = isThatArray.split("A").map((ele,i) => ({name :!i==0? "A"+ ele.split(" ")[0]:ele.split(" ")[0] ,age :ele.split(' ')[1] , id :i}) )


// console.log("")

// ok you solve it ! what about this one ? 
// can you solve the bonus in one line ? 





// =========================================================================================
// ب  - Write a function shiftLetters that takes a string and uses .map to return an encoded string with each letter shifted down the
// alphabet by one. Hint: Use Look up the JS functions String.fromCharCode() and String.charCodeAt() .
// see if you can use Ascii code to acomplish this
// ex. shiftLetters('hello') // => 'ifmmp'
// ex. (shiftLetters('abcxyz') // => "bcdyz"
var shiftLetters = (string) =>{
  var shifted="";
    string.split("").map(char => {
      var charCode = (char.charCodeAt()) + 1;
      shifted += String.fromCharCode(charCode);
      return shifted;
    })
    return shifted;
  };

  
  console.log(shiftLetters("hello"))
