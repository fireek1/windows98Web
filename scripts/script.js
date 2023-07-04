const desktop = document.querySelector('.desktop')
const progsImg = document.querySelectorAll('.prog > img')
const progs = document.querySelectorAll('.prog')
const progsName = document.querySelectorAll('.prog > p')
const time = document.querySelector('.time > p')

for (let i = 0; i < progs.length; i++) {
    progsImg[i].onclick = () => {
        if (progs[i].classList[0] === 'note') {
            setWindow(progs[i].classList[0], progs[i].dataset.name, progs[i].dataset.content)
        }
    }
}



progsName.onclick = () => {
    
}

function windowBtn() {
    const close = document.querySelectorAll('.close')
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = () => {
            document.querySelector('.note').dataset.content = document.querySelector('textarea').value
            desktop.removeChild(document.querySelector('.window'))
        }
    }
}

function setWindow(type, name, content) {
    if (type === 'note') {
        const win = document.createElement('div')
        win.classList.add('window')
        win.innerHTML = `
        <div class="window-header">
            <div class="window-title">
                <img src="img/note.png" alt="">
                <p class="title-name">${name} - NotePad</p>
            </div>
            <div class="header-btns">
                <img src="img/btnFold.svg" alt="" class="btn fold">
                <img src="img/btnFull.svg" alt="" class="btn full">
                <img src="img/btnClose.svg" alt="" class="btn close">
            </div>
        </div>

        <div class="edit">
            <p class="file opt"><span>F</span>ile</p>
            <p class="edit opt"><span>E</span>dit</p>
            <p class="search opt"><span>S</span>earch</p>
            <p class="help opt"><span>H</span>elp</p>
        </div>

        <div class="content">
            <textarea name="" cols="90" rows="25" aria-disabled="true">${content}</textarea>
        </div>`
        win.style.top = `${Math.random() * 500}px`
        win.style.left = `${Math.random() * 1000}px`
        desktop.appendChild(win)
    }
}



function moveWindow() {

}

function timeSet() {
    const date = new Date()
    const hourse = date.getHours()
    const minutes = date.getMinutes()
    if (hourse > 12) {
        time.textContent = `${hourse - 12}:${minutes} PM`
    } else if (hourse === 12) {
        time.textContent = `${hourse}:${minutes} PM`
    } else {
        time.textContent = `${hourse}:${minutes} AM`
    }
}

function Frame() {
    timeSet()
    windowBtn()

    requestAnimationFrame(Frame)
}

Frame()