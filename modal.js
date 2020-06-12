// application selector
let body = document.querySelector('#body');
let app = document.querySelector('#main');
// modal selector
let modal = document.querySelector('#modal');
// modal item selectors
let proj_name = document.querySelector('#proj_name');
let proj_tag = document.querySelector('#proj_tag');
let proj_desc = document.querySelector('#proj_desc');
// project btn selectors
let asgard = document.querySelector('#asgard');
let alfheim = document.querySelector('#alfheim');
let midgard = document.querySelector('#midgard');
let muspellheim = document.querySelector('#muspellheim');
let nidavellir = document.querySelector('#nidavellir');
let vanaheim = document.querySelector('#vanaheim');
let jotunheim = document.querySelector('#jotunheim');
let helheim = document.querySelector('#helheim');
// window position selector
let value; 

// function : calculate window scroll position
function calcWindowPosition() {
    // assign value with scroll position
    value = window.scrollY;
    // test scroll position
    console.log(value + 'px');
}
// event : asgard modal object
asgard.addEventListener('click', ()=>{
    // assign modal view & props
    modalprops();
    
    let desc = 
            'A structured, responsive & customizable template ' +
            'system. Developed to assist with quick implementation & visualization.';
    
    if (proj_name.innerHTML !== 'Asgard') {
        proj_name.innerHTML = 'Asgard';
        proj_tag.innerHTML = 'Responsive Templating System';
    }
    if (proj_desc.innerHTML !== desc.value) {
        proj_desc.innerHTML = desc;
    }
    else {
        proj_name.innerHTML = '';
        proj_tag.innerHTML = '';
        proj_desc.innerHTML = '';
    }
});
// event : alfheim modal object
alfheim.addEventListener('click', ()=>{
    // assign modal view & props
    modalprops();
    
    let desc = 
            'A fresh redesign, update & model of the current ' +
            'website for the Marriott Hotel chain, Phuket Marriott.';
    
    if (proj_name.innerHTML !== 'alfheim') {
        proj_name.innerHTML = 'alfheim';
        proj_tag.innerHTML = 'Luxury Travel';
    }
    if (proj_desc.innerHTML !== desc.value) {
        proj_desc.innerHTML = desc;
    }
    else {
        proj_name.innerHTML = '';
        proj_tag.innerHTML = '';
        proj_desc.innerHTML = '';
    }

});
// event : midgard modal object
midgard.addEventListener('click', ()=>{
    // assign modal view & props
    modalprops();
    
    let desc = 
            'An expense tracking application to monitor ' +
            '& calculate spending & savings. ' ;
            
    
    if (proj_name.innerHTML !== 'midgard') {
        proj_name.innerHTML = 'midgard';
        proj_tag.innerHTML = 'Rental Expense Tracker';
    }
    if (proj_desc.innerHTML !== desc.value) {
        proj_desc.innerHTML = desc;
    }
    else {
        proj_name.innerHTML = '';
        proj_tag.innerHTML = '';
        proj_desc.innerHTML = '';
    }

});
// event : muspellheim modal object
muspellheim.addEventListener('click', ()=>{
    // assign modal view & props
    modalprops();
    
    let desc = 
            'A customizable mosaic gallery layout for ' +
            'designers & photographers. ' ;
            
    
    if (proj_name.innerHTML !== 'muspellheim') {
        proj_name.innerHTML = 'muspellheim';
        proj_tag.innerHTML = 'Photography Mosaic Portfolio';
    }
    if (proj_desc.innerHTML !== desc.value) {
        proj_desc.innerHTML = desc;
    }
    else {
        proj_name.innerHTML = '';
        proj_tag.innerHTML = '';
        proj_desc.innerHTML = '';
    }

});
// event : niflheim modal object
niflheim.addEventListener('click', ()=>{
    // assign modal view & props
    modalprops();

    let desc = 
            'A fresh take on the traditional note taking application. ' +
            'Add a grocery list, manage past lists & much more. ' ;
            
    
    if (proj_name.innerHTML !== 'niflheim') {
        proj_name.innerHTML = 'niflheim';
        proj_tag.innerHTML = 'List Organisation Application';
    }
    if (proj_desc.innerHTML !== desc.value) {
        proj_desc.innerHTML = desc;
    }
    else {
        proj_name.innerHTML = '';
        proj_tag.innerHTML = '';
        proj_desc.innerHTML = '';
    }

});
// event : nidavellir modal object
nidavellir.addEventListener('click', ()=>{
    // assign modal view & props
    modalprops();

    let desc = 
            ' ' +
            ' ' +
            '';
    
    if (proj_name.innerHTML !== 'nidavellir') {
        proj_name.innerHTML = 'nidavellir';
        proj_tag.innerHTML = 'Dashboard Management System';
    }
    if (proj_desc.innerHTML !== desc.value) {
        proj_desc.innerHTML = desc;
    }
    else {
        proj_name.innerHTML = '';
        proj_tag.innerHTML = '';
        proj_desc.innerHTML = '';
    }

});
// event : vanaheim modal object
vanaheim.addEventListener('click', ()=>{
    // assign modal view & props
    modalprops();

    let desc = 
            ' ' +
            ' ' +
            '';
    
    if (proj_name.innerHTML !== 'vanaheim') {
        proj_name.innerHTML = 'vanaheim';
        proj_tag.innerHTML = 'Electron Desktop Application';
    }
    if (proj_desc.innerHTML !== desc.value) {
        proj_desc.innerHTML = desc;
    }
    else {
        proj_name.innerHTML = '';
        proj_tag.innerHTML = '';
        proj_desc.innerHTML = '';
    }

});
// event : jotunheim modal object
jotunheim.addEventListener('click', ()=>{
    // assign modal view & props
    modalprops();

    let desc = 
            ' ' +
            ' ' +
            '';
    
    if (proj_name.innerHTML !== 'jotunheim') {
        proj_name.innerHTML = 'jotunheim';
        proj_tag.innerHTML = 'React Personal Planner';
    }
    if (proj_desc.innerHTML !== desc.value) {
        proj_desc.innerHTML = desc;
    }
    else {
        proj_name.innerHTML = '';
        proj_tag.innerHTML = '';
        proj_desc.innerHTML = '';
    }

});
// event : helheim modal object
helheim.addEventListener('click', ()=>{
    // assign modal view & props
    modalprops();

    let desc = 
            ' ' +
            ' ' +
            '';
    
    if (proj_name.innerHTML !== 'helheim') {
        proj_name.innerHTML = 'helheim';
        proj_tag.innerHTML = 'GSAP Animation Suite';
    }
    if (proj_desc.innerHTML !== desc.value) {
        proj_desc.innerHTML = desc;
    }
    else {
        proj_name.innerHTML = '';
        proj_tag.innerHTML = '';
        proj_desc.innerHTML = '';
    }

});

