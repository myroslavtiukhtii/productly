document.addEventListener('DOMContentLoaded', () => {

    //burger

    


    //menu nav

    const hamburger = document.querySelector('.nav-container');
    const menu = document.querySelector('.topnav');
    hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
    })

    //nav links

    const MENULINK = document.querySelectorAll('.menu-list__item');

    for (let i = 0; i < MENULINK.length; i++) {
        MENULINK[i].addEventListener('click', () => {
            hamburger.classList.remove('active');
            menu.classList.remove('active');
        })
    }

    //reveal

    function reveal() {
        let reveals = document.querySelectorAll(".reveal");
      
        for (let i = 0; i < reveals.length; i++) {
          let windowHeight = window.innerHeight;
          let elementTop = reveals[i].getBoundingClientRect().top;
          let elementVisible = 150;
      
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }
      
      window.addEventListener("scroll", reveal);



    //upbtn

    const BTN = document.querySelector('.upbtn');

    BTN.addEventListener('click', toUp);

    function toUp() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    window.onscroll = function() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            BTN.style.display = "flex";
        } else {
            BTN.style.display = "none";
        }
    }

    //parallax

    document.addEventListener("mousemove", parallax);
    function parallax(event) {
      this.querySelectorAll(".mouse").forEach((shift) => {
        const position = shift.getAttribute("value");
        const x = (window.innerWidth - event.pageX * position) / 90;
        const y = (window.innerHeight - event.pageY * position) / 90;

        shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    }

});