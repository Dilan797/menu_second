    /*=============== SHOW MENU ===============*/
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const overlay = document.querySelector('.overlay');
        
    /* Menu show */
    if(navToggle){
        navToggle.addEventListener('click', () =>{
            navMenu.classList.toggle('show-menu');
            navToggle.classList.toggle('active');
            overlay.classList.toggle('active');
            if(navMenu.classList.contains('show-menu')){
                if(window.innerWidth <= 1150){
                    navToggle.style.right = '71%';
                }else{
                    navToggle.style.right = '40%';
                }
            }else{
                navToggle.style.right = '';
            }
        })
    }

    /* Menu hidden */


    /*=============== REMOVE MENU MOBILE ===============*/
    const navLink = document.querySelectorAll('.nav__link')

    const linkAction = () =>{
        
        // When we click on each nav__link, we remove the show-menu class
        navMenu.classList.remove('show-menu');
        navToggle.classList.remove('active');
        navToggle.style.right = '';
        overlay.classList.remove('active');
    }
    navLink.forEach(n => n.addEventListener('click', linkAction))
/*=============== VIDEO SCROLL EFFECT ===============*/
    const videoContainer = document.querySelector('.video-container');
    const mainContent = document.querySelector('.main-content');
    const header = document.querySelector('.header');
    
    function handleScroll() {
        let scrollPosition = window.pageYOffset;
        let windowHeight = window.innerHeight;
        
        if (scrollPosition > windowHeight * 0.5) {
            mainContent.classList.add('scrolled');
            videoContainer.classList.add('faded');
            header.classList.add('solid');
            
            // Calcula y aplica la opacidad del video como una propiedad personalizada
            let videoOpacity = Math.max(0, 0.7 - (scrollPosition - windowHeight * 0.5) / (windowHeight * 0.5));
            videoContainer.style.setProperty('--video-opacity', videoOpacity);
            
            // Calcula y aplica la opacidad del header como una propiedad personalizada
            let headerOpacity = Math.min(1, 0.8 + (scrollPosition - windowHeight * 0.5) / (windowHeight * 0.5) * 0.2);
            header.style.setProperty('--header-opacity', headerOpacity);
        } else {
            mainContent.classList.remove('scrolled');
            videoContainer.classList.remove('faded');
            header.classList.remove('solid');
            videoContainer.style.removeProperty('--video-opacity');
            header.style.removeProperty('--header-opacity');
        }
    }

    window.addEventListener('scroll', handleScroll);

    // Llamada inicial para establecer las posiciones correctas
handleScroll();
    /*=============== ADD SHADOW HEADER ===============*/


    /*=============== SHOW SCROLL UP ===============*/ 


    /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


    /*=============== SCROLL REVEAL ANIMATION ===============*/
