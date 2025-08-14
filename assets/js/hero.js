document.addEventListener('DOMContentLoaded',()=>{
    const track = document.querySelector('.hero-track');
    if(!track) return;
    const slides=[...track.querySelectorAll('.hero-slide')];
    let i=0, timer=null, interval=+(track.dataset.interval||6000);
    const go = (n)=>{
      slides[i].classList.remove('is-active');
      i=(n+slides.length)%slides.length;
      slides[i].classList.add('is-active');
    };
    const next=()=>go(i+1), prev=()=>go(i-1);
    document.querySelector('.hero-nav.next')?.addEventListener('click',()=>{ next(); reset();});
    document.querySelector('.hero-nav.prev')?.addEventListener('click',()=>{ prev(); reset();});
    const reset=()=>{ if(timer) clearInterval(timer); if(track.dataset.autoplay==='true') timer=setInterval(next, interval); };
    reset();
  });
  