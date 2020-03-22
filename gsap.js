// GSAP timeline animations
gsap.timeline()
    // header props
    .from('#header', {duration: 1.2, opacity:0})
    .from('#header h2', {opacity:0, scale:0, duration: 0.7, ease:'back'})
    .from('#header .tagline', {opacity:0, scale:0, duration: 0.7, ease:'back'})
    // nav props
    .from('#nav a', {y:200, stagger:0.2, opacity:0, duration: 0.7, ease:'back'})
    // info props
    .from('#info',{xPercent:100, stagger:0.1, opacity:0, duration: 0.9, ease:'back'})
    // projects props
    .from('#projects', {opacity:0, duration: 1})
    .from('#projects h3', {xPercent:-100, opacity:0, duration: 1, ease:'back'})
    .from('#projects .tagline', {xPercent:100, opacity:0, duration: 1, ease:'back'}, '-=1')
    // showcase props
    .from('#showcase', {yPercent:50, opacity:0, duration: 1, ease:'back'}, '-=1')
    // skills props
    .from('#skills h3', {xPercent:100, opacity:0, duration: 1, ease:'back', delay: 1})
    .from('#skills .tagline', {xPercent:-100, opacity:0, duration: 1, ease:'back'}, '-=1')
    // list props
    .from('#skills ul', {yPercent:100, stagger:0.7, opacity:0, duration: 1, ease:'back', delay:'0.9'})
    // footer props
    .from('#footer', {duration: 0.85, opacity:0})
    .from('#footer h3', {opacity:0, scale:0, duration: 0.7, ease:'back'})
    .from('#footer .tagline', {opacity:0, scale:0, duration: 0.7, ease:'back'})
    .from('#footer a', {yPercent:100, opacity:0, stagger: 0.5, ease:'back'})


    
   
    
    