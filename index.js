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
    
    













// const btn_enter = document.querySelector('.btn_enter');

// btn_enter.addEventListener('click', ()=> {
//     gsap.timeline()
    

// });


    


    // ScrollReveal().reveal('.headline');
































// const section_content = document.querySelector('.content');
// const section_body = document.querySelector('.body');
// const section_nav = document.querySelector('.nav');

// let closeBtn = document.querySelector('.closeBtn');
// let modalContainer = document.querySelector('.modal_container');


// // project button variables
// const btn_case01 = document.querySelector('#btn_case01');
// const btn_case02 = document.querySelector('#btn_case02');
// const btn_case03 = document.querySelector('#btn_case03');
// const btn_case04 = document.querySelector('#btn_case04');
// // project container variables
// const project_01 = document.querySelector('#project_01');
// const project_02 = document.querySelector('#project_02');
// const project_03 = document.querySelector('#project_03');
// const project_04 = document.querySelector('#project_04');
// // project modal variables
// let modal_case01 = document.querySelector('#case_01');
// let modal_case02 = document.querySelector('#case_02');
// let modal_case03 = document.querySelector('#case_03');
// let modal_case04 = document.querySelector('#case_04');
// // position the project container with relative for attachment


// project_01.style.position = 'relative';
// project_02.style.position = 'relative';
// project_03.style.position = 'relative';
// project_04.style.position = 'relative';

// modalContainer.style.display = 'none';

// // project button events
// btn_case01.addEventListener('click', () => {
//     if (modalContainer.style.display == 'none') {
       
//         properties_modalContainer();
//         properties_modalElements();
//         properties_hiddenNav();
        
//         modal_case01.style.display = 'grid';
//         modal_case02.style.display = 'none';
//         modal_case03.style.display = 'none';
//         modal_case04.style.display = 'none';

//         // attach modal elements to modal container
//         modalContainer.appendChild(modal_case01);
//         // attach modal container to project 01
//         project_01.appendChild(modalContainer);
//     } else {
//         modalContainer.style.display = 'none';
//     }
// });
// btn_case02.addEventListener('click', () => {
//     if (modalContainer.style.display == 'none') {
//         // modal properties
//         properties_modalContainer();
//         properties_modalElements();
//         properties_hiddenNav();
        
//         modal_case01.style.display = 'none';
//         modal_case02.style.display = 'grid';
//         modal_case03.style.display = 'none';
//         modal_case04.style.display = 'none';
        
//         // attach modal elements to modal container
//         modalContainer.appendChild(modal_case02);
//         // attach modal container to project 02
//         project_02.appendChild(modalContainer);
//     } else {
//         modalContainer.style.display = 'none';
//     }
// });
// btn_case03.addEventListener('click', () => {
//     if (modalContainer.style.display == 'none') {
//         // modal properties
//         properties_modalContainer();
//         properties_modalElements();
//         properties_hiddenNav();
        
//         modal_case01.style.display = 'none';
//         modal_case02.style.display = 'none';
//         modal_case03.style.display = 'grid';
//         modal_case04.style.display = 'none';
        
//         // attach modal elements to modal container
//         modalContainer.appendChild(modal_case03);
//         // attach modal container to project 03
//         project_03.appendChild(modalContainer);
//     } else {
//         modalContainer.style.display = 'none';
//     }
// });
// btn_case04.addEventListener('click', () => {
//     if (modalContainer.style.display == 'none') {
//         // modal properties
//         properties_modalContainer();
//         properties_modalElements();
//         properties_hiddenNav();
        
//         modal_case01.style.display = 'none';
//         modal_case02.style.display = 'none';
//         modal_case03.style.display = 'none';
//         modal_case04.style.display = 'grid';
        
//         // attach modal elements to modal container
//         modalContainer.appendChild(modal_case04);
//         // attach modal container to project 04
//         project_04.appendChild(modalContainer);
//     } else {
//         modalContainer.style.display = 'none';
//     }
// });

