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

// ESC 키로 닫기

document.addEventListener('keydown', function (event) {
  if(event.key==='Escape'){
    imageModal.style.display="none";
  } 
});
//모달 바깥 영역 클릭 시 닫기
imageModal.addEventListener('click',function(event){
  event.stopPropagation; //이벤트 버블링 막기
  if(event.target===event.currentTarget){
    imageModal.style.display="none";
  }
  console.log(event.target);       
  console.log(event.currentTarget);//실제 이벤트가 바인딩된 요소 this와 동일
})


// 현재 연도 표시
// 날짜 정보를 가진 JS의 Date 객체를 활용

console.log(new Date().getFullYear());
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();

// 페이지 최상단 이동
const toTopEl = document.querySelector('#toTop');
const flash=document.querySelectorAll('.animate-flash')
//페이지에 스크롤 이벤트 감지를 추가
// 브라우저는 문서 전체의 스크롤을 window 기준으로 처리
// window:브라우저 창 객체
window.addEventListener('scroll', function(){
  const px=window.scrollY;
  if(px>500){
    toTopEl.style=`opacity: 1; transform: translateX(0);`;
    flash.forEach(function(El){
    El.classList.remove('animate-flash');
    })

  } else if(px<500){
    toTopEl.style=`opacity:0; transform: translateX(100px);`;
    flash.forEach(function(El){
    El.classList.add('animate-flash');
    })
  }
})
//햄버거 바 클릭시 toggle로 열고 닫기 //타겟누를 시 열고 닫기
const hamburgerBtn = document.querySelector('.btn-hamburger');
const navEl = document.querySelector('header nav');
const liTarget = document.querySelectorAll('header li');

  hamburgerBtn.addEventListener('click',function(){
      navEl.classList.toggle('active'); 
})

  liTarget.forEach(function(li){
    li.addEventListener('click',function(){
      navEl.classList.remove('active');
    })
  })
      



// 스크롤 헤더바
 let lastScroll = 0;
 const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;

  // 페이지 상단에서는 항상 표시
  if (currentScroll <= 0) {
    header.classList.remove('hide');
    return;
  }
  if (currentScroll > lastScroll) {
    // 스크롤 내릴 때 숨김
    header.classList.add('hide');
  } else {
    // 스크롤 올릴 때 표시
    header.classList.remove('hide');
  }

  lastScroll = currentScroll;
});


