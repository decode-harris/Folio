ScrollReveal({reset : true});
ScrollReveal().reveal(
    // project props
    gsap.timeline()
        
        .from('#projects', {x:200, opacity:0, duration: 1, ease:'back', delay: '5.5'})
        .from('#tagline', {x:-200, opacity:0, duration: 1, ease:'back'}, '-=1')
        .from('#showcase', {y:200, opacity:0, duration: 1.75, ease:'back'}, '-=0.75')
        
);

ScrollReveal().reveal(
    // skills props
    gsap.timeline()
    .from('#skills ul', {x:-200, stagger:0.7, opacity:0, duration: 1.85, ease:'back', delay:'7'})
);


// GSAP timeline animations
gsap.timeline()
    // header props
    .from('#header', {duration: 1.2, opacity:0})
    .from('#title', {opacity:0, scale:0, duration: 0.7, ease:'back'})
    .from('#nav a', {y:200, stagger:0.2, opacity:0, duration: 0.7, ease:'back'})
    // info props
    .from('#info',{x:-200, stagger:0.1, opacity:0, duration: 0.9, ease:'back'});
    
   
    
    