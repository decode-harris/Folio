// selectors
const body = document.querySelector('.body');
const btn_connect = document.querySelector('.btn_connect');

// btn event : connect modal
btn_connect.addEventListener('click', ()=> {
    // body props
    body.style.position = 'relative';
    body.style.overflow = 'hidden';

    // modal
    let modal = document.createElement('section');
    modal.style.position = 'absolute';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.height = '100%';
    modal.style.width = '100%';
    modal.style.background = 'rgba(0,0,0,0.8)';
    
    modal.style.display = 'flex';
    modal.style.flexDirection = 'column';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.textAlign = 'center';

    modal.style.maxHeight = '100vh';
    modal.style.maxWidth = '100vw';

    // modal title
    let title = document.createElement('h3');
    title.innerHTML = 'Connect';
    title.style.color = '#FFF';

    // modal info
    let info = document.createElement('p');
    info.innerHTML = 'Pleasse feel free to contact me through any of the following options';
    info.style.color = '#FFF';

    // btn modal close
    let btn_close = document.createElement('button');
    btn_close.innerHTML = 'x';

    btn_close.style.position = 'absolute';
    btn_close.style.top = '10px';
    btn_close.style.right = '10px';
    
    btn_close.style.width = '100%';
    btn_close.style.maxWidth = '180px';
    
    btn_close.style.fontSize = '1.5rem';
    btn_close.style.color = '#FFF';
    btn_close.style.border = '2px solid #FFF';
    btn_close.style.background = 'transparent';
    btn_close.style.padding = '3%';

    // btn_close.style.height = '40px';

    // btn event : close
    btn_close.addEventListener('click', ()=> {

        if (modal.style.display == 'flex') {
            modal.style.display = 'none';
            body.style.overflow = 'auto';
        } else {
            modal.style.display = 'flex';
            body.style.overflow = 'hidden';
        }

    });

    
    // append to modal
    modal.appendChild(btn_close);
    modal.appendChild(title);
    modal.appendChild(info);
    

    // append to body
    body.appendChild(modal);

});