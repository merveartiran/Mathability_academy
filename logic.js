
console.log('numbers project');
const navLinks = document.getElementById('navLinks');
// console.log(navLinks);

function showMenu() {
  navLinks.style.right = '0';
}

function hideMenu() {
  navLinks.style.right = '-200px';
}


const text = "Kurucumuz Merve Artıran, 12 yıllık deneyime sahip bir matematik eğitmeni ve ODTÜ Matematik bölümü mezunu olup, aynı zamanda TOBB ETÜ'de Matematik alanında yüksek lisansını tamamlamıştır. Matematiksel düşünme yetisi ve derinlemesine bilgi birikimi ile, öğrencilerimize sadece ders notlarını yükseltmeyi değil, aynı zamanda matematiğe olan bakış açılarını değiştirmeyi hedeflemektedir.";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("typed-text").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 40); // Harflerin gelme süresi (ms)
  }
}

typeWriter();


// function toggleText() {
//   const textContainer = document.getElementById("text");
//   textContainer.classList.toggle("expanded");

//   const button = textContainer.querySelector(".read-more i");
//   button.className = textContainer.classList.contains("expanded") ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down";
// }


function toggleText(button) {

  const textContainer = button.closest(".text-container"); // Sadece tıklanan container'ı seç

  textContainer.classList.toggle("expanded");

  const icon = button.querySelector("i");
  icon.className = textContainer.classList.contains("expanded")
    ? "fa-solid fa-angle-up"
    : "fa-solid fa-angle-down";
}


document.addEventListener("DOMContentLoaded", function () {
  const topLink = document.querySelector(".top-link");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      topLink.classList.add("show-link"); // 300px aşağı kayınca buton göster
    } else {
      topLink.classList.remove("show-link"); // Yukarı çıkınca buton gizle
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



const testimonials = [
  { id: 1, text: "Merve hocam ile 2 yıldır çalışıyorum. Matematiğe olan yaklaşımı, sabrı ve bilgisi sayesinde hem okul hayatımda hem de sınavda kendime olan güvenim çok arttı. Konuları her seviyeye uygun, anlaşılır bir şekilde anlatıyor ve öğrencinin gerçekten kavramasını sağlıyor. Onun sayesinde matematik artık korkulu rüyam değil, en güçlü yanım! Sonsuz teşekkürler Merve hocam iyi ki karşıma çıktınız!", author: "Selenay Y." },
  { id: 2, text: "Eğitimler gerçekten çok kaliteli ve anlaşılır. Herkese tavsiye ediyorum.", author: "Elif Y." },
  { id: 3, text: "Merve hocamla tanışmadan önce bir yıl boyunca anlamadığım kısmi diferensiyel denklemleri 5 günde bana öyle bir anlattı ki; şimdi sanki yıllardır biliyormuşum gibi rahat çözüyorum. Konuyu basitleştirme şekli, sabrı ve anlatım tarzı gerçekten harika. Sadece öğretmekle kalmıyor, matematiğe olan özgüvenimi de geri kazandırdı. ", author: "Sezen A.", },
  { id: 4, text: "Merve hocam sayesinde şimdi Bilkent Hukuk'u kazandım. Teşekkür ederim", author: "Aydın B.", },
  { id: 4, text: "Almanya da makina mühendisliği kazanmamda katkınız o kadar büyük ki hocam çok teşekkür ederim.", author: "Nergis K.", },
  { id: 5, text: "Merve hocadan ile tam 7 sene matematik özel ders aldım benim matematik temelimi kendisi inşa etmiştir enerjisinden ve anlatım tarzından senelerce vazgeçemedim. Şimdi onun sayesinde Boğaziçi Üniversitesinde istediğim bölümdeyim. Emeğiniz büyük çok ama çok teşekkür ederim hocam. ", author: "Sena T.", },
  { id: 6, text: "Ankara Üni Bilgisayar mühendisliği öğrencisiyim. Bütünleme sınavım için Merve hocadan Differensiyel denklemler  dersi aldım 2 hafta içinde bütün konuları hızlı bir şekilde kavrattı üniversite deneyimi sayesinde çıkan sorulara nokta atışı yaptı. Teşekkürler :)", author: "Görkem B.", },


];

let indexComment = 0;

function showTestimonial() {
  const testimonialElement = document.getElementById("testimonial");
  const authorElement = document.getElementById("author");
  const imageElement = document.getElementById("testimonial-image");
  testimonialElement.textContent = `"${testimonials[indexComment].text}"`;
  authorElement.textContent = `- ${testimonials[indexComment].author}`;
  // imageElement.src = testimonials[indexComment].image;
}

function nextTestimonial() {
  indexComment = (indexComment + 1) % testimonials.length;
  showTestimonial();
}

function prevTestimonial() {
  indexComment = (indexComment - 1 + testimonials.length) % testimonials.length;
  showTestimonial();
}

document.addEventListener("DOMContentLoaded", () => {
  showTestimonial();
  setInterval(nextTestimonial, 5000);
});




console.log('numbers project');
const spanElements = [...document.querySelectorAll(".number")];// I converted nodelist to array using spread operator

const updateCount = (el) => {
  console.log(el);
  const value = parseInt(el.dataset.value);
  const increment = 1;
  //    const increment=Math.floor(value/1000);
  let initialValue = 0;



  const increaseCount = setInterval(() => {
    initialValue += increment;
    if (initialValue > value) {
      el.textContent = `${value}+`;
      clearInterval(increaseCount);
      return;
    }

    el.textContent = `${initialValue}+`
  }, 100);


};


spanElements.forEach((spanElement) => {
  updateCount(spanElement);

});