// function : modal props
function modalprops() {

    // function : calculate window scroll position
    calcWindowPosition();

    // validate modal
    if (modal.style.display == 'none') {
        
        // display modal object
        modal.style.display = 'grid';
        
        // get value from calcWindowPosition()
        modal.style.top = value + 'px';

        // modal position props
        modal.style.position = 'absolute';
        modal.style.left = '0';
        modal.style.height = '100%';
        modal.style.maxHeight = '100%';
        modal.style.maxWidth = '100%';
        modal.style.width = '100%';
        modal.style.background = 'rgba(0,0,0,0.5)';
        modal.style.zIndex = '1000';

        // modal grid positioning
        modal.style.gridColumn = 'span 6';
        modal.style.gridRow = 'span 2';
        
        // apply overflow hidden to body when modal is active
        body.style.overflow = 'hidden';
        
        // test modal value
        console.log(value);

        // test modal props
        console.log('modal styles applied');
        
    }
    else {
        // revert modal to default style
        modal.style.display = 'none';
        body.style.overflow = 'auto';
    }
}

// exit btn selector
let btn_exit = document.querySelector('#btn_exit');
// event : btn exit | close modal
btn_exit.addEventListener('click', ()=>{

    if (modal.style.display == 'grid') {
        modal.style.display = 'none';

        // test modal props removed
        console.log('modal props removed');
    }
    if (body.style.overflow == 'hidden') {
        body.style.overflow = 'scroll';
    }
    else {
        modal.style.display = 'grid';
        body.style.overflow = 'scroll';
    }
});