const form= document.getElementById('form');
const nom=document.getElementById('nom');
const prenom=document.getElementById('prenom');
const email=document.getElementById('email');
const password=document.getElementById('password');

form.addEventListener('submit', e =>{
e.preventDefault();
validateInputs();
});
const setError =(element, message)=>{
const inputControl = element.parentElement;
const errorDisplay= inputControl.querySelector('.error');
errorDisplay.innerText= message;
inputControl.classList.add('error');
inputControl.classList.remove('success');


}
const setSuccess = element=>{
    const inputControl=element.parentElement;
const errorDisplay=inputControl.querySelector('.error');
errorDisplay.innerText='';
inputControl.classList.add('success');
inputControl.classList.remove('error');
};
const isValidEmail=email =>{
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLocaleLowerCase());
}
const validateInputs=()=>{
const nomValue = nom.value.trim();
const prenomValue = prenom.value.trim();
const emailValue = email.value.trim();
const passwordValue= password.value.trim()

if (nomValue === ''){
    setError(nom, 'nom is required');

}else{
    setSuccess(nom);

}
if (prenomValue === ''){
    setError(prenom, 'prenom is required');

}else{
    setSuccess(prenom);

}
if (emailValue === ''){
    setError(email, 'email is required');

}else if(!isValidEmail(emailValue)){
    setError(email, 'provide a valid email adress');
}else {
    setSuccess(email);
}
  if (passwordValue===''){
    setError(password, 'password is required');

}else if(passwordValue.length<8){
    setError(password, 'password must be at least 8 characters');

}else{
    setSuccess(password);

  } 
  

}
;

