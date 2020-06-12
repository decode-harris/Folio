// nav selectors
let nav = document.querySelector('#nav');
let navbtn = document.querySelector('#navbtn');
let navicon = document.querySelector('#navicon');
let navlist = document.querySelector('#navlist');

// nav prop selectors
let nav_btn = document.querySelector('#nav_btn');
let nav_title = document.querySelector('#nav_title');
let nav_ul = document.querySelector('#nav_ul');


// function : nav props
function navproperties() {
    // mql.addListener(mediaQueryLog);

    // validate media query
    if (mql.matches !== true) {
        // assign default hidden values to nav elemnts on mobile
        nav_btn.style.display = 'flex';
        // test : navbtn container = display none
        console.log('nav btn cont = display : none')

        nav_title.style.display = 'none';
        // test : nav title = display none
        console.log('nav title = display : none');

        nav_ul.style.display = 'none';
        // test : nav ul = display none
        console.log('nav ul = display : none');

    }
    else {
        // assign default hidden values to nav elemnts on mobile
        nav_title.style.display = 'flex';
        nav_ul.style.display = 'flex';
        nav_btn.style.display = 'none';

    }
    
    
   
    
}

// event : nav btn
navbtn.addEventListener('click', ()=>{

    if (nav_ul.style.display == 'none' || nav_ul.style.display === null) {
        nav_ul.style.display = 'flex';

        console.log('nav ul : display = flex');
    }
    if (nav_title.style.display == 'none' || nav_title.style.display === null) {
        nav_title.style.display = 'flex';

        console.log('nav title : display = flex');
    }
    
    else {
        nav_title.style.display = 'none';
        nav_ul.style.display = 'none';

        console.log('nav btn : default props');
    }

});

// event : media query listener
let mql = window.matchMedia('(min-width: 960px)');

function mediaQueryLog(e) {

    if (e.matches) {
        // assign nav props
        navproperties();

        // verify viewport : > 960px width
        console.log('media query : desktop');
    }
    else {
        // assign nav props
        navproperties();

        // verify viewport : < 960px width
        console.log('media query : mobile'); 
    }
}
