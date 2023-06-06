// let num = 1
// let num1 =3
// let result = num / num1
// console.log(result)
// let num = true
// let num1 =true
// let result = num / num1
// console.log(result)
let num =4
let x = ++num
console.log(x,num)
let result = 4**2
console.log(result)
//number=number 
//string=strong
//number = string

///relatinol a
console.log(7>=6)//true
let firstname="durgggesh"
let lastName="kumar"
console.log(lastName>firstname)

let laptop = {
    cpu:'i9',/*this this function variabler*/
    ram:16,
    brand:'DELL',

    greet:function() {
        /*this this function behavier */
        console.log('Helllo World!');
        console.log(this.cpu);// current object  to know 
        console.log(laptop?.ram);
        
    }
}


laptop.greet();

//this keyword


