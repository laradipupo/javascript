'use strict'
// conversion and conversion

// let gg = prompt("enter any number")
// string = String()


// to numbers 
// Number()  === "3" or "3542"
// or 
// parseInt()
// let hi =    String(6 )   


// let gg = prompt("enter any name")
// let cup = "mark" 


// console.log( gg==cup )

// // if
// if(condition ){
//         execute statement 
// }else {
//     execute statement 

// }

// let name = prompt("enter any name ")
// let pwd1 = prompt("enter your password ").toUpperCase() 

// if (pwd1=="B4D3" || pwd1=="LCD1"){
//     console.log(`${name} you are allowed`)
// }else{
//     console.log(`${name} you are not  allowed`)

// }

// let cat = ["word"];

// let cups = ["sam","john"];
// cups.push("ike", "mark", "bright")
// let gets = cups.indexOf("mark")

// console.log(gets)
// let check = prompt()

// if( cups.includes(check)){
//     console.log(check + "yes it is ")
// }else{
//     console.log("no")
// }

// 1 declare an empty array 
// 2 store the password which is B43M , 11CD , 77LC , in an array  
// 3 check if any of the password is correct  
// note: make use of the include method  
// 4 if the password is correct let it generate random numbers and then add it up inside the empty array then print out whatever is inside the empty array

// let rand = [];
// let pass = [ 'B43M', '11CD', '77LC', 111]
// let ask = prompt("enter your password ")
// if(pass.includes(ask)){
//     let gen = Math.trunc(Math.random()*2000)
//      rand.push(gen)
//     console.log(rand)
    
// }else{
//     alert("wrong password ")
// }



// let obj = {
//     names:"mike",
//     age:19,
//     status:"single",
//     arr: [1,2,3,4,5],
//     fun : function(){
//          return "yes"
//     }
// }

// console.log(obj.age + obj.status )
// console.log(obj["names"])
// console.log(obj.arr[1])
// console.log(obj.fun())


// let calc = Math.trunc(Math.random());

// let gets = calc + 3 
// const asked = prompt("what do you want")
// const rice = "rice"

// if(asked=="egg" || asked=="beans" && "rice" ){

//     const fish = "fish";
//     console.log(`buy ${asked} and ${fish} ${rice} `)

// }else{
//     console.log("come back")
// }


// else if 
// if ( condition ){
//     execute statement 
// }else if( condition ){
//     execute statement
// }else{
//     execute statement 
// }


// if(1>3){

//     alert("yes")

// }else if(4>5){

//     alert("okay")

// }else{
//     alert("none")
// }

// 3 2 5 
// let gets = Number(prompt("enter a number"))

// if(gets == 2 && gets%2==0){
//     alert("even")
// }else if (gets == 2 && gets%2==1){
//     alert("odd")
// }else if(gets == 3 && gets%2==0){
//     alert("even")
// }else if (gets == 3 && gets%2==1){
//     alert("odd")
// }else if(gets == 5 && gets%2==0){
//     alert("even")
// }else if (gets == 5 && gets%2==1){
//     alert("odd")
// }else{
//     alert("not part")
// }


// let gets = Number(prompt("enter a number"))
// if(gets%2==0){
//     alert("even")
// }else if (gets%2==1){
//     alert("odd")

// }else{
//     alert("nothing")
// }




// const pass1 =  "77CD"
// const pass2 = "44DB"
// const check = prompt("enter a password")

// if(check==pass1){
//     let names1 = "sam";
//     let names2 = "mike";
//     let names3 = "luke";
//     const collects = prompt("enter a name")


//     if(collects == names1 || collects == names2 || collects == names3){
//         alert(`yes ${collects} is a student `)
//     }else{
//         alert(`no ${collects} is not a  student `)

//     }


// }else if (check==pass2){
//     let names = "mike"+ "luke" + "sam"    
//     alert(names)
// }else {
//     alert("wrong password")
// }



// let days = prompt("enter a number on this days \n 1- monday  \n 2 Tuesday ")

