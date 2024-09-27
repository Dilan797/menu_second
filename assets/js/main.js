    /*=============== SHOW MENU ===============*/
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const overlay = document.querySelector('.overlay');
        
    /* Menu show */
    if(navToggle){
        navToggle.addEventListener('click', () =>{
            navMenu.classList.toggle('show-menu');
            navToggle.classList.toggle('active');
            navToggle.classList.toggle('menu-open');
            overlay.classList.toggle('active');
        })
    }

    /* Menu hidden */


    /*=============== REMOVE MENU MOBILE ===============*/
    const navLink = document.querySelectorAll('.nav__link')

    const linkAction = () =>{
        
        // When we click on each nav__link, we remove the show-menu class
        navMenu.classList.remove('show-menu');
        navToggle.classList.remove('active'); // Add this line
        navToggle.classList.remove('menu-open');
        overlay.classList.remove('active');
    }
    navLink.forEach(n => n.addEventListener('click', linkAction))

    /*=============== ADD SHADOW HEADER ===============*/


    /*=============== SHOW SCROLL UP ===============*/ 


    /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


    /*=============== SCROLL REVEAL ANIMATION ===============*/
