const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.1});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
document.getElementById('f').addEventListener('submit',e=>{e.preventDefault();e.target.innerHTML='<h3 style="font-size:1.6rem">Ďakujeme, ozveme sa Vám.</h3><p style="color:#5b5b5b">Ukážka formulára – v hotovej verzii chodia dopyty priamo na Váš e-mail.</p>'});