// alert(days)

// let paz = 111;
// let asz = prompt("enter your password")

// if(asz == paz){
//         let days = prompt("enter a number on this days \n 1- monday  \n 2 Tuesday ")
        

//             if(days=="1"){
//                 alert("go and buy provisions")

//                 let amount =Number( prompt("enter the amount you have "))
                

//                                     if(amount>= 5000 ){
//                                         alert("you can go to the market")
//                                     }else{
//                                         alert("sapa")
//                                     }




                
//             }else if(days=="2"){
//                 alert("go and FLEX")

//             }else{
//                 alert("wrong days ")
//             }




// }else{
//     alert("wrong password")
// }


// let student = {

//     name :"dera",
//     age:23,
//     nunb : [1,2,3,4],
//     calc : function(){
//         return 5;
//     }



// }



// let total = {
//     words: student.name + "is a good developer",
//     total_age : student.age + student.nunb[3],
//     arry : student.calc() + student.nunb[0] + student.nunb[1],
//     check: function(){
//                         const gets = Number(prompt("input your year of birth"))
//                         let age = 2022-gets
//                         return age
//                     }

// }
// console.log(total.check())

// let arrs =["john",true,17, "i am good"]

// console.log(arrs)


// for(i=0; i<arrs.length; i++){
//     console.log(arrs[i])
// }

// switch statement

// case
// break
// default

// let hit = prompt("enter any number ");

// switch(true){
//     case hit%2==0 : alert("even")
//     break
//     case hit%2==0 : alert("even")
//     break
  

//     default : alert("odd")
// }

// ternary operators  ?

// if(10>2){
//     alert("yes")
// }else{
//     alert("no")
// }


// ternary
// 10>2? alert("yes"):alert("no")

// a shop has the total of 25,000 naira in every two month, with a saved amount bill of 50,000 naira in the bank , which the bank get 7% from every saved account 
// task:
// 1 create a program that checks if the the shop has up to 25000 naira in every two month ... if not let it state the amount it has and the reason why it having that amount 

// 2  if the amount is up to 25,000 naira let it add it up with the 50,000 naira in the bank and then state the total amount in the bank 


// note: make use of any method you know and try to make your code DRY  (LOVE TO SEE HOW YOU CAN USE TERNARY ON THIS TASK )
// function declaration 
// function jack(){
//     let per= 7/100*50000
//     let bank = 50000 - per
//     return bank 
// }

// let shop = 25000

// let ques = Number(prompt("this is two month ... how much do you have "))
// switch(true){
//     case ques>=shop : alert(jack() + ques)
//     break
//     default:  
//     let reason = prompt("enter reason") ;
//     alert(" this is what i have " + ques + " reason : " + reason )
// }

// // function

// function save(){

// return  


// }

// save()



// // the price of each food is marked down by 5% if a customer buys between 8 and 11kg 

// // and 10 % if the customer buys 12kg and above 

// // pawpaw
// // banana , mango grape orange 
// // price per kg is 120 
// // console.log(arr)

// let arr = []
// document.querySelector("#sub").addEventListener("click", function(e){
//     e.preventDefault()
    
//     let gg = document.querySelector("#fruit").value;
//     let kg =document.querySelector("#kg").value;
//     document.querySelector(".add").innerHTML+=`${gg} = ${kg} kg <br>`;
//     arr.push(Number(kg));
//     score=0;
//     let per5 = 5/100

//         for(x of arr){
//             score += x
            
//         }
  
        

//     if(score>=8&&score<=11){
//         let bill = 120*score
//         let add = per5*bill 
//         let total= bill - add
//          document.querySelector(".calc").innerHTML=total.toLocaleString()
        
        
//     }else if(score>=12){
//         let per10 = 10/100
//         let bill = 120*score
//         let add = per10*bill 
//         let total= bill - add
//          document.querySelector(".calc").innerHTML=total.toLocaleString()
//     }else{
//         let bill = 120*score

//         document.querySelector(".calc").innerHTML=bill.toLocaleString()

