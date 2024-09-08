import { getUsers, addUser } from './database.js';

const register = document.querySelector("#option2");  
const signIn = document.querySelector("#option1"); 
const subRegister = document.querySelector(".submitRegister"); 
const subSignin = document.querySelector(".userLogin"); 
const logInEmail = document.querySelector(".userLogin .email"); 
const logInpassword = document.querySelector(".userLogin .password");
const registerEmail = document.querySelector(".userRegister .email"); 
const registerPassword = document.querySelector(".userRegister .password"); 
const registerName = document.querySelector(".userRegister .name"); 




async function displayUsers() {
  const users = await getUsers();
  console.log(users);
}

document.getElementById('loadUsers').addEventListener('click', displayUsers);

// Functionality for adding a user
document.getElementById('addUser').addEventListener('click', async () => {
  const userData = {
    name: "New User",
    email: "newuser@example.com"
  };
  await addUser(userData);
  alert('User added!');
});



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
   
    //take the value of the email and the the pass word and check if it is already reagisterd in the database, if yes log them in and send them to annother page
    //if not then the webpage should show an error saying that they are not registers 

}); 

subSignin.addEventListener("click", (event)=> {
  
}); 

const isValidEmail =(email) =>  {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }