const roles=["AI Developer","AIML Student","Java Developer","Web Developer","Problem Solver"];let ri=0,ci=0,del=false;
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
function type(){let r=roles[ri];ci=del?ci-1:ci+1;$("#typing").textContent=r.slice(0,ci);let t=del?55:90;if(!del&&ci===r.length){del=true;t=1400}if(del&&ci===0){del=false;ri=(ri+1)%roles.length;t=300}setTimeout(type,t)}type();

const header=$("#header"),menu=$("#menuBtn"),links=$("#navLinks");
menu.onclick=()=>{links.classList.toggle("open");menu.textContent=links.classList.contains("open")?"×":"☰"};
$$(".links a").forEach(a=>a.onclick=()=>links.classList.remove("open"));

const saved=localStorage.getItem("theme");if(saved==="light")document.body.classList.add("light");
$("#theme").onclick=()=>{document.body.classList.toggle("light");localStorage.setItem("theme",document.body.classList.contains("light")?"light":"dark");$("#theme").textContent=document.body.classList.contains("light")?"☀":"☾"};

window.onscroll=()=>{header.classList.toggle("scrolled",scrollY>20);$("#top").classList.toggle("show",scrollY>600)};
$("#top").onclick=()=>scrollTo({top:0,behavior:"smooth"});

const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}}),{threshold:.1});
$$(".reveal").forEach(e=>observer.observe(e));

$$(".filters button").forEach(b=>b.onclick=()=>{$$(".filters button").forEach(x=>x.classList.remove("active"));b.classList.add("active");let f=b.dataset.filter;$$(".project").forEach(p=>p.classList.toggle("hide",f!=="all"&&p.dataset.cat!==f))});

const data={
hotel:{badge:"JAVA · COMPLETED",title:"Hotel Management System",desc:"A console-based Hotel Management System developed using Core Java and object-oriented programming. Building this project strengthened Java programming, OOP, file handling, problem-solving and application development skills.",tech:["Pure Java","OOP","Collections","File Handling"],features:["Admin & User modules","User registration","User login","Room search","Room availability","Room booking","Booking confirmation","Check-in / Check-out","Payment processing","Booking cancellation","Feedback","Bill generation","File-based data storage"]},
fitlife:{badge:"WEB · COMPLETED",title:"FitLife – Modern Gym",desc:"A modern gym and fitness website created using frontend web technologies with a focus on responsive design, interactive user interface and professional visual presentation.",tech:["HTML","CSS","JavaScript"],features:["Responsive web design","Modern user interface","Interactive sections","Fitness-focused layout","Frontend animations","Professional presentation"]}
};
const modal=$("#modal");
$$(".details").forEach(b=>b.onclick=()=>{let d=data[b.dataset.project];$("#mBadge").textContent=d.badge;$("#mTitle").textContent=d.title;$("#mDesc").textContent=d.desc;$("#mTech").innerHTML=d.tech.map(x=>`<span>${x}</span>`).join("");$("#mFeatures").innerHTML=d.features.map(x=>`<li>${x}</li>`).join("");modal.classList.add("open");modal.setAttribute("aria-hidden","false");document.body.style.overflow="hidden"});
function close(){modal.classList.remove("open");modal.setAttribute("aria-hidden","true");document.body.style.overflow=""}
$("#closeModal").onclick=close;$(".backdrop").onclick=close;document.onkeydown=e=>{if(e.key==="Escape")close()};

$("#copyEmail").onclick=async()=>{try{await navigator.clipboard.writeText("kirankumarnakka8@gmail.com");toast("Email copied!")}catch{toast("kirankumarnakka8@gmail.com")}};
function toast(t){let x=$("#toast");x.textContent=t;x.classList.add("show");clearTimeout(window.tt);window.tt=setTimeout(()=>x.classList.remove("show"),2200)}

$("#viewResume").onclick=()=>toast("Add your resume PDF to enable this button.");
$("#downloadResume").onclick=()=>toast("Add your resume PDF to enable downloading.");

$("#contactForm").onsubmit=e=>{e.preventDefault();let n=$("#name").value.trim(),em=$("#email").value.trim(),s=$("#subject").value.trim(),m=$("#message").value.trim(),st=$("#formStatus");if(!n||!em||!s||!m){st.textContent="Please complete all fields.";return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)){st.textContent="Please enter a valid email address.";return}if(m.length<10){st.textContent="Message should contain at least 10 characters.";return}st.textContent="Message validated successfully. Connect an email/backend service to receive it.";e.target.reset()};
