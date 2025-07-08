// Fixed navbar

const navbar=document.getElementById('nav');
console.log(navbar);

const topLink=document.querySelector('.top-link');
window.addEventListener('scroll',function(){
    const scrollheight= window.pageYOffset;
    const navHeight=navbar.getBoundingClientRect().height;
    if(scrollheight>navHeight){
        navbar.classList.add('fixed-nav');
      
    }
else{
    navbar.classList.remove('fixed-nav');
}
    if(scrollheight>500){
        topLink.classList.add('show-link');

    }
    else{
        topLink.classList.remove('show-link');
    }

})



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const scrollLink = document.querySelector(".scroll-link"); // Butonu seç
    scrollLink.addEventListener("click", function (e) {
      e.preventDefault(); // Varsayılan link davranışını engelle
  
      const target = document.getElementById("nav"); // Hedef ID (nav)
      if (target) {
        window.scrollTo({
          top: target.offsetTop, // Sayfadaki konumuna git
          behavior: "smooth", // Yumuşak kaydırma
        });
      }
    });
  });