const register = document.querySelector("#option2");  
const signIn = document.querySelector("#option1"); 
const subRegister = document.querySelector(".submitRegister"); 
const subSignin = document.querySelector(".userLogin"); 
const logInEmail = document.querySelector(".userLogin .email"); 
const logInpassword = document.querySelector(".userLogin .password");
const registerEmail = document.querySelector(".userRegister .email"); 
const registerPassword = document.querySelector(".userRegister .password"); 
const registerName = document.querySelector(".userRegister .name"); 

//declaring the databse 
const db = require('./database.js');



register.addEventListener("click", () =>{
    console.log('register');
    document.querySelector(".userRegister").style.display = "block";
    document.querySelector(".userLogin").style.display = "none";
}
); 

signIn.addEventListener("click", () =>{
    console.log('signin');
    
    document.querySelector(".userLogin").style.display = "block";
    document.querySelector(".userRegister").style.display = "none";
}); 

subRegister.addEventListener("click", (event)=>{
    event.preventDefault();
    console.log('subregister');
    //take the value of the email and the 
}); 

subSignin.addEventListener("click", (event)=> {
    event.preventDefault();
    console.log('subsing');
}); 

const isValidEmail =(email) =>  {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }