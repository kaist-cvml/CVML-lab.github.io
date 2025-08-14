// 헤더 스크롤 스타일 토글
document.addEventListener('scroll', () => {
  const h = document.querySelector('.site-header');
  if (!h) return;
  h.classList.toggle('scrolled', window.scrollY > 8);
});

// 단순 히어로 슬라이더(자동/화살표)
(() => {
  const slider = document.querySelector('.drs-hero');
  if (!slider) return;

  const slides = [...slider.querySelectorAll('.drs-slide')];
  let i = 0, timer;
  const show = n => {
    slides.forEach((s, idx) => s.classList.toggle('is-active', idx === n));
  };
  const next = () => { i = (i + 1) % slides.length; show(i); };
  const prev = () => { i = (i - 1 + slides.length) % slides.length; show(i); };

  slider.querySelector('.drs-next')?.addEventListener('click', () => { next(); restart(); });
  slider.querySelector('.drs-prev')?.addEventListener('click', () => { prev(); restart(); });

  const restart = () => { clearInterval(timer); timer = setInterval(next, 6000); };

  show(0);
  timer = setInterval(next, 6000);
})();
