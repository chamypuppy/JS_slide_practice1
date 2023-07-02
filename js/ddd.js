var slideIndex = 0;
var slides = document.querySelectorAll('.slider img');
var slider = document.querySelector('.slider');
var prevButton = document.querySelector('.prev-button');
var nextButton = document.querySelector('.next-button');

function showSlide(n) {
  if (n >= slides.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach(function(slide) {
    slide.style.display = 'none';
  });

  slides[slideIndex].style.display = 'block';
  slider.style.width = slides[slideIndex].width + 'px';

  // 슬라이드 인덱스에 따라 버튼 활성화/비활성화 처리
  if (slideIndex === 0) {
    prevButton.disabled = true;
  } else {
    prevButton.disabled = false;
  }

  if (slideIndex === slides.length - 1) {
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
  }
}

function getCurrentSlide() {
  return slideIndex;
}

function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlide(slideIndex);
}

function nextSlide() {
  showSlide(++slideIndex);
}

showSlide(slideIndex);

// 예제에서 추가된 getCurrentSlide 함수를 사용하여 현재 슬라이드의 인덱스를 얻을 수 있습니다.
var currentSlideIndex = getCurrentSlide();
console.log('Current slide index:', currentSlideIndex);