// // properties function for modal container
// function properties_modalContainer() {
//         modalContainer.style.background = 'rgba(0,0,0,0.85)';

//         modalContainer.style.display = 'flex';
//         modalContainer.style.flexDirection = 'column';
//         modalContainer.style.justifyContent = 'center';
//         modalContainer.style.alignItems = 'center';
        
//         modalContainer.style.position = 'absolute';
//         modalContainer.style.top = '0';
//         modalContainer.style.left = '0';
        
//         modalContainer.style.height = '100%';
//         modalContainer.style.width = '100%';

//         section_body.style.overflow = 'hidden';
//         section_content.style.overflow = 'hidden';
// };

// // propertis function for modal elements
// function properties_modalElements() {
//     if (modal_case01.style.display == 'grid') {
//         modal_case01.style.size = '100%';
//         modal_case01.style.textAlign = 'center';
//         modal_case01.style.padding = '2%';
//     }
//     else if(modal_case02.style.display == 'grid') {
//         modal_case02.style.size = '100%';
//         modal_case02style.textAlign = 'center';
//         modal_case02.style.padding = '2%';
//     }
//     else if(modal_case03.style.display == 'grid') {
//         modal_case03.style.size = '100%';
//         modal_case03style.textAlign = 'center';
//         modal_case03.style.padding = '2%';
//     }
//     else if(modal_case04.style.display == 'grid') {
//         modal_case04.style.size = '100%';
//         modal_case04style.textAlign = 'center';
//         modal_case04.style.padding = '2%';
//     }
// };

// // function to close modal and revert container settings
//  function closeModal() {
//     if (modalContainer.style.display == 'flex') {
//         modalContainer.style.display = 'none';

//         project_01.style.overflow = 'auto';
//         section_body.style.overflow = 'auto';
//         section_nav.style.display = 'flex';
        
//         modal_case01.style.display = 'none';
//         modal_case02.style.display = 'none';
//         modal_case03.style.display = 'none';
//         modal_case04.style.display = 'none';

//         console.log('exit button has been clicked');
     
        
//     } else {
//         section_body.style.overflow = 'hidden';
//         section_nav.style.display = 'none';
//         modalContainer.style.display = 'flex';
//     }
//   };


// // hidden navigation on modal appearance
// function properties_hiddenNav() {
//     if (section_nav.style.display == 'flex') {
//         section_nav.style.display = 'none';
//     } else {
//         section_nav.style.display = 'flex';
//     }
// };











// function projectView() {
//     let modalBtn = document.querySelectorAll('.modalBtn');
    


//     var project_01 = document.querySelector('#project_01');
//     var project_02 = document.querySelector('#project_02');
//     var project_03 = document.querySelector('#project_03');
//     var project_04 = document.querySelector('#project_04');

//     if (modalBtn.id === 'modal_case01') {
//         project_01.style.display = 'grid';
//         project_02.style.display = 'none';
//         project_03.style.display = 'none';
//         project_04.style.display = 'none';

//         console.log('modal 01 is active');
//     }
//     else if (modalBtn.id === 'modal_case02') {
//         project_01.style.display = 'none';
//         project_02.style.display = 'grid';
//         project_03.style.display = 'none';
//         project_04.style.display = 'none';

//         console.log('modal 02 is active');
//     }
//     else if (modalBtn.id === 'modal_case03') {
//         project_01.style.display = 'none';
//         project_02.style.display = 'grid';
//         project_03.style.display = 'grid';
//         project_04.style.display = 'none';

//         console.log('modal 03 is active');
//     }
//     else if (modalBtn.id === 'modal_case04') {
//         project_01.style.display = 'none';
//         project_02.style.display = 'none';
//         project_03.style.display = 'none';
//         project_04.style.display = 'grid';

//         console.log('modal 04 is active');
//     } else {
//         project_01.style.display = 'none';
//         project_02.style.display = 'none';
//         project_03.style.display = 'none';
//         project_04.style.display = 'none';

//         console.log('no modal is active');
//     }
// };



