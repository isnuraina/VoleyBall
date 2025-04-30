//   const slides = document.querySelectorAll(".slide");
//   const dots = document.querySelectorAll(".dot");
//   let index = 0;

//   function showSlide(i) {
//     slides.forEach((slide, idx) => {
//       slide.classList.remove("active");
//       dots[idx].classList.remove("active-dot");
//     });
//     slides[i].classList.add("active");
//     dots[i].classList.add("active-dot");
//   }

//   function nextSlide() {
//     index = (index + 1) % slides.length;
//     showSlide(index);
//   }

//   setInterval(nextSlide, 5000); // 5 saniyədən bir keçsin




  const track = document.querySelector(".slider-track");
  const dots = document.querySelectorAll(".dot");
  let index = 0;
  const totalSlides = document.querySelectorAll(".slide").length;

  function updateSlider() {
    track.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach(dot => dot.classList.remove("active-dot"));
    dots[index].classList.add("active-dot");
  }

  function nextSlide() {
    index = (index + 1) % totalSlides;
    updateSlider();
  }

  setInterval(nextSlide, 5000);