//     }

    
    
   
// })



// correction 


// function carry(){

//     const prom = +prompt("enter any number ");
//     switch(prom){
//         case prom : return prom
//         break;
//         default : return "error" 
//     }

// }


// function maths(){
    
// if(carry()%2==0){
//         return "even"
    
//     }else{
//         return "odd"
//     }
   
// }
// console.log(maths())



// let john = 3;
// const compare = 15 ;
// const addup = +prompt("enter johns addup age ");
// const  total = john + addup ;

// if(total < compare ){
//     alert("you are not of age , so you cant get a toy  ")
// }else if(total>=compare){
//     alert("you are of age  now give him a toy")
// }


// 1) pass in 3 values in an array and then check if they are in your list ... .... 
// note if they are in your list let it state that that value is in your list 


// 2) store caleb and 15 in an array and then check if caleb is older than luke which luke is 43 years old 

// let store = ["caleb",15]
// const luke = 12;

// if(store[1]>luke){

//     alert(store[0] + " is older than luke")

// }else if(store[1]<luke){

//     alert("luke" + " is older than " + store[0])

// }else{

//    alert("wrong input")

// }



// const person = 
// {

//     cow  : {
//                     name:'succy',
//                 age:15,
//                 status:'single',
//                 state:'imo'

//              },


//  ram :
//             {
//                 name:'sam',
//                 age:15,
//                 status:'single',
//                 state:'ogun' 
//             },

//     arr:[1,2,3,4],

//     get : "you all",
//     func: function(){
//             return 'the lord is good '
//             }
    
// }






// console.log(person.arr[2])

// let all_arr= ["john",'mike',"caleb","paul", "sam", "peter","luke"]
// // let all= ["john",'mike',"caleb","paul", "sam", "peter","luke"]
// // all.reverse()                               
// for(let i=0; i<all_arr.length; i++){

//     // for(let j=0; j<all.length; j++){
//     console.log(all_arr[i])
//     // }

// }



// for(let i=2; i< 5 ; i++){

//     for(let j=0; j<=12; j++){
//     console.log(i + "x" + j +"="+i*j)
//     }

// }
// Dom 
// document object model 

// append()
// remove()
// createElement()

// let tag = document.createElement("h3")
// let tag2 = document.createElement("div")
// let body = document.body
// body.append(tag)
// body.append(tag2)
// body.append("how are you")

// tag.setAttribute("style","color:blue;border:2px solid green;background-color:black")
// tag.setAttribute( "class","good")


// tag2.remove()
// console.log(body) 
// const namex = prompt("enter any name of your chioce ")

// let hex = document.querySelector(".hex").textContent=`hello ${namex}`;
// let h1 = document.querySelector("h1")
// h1.setAttribute("id", "jude")
// h1.textContent="yes i have added an id"
// console.log(h1)

// let bio = document.querySelector(".bio")
// bio.textContent="Biography of Successwise"


// let img = document.querySelector("#img")
// img.src="image/suc.jpeg"
// img.setAttribute("width",`${300}px`)
// img.setAttribute("height",`${300}px`)
// img.style.border=5+"px solid navy"

// let about = document.querySelector(".about")
// about.textContent="About Successwise"

// let writeup = document.querySelector(".writeup")
// writeup.innerHTML="my name is success " + "<br>" +"i am 15year old ,"+ "<br>" +"i am from imo state"

// let play = document.querySelector(".play") 
// play.style.display="flex"
//  play.style.flexDirection="column" 
//  play.style.justifyContent="center"
//   play.style.alignItems="center"



// creating an account for a customer 

// the customer sells livestock which are  ram cow and  chicken 
// // ram 
// totalnumber of rams == 75; boughtfor == 200 ; sellsfor == 400 newlybought == 0 ; total number of goods lost == 0 ; totalamount ofgoods lost == 0 ;totalnumber of goods sold == 0; totalamount of goos sold == 0 ; total amount of all goods == 0 ; totalnumber of goods remaining ==0 totalamount of goods remaining == =0 ;



