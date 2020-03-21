
// showcase selector
const showcase = document.querySelector('.showcase');
// console.log(showcase);

// sc ctrl btns
let btn_next = document.querySelector('.btn_next');
let btn_prev = document.querySelector('.btn_prev');

// showcase starting logic 
let sc_index = 1;
view_sc(sc_index);

function main_view(n) {
    view_sc(sc_index = n);
}

// btn ctrls
function next_view(n) {
    view_sc(sc_index += n);
}
function prev_view(n) {
    view_sc(sc_index -= n);
}

// showcase function
function view_sc(n) {
    let i;
    let sc = document.getElementsByClassName('sc');
    if (n > sc.length) {sc_index = 1};
    if (n < 1) {sc_index = sc.length};

    for (i = 0; i < sc.length; i++) {
        sc[i].style.display = 'none';
    }
    sc[sc_index-1].style.display = '';

}













