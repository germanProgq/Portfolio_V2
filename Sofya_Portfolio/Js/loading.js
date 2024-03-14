if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.addEventListener('load', function() {
  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';

    this.setTimeout(() => {
    document.getElementById('loading-screen').style.display = 'none';
    document.getElementById('page-content').style.display = 'block';
    
   document.documentElement.style.overflow = 'auto';
    document.body.style.overflow = 'auto';
  }, 0);
});