// cow 
// totalnumber of cow == 83; boughtfor == 500 ; sellsfor == 800 newlybought == 54 ; total number of goods lost == 0 ; totalamount ofgoods lost == 0 ;totalnumber of goods sold == 0; totalamount of goos sold == 0 ; total amount of all goods == 0 ; totalnumber of goods remaining ==0 totalamount of goods remaining == =0 ;

// chicken
// totalnumber of cow == 300; boughtfor == 3000 ; sellsfor == 6000 newlybought == 200 ; total number of goods lost == 0 ; totalamount ofgoods lost == 0 ;totalnumber of goods sold == 0; totalamount of goos sold == 0 ; total amount of all goods == 0 ; totalnumber of goods remaining ==0 totalamount of goods remaining == 0 ;

// create a program that has three users admin manager and super admin with password 
let newlybought= +document.querySelector("#newlyboughtgoods").value;
let product ={

    ram:{
        sn:document.querySelector(".id").textContent =1,
        productname: document.querySelector(".productname").textContent="ram",
        numberofgoodsbought:document.querySelector(".numberofgoodsbought").textContent=75,
        costprice:document.querySelector(".costprice").textContent=200000,
        sellingprice:document.querySelector(".sellingprice").textContent=400000
        // :,
        // totalamountofgoodssold:,
        // totalnumberofgoodsremaining:,
        // totalamountofgoodsremaining:,
        // totalnumberofgoodslost:,
        // totalamountofgoodslost:
    }


}

// #newlyboughtgoods



document.querySelector("#newlyboughtgoods").addEventListener('blur', function(){
    
    let newlybought= +document.querySelector("#newlyboughtgoods").value;
    product.ram.newlyboughtgoods=newlybought;
    
    let collect = product.ram.totalnumberofallgoods=product.ram.numberofgoodsbought + product.ram.newlyboughtgoods;
    if(collect){
        document.querySelector(".totalnumberofallgoods").textContent=collect
    }else
    {
        document.querySelector(".totalnumberofallgoods").textContent=0

    }
    // totalamountofallgoods
    
    document.querySelector(".totalamountofallgoods").textContent=product.ram.sellingprice * product.ram.totalnumberofallgoods
})


document.querySelector("#totalnumberofgoodssold").addEventListener('blur', function(){


  let  soldnum = +document.querySelector("#totalnumberofgoodssold").value;
    document.querySelector(".totalamountofgoodssold").textContent=soldnum*product.ram.sellingprice;


   let remaining = document.querySelector(".totalnumberofgoodsremaining").textContent=product.ram.totalnumberofallgoods-soldnum

    document.querySelector(".totalamountofgoodsremaining").textContent=remaining*product.ram.sellingprice

   
    let goodslost = document.querySelector(".totalnumberofgoodslost").textContent=(soldnum + remaining)-product.ram.totalnumberofallgoods


    document.querySelector(".totalamountofgoodslost").textContent=goodslost *product.ram.sellingprice
})


// console.log(product.ram.numberofgoodsbought + product.ram.newlyboughtgoods)




const users = ["mark", "ifeoma", "frank"];
const password = [111, 222, 333];

document.querySelector(".table").style.display="none"

document.querySelector("#button").addEventListener('click',function(e){
    e.preventDefault()
    let username = document.querySelector("#username").value;
    let pass = +document.querySelector("#password").value;

    if( users.includes(username) && password.includes(pass)){

        document.querySelector(".container").style.display="none"
    document.querySelector(".table").style.display="block"



    }else
    {
        document.querySelector(".container").style.display="block"
    document.querySelector(".type").textContent="wrong username or password";
    document.querySelector(".type").style.color = "red"







    }


})

document.querySelector("#username").addEventListener('focus',function(e){
    e.preventDefault()

    document.querySelector(".type").textContent="user is typing......."


})
document.querySelector("#username").addEventListener('blur',function(e){
    e.preventDefault()

    document.querySelector(".type").textContent=" "

})























