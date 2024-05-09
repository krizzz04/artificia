// const { default: gsap } = require("gsap");

const parralax = document.querySelectorAll('.parallax');
let xvalue = 0;
let yvalue = 0;



window.addEventListener('mousemove',(e)=>{
    
    
    xvalue = e.clientX - window.innerWidth / 2;
    yvalue = e.clientY - window.innerHeight / 2;
    // console.log(e.clientX)



    parralax.forEach(el=>{
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        let speedz = el.dataset.speedz;

        let isinleft = parseFloat(getComputedStyle(el).left)< window.innerWidth/2 ? 1 : -1;
        let zvalue = (e.clientX - parseFloat(getComputedStyle(el).left))* isinleft * 0.2;
        

                el.style.transform = `translateX(calc(-50% + ${-xvalue * speedx}px)) translateY(calc(-50% + ${yvalue * speedy}px)) perspective(2300px) translateZ(${zvalue * speedz}px)`
    });

});




let tl = gsap.timeline({
    defaults:{
        ease: 'power1.out'
    }
});


tl.from('.bg-img',{top:`${document.querySelector('.bg-img').offsetHeight /2 -200}px`,duration:2},'a')
.from('.mount-1',{top:`${document.querySelector('.mount-1').offsetHeight /2 +4000}px`,duration:2},'a')
.from('.mount-2',{top:`${document.querySelector('.mount-2').offsetHeight /2 +3800}px`,duration:2},'a')
.from('.mount-3',{top:`${document.querySelector('.mount-3').offsetHeight /2 +3400}px`,duration:2},'a')
.from('.mount-4',{top:`${document.querySelector('.mount-4').offsetHeight /2 +3200}px`,duration:2},'a')
.from('.mount-5',{top:`${document.querySelector('.mount-5').offsetHeight /2 +2550}px`,duration:2},'a')
.from('.mount-6',{top:`${document.querySelector('.mount-6').offsetHeight /2 +2300}px`,duration:2},'a')
.from('.mount-7',{top:`${document.querySelector('.mount-7').offsetHeight /2 +2000}px`,duration:2},'a')
.from('.mount-8',{top:`${document.querySelector('.mount-8').offsetHeight /2 +1800}px`,duration:2},'a')
.from('.mount-9',{top:`${document.querySelector('.mount-9').offsetHeight /2 +1700}px`,duration:2},'a')
.from('.mount-10',{top:`${document.querySelector('.mount-10').offsetHeight /2 +1100}px`,duration:2},'a')
.from('.fog-1',{top:`${document.querySelector('.fog-1').offsetHeight /2 +4200}px`,duration:2},'a')
.from('.fog-2',{top:`${document.querySelector('.fog-2').offsetHeight /2 +3600}px`,duration:2},'a')
.from('.fog-3',{top:`${document.querySelector('.fog-3').offsetHeight /2 +2800}px`,duration:2},'a')
.from('.fog-4',{top:`${document.querySelector('.fog-4').offsetHeight /2 +2400}px`,duration:2},'a')
.from('.fog-5',{top:`${document.querySelector('.fog-5').offsetHeight /2 +1900}px`,duration:2},'a')
.from('.fog-6',{top:`${document.querySelector('.fog-6').offsetHeight /2 +1400}px`,duration:2},'a')
.from('.fog-7',{top:`${document.querySelector('.fog-7').offsetHeight /2 +850}px`,duration:2},'a')
.from('.text h1',{y:`${window.innerHeight - document.querySelector('.text h1').getBoundingClientRect().top}px`,duration:1},)
.fromTo('.text h2',{y:-160,opacity:0},{y:0,duration:0.7,opacity:1},'<30%')