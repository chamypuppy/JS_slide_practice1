const slider = document.querySelector(".slider");

let n ;

let imgs = [];

let imgsNum = new Array(9);

for (let i = 1; i < imgsNum.length; i++){
  n = String(i).padStart(2, "0");
  imgs.push(`./images/jeju${n}.jpg`);
}
// console.log(imgs);



for (let j = 0; j < imgsNum.length - 1; j++){
  const div = document.createElement("div");
  const img = document.createElement("img");
  img.src = imgs[j];
  console.log(img.src);
  div.appendChild(img);
  slider.appendChild(div);
}

/* -------------- */
const l_btn = document.querySelector(".left_btn");
const r_btn = document.querySelector(".right_btn");
const img = document.querySelectorAll("img");

/* 기준 */

let index = 0;
let current_inx = 0;
const move = 600;


// 방법1) 오른쪽으로 이미지가 넘어가는 슬라이드
// function showSlide(inx) {
//   img.forEach(function(r_img) {
//     r_img.style.display = "none";    
//   });
//   img[current_inx].style.display = "block";
//     slider.style.transform = img[current_inx].width + "px";
// }

// r_btn.addEventListener("click", function() {
//   if (current_inx !== imgsNum.length) {
//     showSlide(++current_inx);
//   }
// })
/* 방법1) 여기까지 */


// 방법2) 오른쪽으로 이미지가 넘어가는 슬라이드
function showSlide(inx){
  img.forEach(v => {
    v.style.display = "none";
  });
  img[current_inx].style.display = "block";
  slider.style.transform = img[current_inx].width + "px";

  if(inx === 0) {
    l_btn.disabled = true;
  } else {
    l_btn.disabled = false;
  }
}

function nextShow(){
 if (current_inx === imgsNum.length - 2) {
  r_btn.disabled = true;
}
  else if(current_inx !== imgsNum.length) {
    showSlide(++current_inx);
}
}

r_btn.addEventListener("click", nextShow)
/* 방법2) 여기까지 */



// 방법A) 왼쪽으로 이미지가 넘어가는 슬라이드

function prevShow(){
  showSlide(current_inx--);
  if(current_inx < 0) {
    current_inx = imgsNum.length - 1;
  }
  showSlide()
}

l_btn.addEventListener("click", prevShow)
/* 방법A) 여기까지 */