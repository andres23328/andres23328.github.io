(function(){
  var root=document.documentElement,menu=document.getElementById("menu"),burger=document.getElementById("burger");
  try{var t=localStorage.getItem("tema");if(t)root.dataset.theme=t}catch(e){}
  document.getElementById("theme").addEventListener("click",function(){
    var dark=root.dataset.theme?root.dataset.theme==="dark":!matchMedia("(prefers-color-scheme: light)").matches;
    var n=dark?"light":"dark";root.dataset.theme=n;
    try{localStorage.setItem("tema",n)}catch(e){}
  });
  burger.addEventListener("click",function(){
    var o=menu.classList.toggle("open");burger.setAttribute("aria-expanded",o);
  });
  menu.addEventListener("click",function(e){if(e.target.tagName==="A"){menu.classList.remove("open");burger.setAttribute("aria-expanded","false")}});
  document.getElementById("y").textContent=new Date().getFullYear();
  var fx=matchMedia("(hover:hover)").matches&&!matchMedia("(prefers-reduced-motion: reduce)").matches;
  function tilt(el,max,tg){tg=tg||el;el.addEventListener("pointermove",function(e){var r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;tg.style.setProperty("--ry",x*max+"deg");tg.style.setProperty("--rx",-y*max+"deg")});el.addEventListener("pointerleave",function(){tg.style.setProperty("--ry","0deg");tg.style.setProperty("--rx","0deg")})}
  if(fx){tilt(document.getElementById("stage"),12,document.querySelector(".code"));tilt(document.getElementById("me"),16);document.querySelectorAll(".card").forEach(function(c){tilt(c,8)})}
  var bar=document.getElementById("bar");
  addEventListener("scroll",function(){bar.style.transform="scaleX("+scrollY/Math.max(1,document.body.scrollHeight-innerHeight)+")"},{passive:true});
  var els=document.querySelectorAll(".rv");
  if(!("IntersectionObserver" in window)){els.forEach(function(e){e.classList.add("on")});return}
  var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.classList.add("on");io.unobserve(x.target)}})},{threshold:.15});
  els.forEach(function(e,i){e.style.transitionDelay=(i%3)*90+"ms";io.observe(e)});
})();
