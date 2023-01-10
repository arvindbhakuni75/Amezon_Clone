document.querySelector(".r-btn").addEventListener('click', event =>{
    document.querySelector(".product-slide").scrollLeft +=600;
    event.preventDefault();

})

document.querySelector(".l-btn").addEventListener('click', event =>{
    document.querySelector(".product-slide").scrollLeft -= 600;
    event.preventDefault();

})

document.querySelector(".btn-1a").addEventListener('click', event =>{
    document.querySelector(".product-slide-1").scrollLeft +=900;
    event.preventDefault();

})

document.querySelector(".btn-1b").addEventListener('click', event =>{
    document.querySelector(".product-slide-1").scrollLeft -=900;
    event.preventDefault();

})

document.querySelector(".btn-2a").addEventListener('click', event =>{
    document.querySelector(".product-slide-2").scrollLeft +=900;
    event.preventDefault();

})

document.querySelector(".btn-2b").addEventListener('click', event =>{
    document.querySelector(".product-slide-2").scrollLeft -=900;
    event.preventDefault();

})

document.querySelector(".btn-3a").addEventListener('click', event =>{
    document.querySelector(".product-slide-3").scrollLeft +=500;
    event.preventDefault();

})

document.querySelector(".btn-3b").addEventListener('click', event =>{
    document.querySelector(".product-slide-3").scrollLeft -=500;
    event.preventDefault();

})


const backtop = document.querySelector(".backtop");

backtop.addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        behavior: "smooth"
    })
})

    //   side-bar
const sideBar = document.querySelector(".sidebar");
const cross = document.querySelector(".fa-xmark");
const black = document.querySelector(".black");
const sidBtn = document.querySelector(".second-1");

sidBtn.addEventListener('click',() =>{
    sideBar.classList.add("active");
    cross.classList.add("active");
    black.classList.add("active");
    document.body.classList.add("stop-scroll");
})

cross.addEventListener('click',() =>{
    sideBar.classList.remove("active");
    cross.classList.remove("active");
    black.classList.remove("active");
    document.body.classList.remove("stop-scroll");
})


    //    Drope-Down
const sign = document.querySelector(".sign");
const tri = document.querySelector(".triangle");
const signin = document.querySelector(".hdn-sign");

sign.addEventListener('click', ()=>{
    black.classList.toggle("active-1");
    signin.classList.toggle("active");
    tri.classList.toggle("active");
    document.body.classList.add("stop-scroll");
})

black.addEventListener('click',()=>{
    black.classList.remove("active-1");
    signin.classList.remove("active");
    tri.classList.remove("active");
    document.body.classList.remove("stop-scroll");
})

sign.addEventListener('mouseover', (event) => {
    black.classList.add("active-1");
    signin.classList.add("active");
    tri.classList.add("active");
    document.body.classList.add("stop-scroll");
});



// ************* login form >>>>>>>>>>>

const form = document.querySelector('#creat-account-form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const conformPassword = document.querySelector('#conform-password');

form.addEventListener('submit',(event)=>{

    validateForm(event);

});


function validateForm(event){

    
    // USERNAME 
    if (username.value.trim()==''){
        setError(username, 'Nmae can not be empty');
        event.preventDefault();
    } else if (username.value.trim().length < 4 || username.value.trim().length > 15){
        setError(username, 'Name must be min 4 and max 15 charectors');
        
    } else {
        setSuccess(username);
        UserNamePrint()
    }
    // EMAIL 
    if (email.value.trim() ==''){
        setError(email, 'Provide email address');
        
    } else{
        setSuccess(email);
    }
    // PASSWORD 
    if(password.value.trim() ==''){
        setError(password, 'Password can not be empty');
        
    } else if(password.value.trim().length <4 ||password.value.trim().length > 12){
        setError(password, 'Password min length is 4 and max is 12');
        
    } else {
        setSuccess(password);
    }
    // CONFORM-PASSWORD 
    if(conformPassword.value.trim() == ''){
        setError(conformPassword, 'Password can not be empty');
        
    } else if (conformPassword.value !== password.value){
        setError(conformPassword, 'Password does not match');
        
    } else if(password.value.trim().length <4 ||password.value.trim().length > 12) {
        setError(conformPassword, 'Password min length is 4 and max is 12');
        
    } else {
        setSuccess(conformPassword);
    }
}

function setError(element, errorMessage,){
    const parent = element.parentElement;
    if(parent.classList.contains('success')){
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
    event.preventDefault();
}

function setSuccess(element){
    const parent = element.parentElement;
    if (parent.classList.contains('error')){
        parent.classList.remove('error');
    }
    parent.classList.add('success');
    
}


const formLog = document.querySelector("#loginForm");
const loginF = document.querySelector("#login");

loginF.addEventListener('click', () =>{
    formLog.classList.add("active");
    document.body.classList.add("stop-scroll");
});

const cut = document.querySelector("#cut");
cut.addEventListener('click', () =>{
    formLog.classList.remove("active");
    document.body.classList.remove("stop-scroll");
})




// ***********>>>User Name Print ******

function UserNamePrint() {
    let User = document.querySelector('#User');
    var userN = document.querySelector('#username').value;
    localStorage.setItem("UserName", [userN]);
    User.innerHTML = userN;
}

 



  