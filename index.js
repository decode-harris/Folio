const body = document.querySelector('.body');

let closeBtn = document.querySelector('.closeBtn');
let modalContainer = document.querySelector('.modal_container');

modalContainer.style.display = 'none';


function modalView() {
    projectView();

    if (modalContainer.style.display == 'none') {
        
        // body.style.overflow = 'hidden';
     
        modalContainer.style.display = 'flex';
        modalContainer.style.position = 'absolute';
        modalContainer.style.top = window.scrollY;
        modalContainer.style.left = '0';

        closeBtn.style.position = 'absolute';


        closeBtn.style.fontSize = '2rem';
        closeBtn.style.color = '#FFF';
        closeBtn.style.background = 'trasnparent';
        closeBtn.style.height = '80px';
        closeBtn.style.width = '120px';

        

    } else {
        body.style.overflow = 'auto';
        modalContainer.style.display = 'none';
    }
}



closeBtn.addEventListener('click', () => {
    if (modalContainer.style.display = 'flex') {
        body.style.overflow = 'auto';
     
        modalContainer.style.display = 'none';
    } else {
        body.style.overflow = 'hidden';
     
        modalContainer.style.display = 'flex';
    }
});




function projectView() {
    let modalBtn = document.querySelectorAll('.modalBtn');
    


    var project_01 = document.querySelector('#project_01');
    var project_02 = document.querySelector('#project_02');
    var project_03 = document.querySelector('#project_03');
    var project_04 = document.querySelector('#project_04');

    if (modalBtn.id === 'modal_case01') {
        project_01.style.display = 'grid';
        project_02.style.display = 'none';
        project_03.style.display = 'none';
        project_04.style.display = 'none';

        console.log('modal 01 is active');
    }
    else if (modalBtn.id === 'modal_case02') {
        project_01.style.display = 'none';
        project_02.style.display = 'grid';
        project_03.style.display = 'none';
        project_04.style.display = 'none';

        console.log('modal 02 is active');
    }
    else if (modalBtn.id === 'modal_case03') {
        project_01.style.display = 'none';
        project_02.style.display = 'grid';
        project_03.style.display = 'grid';
        project_04.style.display = 'none';

        console.log('modal 03 is active');
    }
    else if (modalBtn.id === 'modal_case04') {
        project_01.style.display = 'none';
        project_02.style.display = 'none';
        project_03.style.display = 'none';
        project_04.style.display = 'grid';

        console.log('modal 04 is active');
    } else {
        project_01.style.display = 'none';
        project_02.style.display = 'none';
        project_03.style.display = 'none';
        project_04.style.display = 'none';

        console.log('no modal is active');
    }
};



