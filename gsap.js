// GSAP timeline animations
gsap.timeline()
    // header props
    .from('#header', {duration: 1.2, opacity:0})
    .from('#title', {opacity:0, scale:0, duration: 0.5, ease:'back'})
    .from('#nav a', {y:200, stagger:0.2, opacity:0, duration: 0.9, ease:'back'})
    // info props
    .from('#info',{x:-200, stagger:0.1, opacity:0, duration: 0.5, ease:'back'})
    // project props
    .from('#projects', {x:200, opacity:0, duration: 1, ease:'back', delay: 1.7})
    .from('#tagline', {x:-200, opacity:0, duration: 1, ease:'back'}, '-=1')
    .from('#showcase', {y:200, opacity:0, duration: 1, ease:'back'}, '-=1')
   
    // skills props
    .from('#skills ul', {x:-200, stagger:0.7, opacity:0, duration: 1, ease:'back', delay: 2});