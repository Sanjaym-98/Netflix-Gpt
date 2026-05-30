

const validateInput = (email,password,userName)=>{
 
    const validateEmail =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const validPassword =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!]).{8,}$/.test(password);
    const validateUserName = /^[a-zA-Z0-9_]{3,16}$/.test(userName);

    if(!validateEmail){
        return ("Email is not valid")
    }
    if(!validPassword){
        return ("Password is not valid")
    };
    if(!validateUserName){
        return ("User Name is not valid")
    }

    return null;
     
}


export default validateInput