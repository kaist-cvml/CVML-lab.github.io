<script>
document.addEventListener('scroll', ()=>{
  const h = document.querySelector('.site-header');
  if(!h) return;
  h.classList.toggle('scrolled', window.scrollY > 8);
});
</script>
