// SHOW MENU
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

// MENU KO SHOW KARE
/*Validate if constant exists*/
if(navToggle){
    navToggle.addEventListener('click',function(){
        navMenu.classList.add('show-menu')
    })
}
//MENU KO HIDE KARE
/*Validate if constant exists*/
if(navClose){
    navClose.addEventListener('click',function(){
        navMenu.classList.remove('show-menu');
    })
}

//REMOVE MENU MOBILE
const navLink =document.querySelectorAll('.nav__link')

const linkAction = function(){
    const navMenu = document.getElementById('nav-menu');

    //When we click on each nav__link , we remove show-menu class
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click',linkAction));

// SWIPER PROJECTS
let swiperProjects = new Swiper(".projects__container",{
    loop : true,
    spaceBetween:24,
    navigation:{
        nextEl:".swiper-button-next",

        prevEl:".swiper-button-prev",
    },
    pagination:{
        el:".swipper-pagination",
    },
    // mousewheel:true,
    // keyboard:true,
    breakpoints:{
        1200:{
            slidesPerView:2,
            spacesBetween:-56,
        },
    }
})

//SWIPER TESTIMONIAL


// EMAIL JS
const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('contact-name'),
      contactEmail = document.getElementById('contact-email'),
      contactProject = document.getElementById('contact-project'),
      contactMessage = document.getElementById('contact-message')

const sendEmail=(e)=>{
        e.preventDefault();  

        //Check if the field has a value:
        if(contactName.value ==='' || contactEmail.value ==='' || contactProject.value===''){
         //Add and remove color
         contactMessage.classList.remove('color-blue')
         contactMessage.classList.add('color-red')

         //Show Message
         contactMessage.textContent = 'Enter all input fields'
       }else{
        //Service Id - tmplate ID -#form-publicKey
      
        emailjs.sendForm('service_smdob2u','template_181qboe','#contact-form','MA4X_2hHty7W1HLlt')
            .then(()=>{
                //Show message and add color
                contactMessage.classList.add('color-blue')
                contactMessage.textContent= 'Message sent successfully!!'

                //Remove this message sent after 5 seconds
                setTimeout(()=>{
                     contactMessage.textContent='' 
                },5000)

                
            },(error)=>{
                alert("OOPS !SOMETHING HAS FAILED...",error)
            })
            //To clear the input field
            contactName.value = ''
            contactEmail.value = ''
            contactProject.value = ''
       }
} 
 contactForm.addEventListener('submit',sendEmail)


//        DARK LIGHT THEME
const themeButton = document.getElementById('theme-button')
const darkTheme ='dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon  = localStorage.getItem('selected-icon')

//We obtain current themethat interface has by validating dark-theme class
const getCurrentTheme = ()=> document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = ()=> themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'


// We validate if  user previously  chose a topic
if(selectedTheme){
    //If validation is fulfilled, we ask what the issue was to know if we activated or deactivated
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line'? 'add' : 'remove'] (iconTheme)
}
// Activate Deactivate theme manually with button
themeButton.addEventListener('click',()=>{
    //Add or remove icon Theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    //We save the theme and icon that user chose
    localStorage.setItem('selected-theme',getCurrentTheme())
    localStorage.setItem('selected-icon',getCurrentIcon())
})

//CHANGE BACKGROUND HEADER
const scrollHeader = () =>{
    const header = document.getElementById('header')
    //When scroll is greater than 50 vh , addscroll-header class
    this.scrollY >= 50 ? header.classList.add('bg-header')
                        : header.classList.remove('bg-header')
}
window.addEventListener('scroll',scrollHeader);

//