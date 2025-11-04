const controller = new ScrollMagic.Controller();

const spyEls = document.querySelectorAll('section.scroll-spy');
console.log(spyEls);

spyEls.forEach(function(spyEls){ //매개변수,인덱스 결과값이 필요하지 않고 반복만 필요하기에 .forEach
  new ScrollMagic.Scene({
    triggerElement: spyEls,
    triggerHook: 0.5,

  
})
    .setClassToggle(spyEls,'show') //요소가 화면에 보이면 show 클래스 추가
    .setPin('#my-sticky-element')
    .addTo(controller); //컨트롤러에 장면을 할당(필수)

})

// Swiper 사용
const swiper = new Swiper('.project .swiper', {
  // 슬라이드 옵션 지정
  // Optional parameters
  direction: 'horizontal', //수평 슬라이드(기본값)
  loop: true,
  // autoplay:{
  //   delay:5000     //자동재생 여부 기본값 3초
  // },

  // 페이지네이션 옵션
  pagination: {
    el: '.project .swiper-pagination',
    clickable:true //페이지네이션 오소 제어 가능 여부 true 변경 기본값 false
  },

  // 이전/다음 슬라이드 버튼 옵션
  navigation: {
    nextEl: '.project .swiper-button-next',
    prevEl: '.project .swiper-button-prev',
  },
});


// 모달창 띄우기

const imageModal = document.querySelector('#imageModal');
const imageModalBtnList = document.querySelectorAll('.btn-modal-image');
const imageCloseBtn = document.querySelectorAll('#imageModal .btn-close');
const imageEl= document.querySelector('#imageModal img');

console.log(imageModalBtnList)

imageModalBtnList.forEach(function(btn){
  btn.addEventListener('click',function(){
    imageEl.src= btn.dataset.imageSrc;
    imageModal.style.display="flex";
  });
});
imageCloseBtn.forEach(function(btn){
  btn.addEventListener('click',function(){
    imageModal.style.display="none";
  });
});



