// reset element a
let a=document.querySelectorAll('a')
a.forEach(el=>{
    el.addEventListener('click',function(event){
        event.preventDefault()
    })
})

let account=document.querySelector('.account')
account.addEventListener('click',createAccount)


// validation next create account
function createAccount(){
    vaidationCreateAccount()
}
function vaidationCreateAccount(){
    let login=document.querySelector('.login')
    let createAccount=document.querySelector('.createAccount')
    login.classList.add('active')
    createAccount.classList.add('active')
}

// validation prev login
let menuLogin=document.querySelector('.menuLogin')
menuLogin.addEventListener('click',handlerLogin)
function handlerLogin(){
    validationLogin()
}
function validationLogin(){
    let login=document.querySelector('.login')
    let createAccount=document.querySelector('.createAccount')
    if(login.classList.contains('active')){
        login.classList.remove('active')
        createAccount.classList.remove('active')
    }
}


// validation login input on submit
let submit=document.querySelector('.submit')
submit.addEventListener('click',sukses)
function sukses(){
  handlerSubmit()
}
function handlerSubmit(){
    let username=document.querySelector('.username').value
    let password=document.querySelector('.password').value
    if(username==''||password=='')alert('please input your password and username')
    else {
    alert(`sukses login in username ${username}`)
    window.location="https://www.goggle.com"
    }
}


// validation submit on create account
let create=document.querySelector('.prev .create')
create.addEventListener('click',handlerAccount)
function handlerAccount(){
    validationAccount()
}
function validationAccount(){
let username=document.querySelector('.usernameAccount').value
let password=document.querySelector('.passwordAccount').value
let email=document.querySelector('.email').value
let numberPhone=document.querySelector('.numberPhone').value

if(username==''||password==''||email==''||numberPhone==""){
    alert('please input value to username,password,email, or number phone')
 }
else{
    alert('sukses to create account welcome')
    let login=document.querySelector('.login')
    let createAccount=document.querySelector('.createAccount')
    if(login.classList.contains('active')){
        login.classList.remove('active')
        createAccount.classList.remove('active')
    }
 }
}
