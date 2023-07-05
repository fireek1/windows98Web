const desktop = document.querySelector('.desktop')
const progsImg = document.querySelectorAll('.prog > img')
const progs = document.querySelectorAll('.prog')
const progsName = document.querySelectorAll('.prog > p')
const time = document.querySelector('.time > p')

let winId = 0
let mouseMove = false
let el

for (let i = 0; i < progs.length; i++) {
    progsImg[i].onclick = () => {
        const type = progs[i].classList[0]
        const name = progs[i].dataset.name
        const content = progs[i].dataset.content
        setWindow(type, name, content)
    }
}


function windowBtn() {
    const close = document.querySelectorAll('.close')
    const full = document.querySelectorAll('.full')
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = () => {
            const window = document.querySelector(`#window${close[i].id.slice(5)}`)
            if (window.dataset.type === 'note') {
                document.querySelector(`[data-name=${document.querySelector("#window" + close[i].id.slice(5) + "> .window-header > .window-title > .title-name").textContent}`).dataset.content = document.querySelector('textarea').value
            }

            desktop.removeChild(window)
        }
    }

    for (let i = 0; i < full.length; i++) {
        full[i].onclick = () => {
            document.querySelector(`#window${full[i].id.slice(4)}`).style.width = 100 + 'vw'
            document.querySelector(`#window${full[i].id.slice(4)}`).style.height = 100 + 'vh'

            document.querySelector(`#window${full[i].id.slice(4)}`).style.top = 0
            document.querySelector(`#window${full[i].id.slice(4)}`).style.left = 0
        }
    }
}

function setName() {
    for (let i = 0; i < progs.length; i++) {
        progsName[i].textContent = progs[i].dataset.name
    }
}

function setWindow(type, name, content) {
    if (type === 'note') {
        const win = document.createElement('div')
        win.classList.add('window')
        winId++
        win.id = `window${winId}`
        win.dataset.type = type
        win.innerHTML = `
        <div class="window-header">
            <div class="window-title">
                <img src="img/note.png" alt="">
                <p class="title-name">${name}</p>
            </div>
            <div class="header-btns">
                <img src="img/btnFold.svg" id="fold${winId}" alt="" class="btn fold">
                <img src="img/btnFull.svg" id="full${winId}" alt="" class="btn full">
                <img src="img/btnClose.svg" id="close${winId}" alt="" class="btn close">
            </div>
        </div>

        <div class="edit">
            <p class="file opt"><span>F</span>ile</p>
            <p class="edit opt"><span>E</span>dit</p>
            <p class="search opt"><span>S</span>earch</p>
            <p class="help opt"><span>H</span>elp</p>
        </div>

        <div class="content">
            <textarea name="" cols="90" rows="18" aria-disabled="true">${content}</textarea>
        </div>`
        win.style.top = `${Math.random() * 500}px`
        win.style.left = `${Math.random() * 1000}px`
        desktop.appendChild(win)
    } else if (type === 'vhsGame') {
        const win = document.createElement('div')
        win.classList.add('window')
        winId++
        win.id = `window${winId}`
        win.dataset.type = type
        win.innerHTML = `
            <div class="window-header">
                <div class="window-title">
                    <img src="img/note.png" alt="">
                    <p class="title-name">${name}</p>
                </div>
                <div class="header-btns">
                    <img src="img/btnFold.svg" id="fold${winId}" alt="" class="btn fold">
                    <img src="img/btnFull.svg" id="full${winId}" alt="" class="btn full">
                    <img src="img/btnClose.svg" id="close${winId}" alt="" class="btn close">
                </div>
            </div>

            <div class="edit">
                <p class="file opt"><span>F</span>ile</p>
                <p class="edit opt"><span>E</span>dit</p>
                <p class="search opt"><span>S</span>earch</p>
                <p class="help opt"><span>H</span>elp</p>
            </div>

            <div class="content">
                <iframe src="Games/vhsGame/vhsGame.html" frameborder="0" width="100%" height="100%"></iframe>
            </div>`
        win.style.top = `${Math.random() * 500}px`
        win.style.left = `${Math.random() * 1000}px`
        desktop.appendChild(win)
    } else if (type === 'squareGame') {
        const win = document.createElement('div')
        win.classList.add('window')
        winId++
        win.id = `window${winId}`
        win.dataset.type = type
        win.innerHTML = `
            <div class="window-header">
                <div class="window-title">
                    <img src="img/note.png" alt="">
                    <p class="title-name">${name}</p>
                </div>
                <div class="header-btns">
                    <img src="img/btnFold.svg" id="fold${winId}" alt="" class="btn fold">
                    <img src="img/btnFull.svg" id="full${winId}" alt="" class="btn full">
                    <img src="img/btnClose.svg" id="close${winId}" alt="" class="btn close">
                </div>
            </div>

            <div class="edit">
                <p class="file opt"><span>F</span>ile</p>
                <p class="edit opt"><span>E</span>dit</p>
                <p class="search opt"><span>S</span>earch</p>
                <p class="help opt"><span>H</span>elp</p>
            </div>

            <div class="content">
                <iframe src="Games/squareGame.html" frameborder="0" width="100%" height="100%"></iframe>
            </div>`
        win.style.top = `${Math.random() * 500}px`
        win.style.left = `${Math.random() * 1000}px`
        win.style.height = `900px`
        win.style.width = `1200px`
        desktop.appendChild(win)
    } else if (type === 'internet') {
        const win = document.createElement('div')
        win.classList.add('window')
        winId++
        win.id = `window${winId}`
        win.dataset.type = type
        win.innerHTML = `
            <div class="window-header">
                <div class="window-title">
                    <img src="img/note.png" alt="">
                    <p class="title-name">${name}</p>
                </div>
                <div class="header-btns">
                    <img src="img/btnFold.svg" id="fold${winId}" alt="" class="btn fold">
                    <img src="img/btnFull.svg" id="full${winId}" alt="" class="btn full">
                    <img src="img/btnClose.svg" id="close${winId}" alt="" class="btn close">
                </div>
            </div>

            <div class="edit">
                <p class="file opt"><span>F</span>ile</p>
                <p class="edit opt"><span>E</span>dit</p>
                <p class="search opt"><span>S</span>earch</p>
                <p class="help opt"><span>H</span>elp</p>
            </div>

            <div class="content">
                <iframe src="https://oldgoogle.neocities.org/1998/" frameborder="0" width="100%" height="100%"></iframe>
            </div>`
        win.style.top = `${Math.random() * 500}px`
        win.style.left = `${Math.random() * 1000}px`
        desktop.appendChild(win)
    }
}

function normalize() {

}


function mouseDown() {
    const windows = document.querySelectorAll('.window')
    const headers = document.querySelectorAll('.window-header')
    if (windows.length !== 0) {
        for (let i = 0; i < windows.length; i++) {
            const window = windows[i]
            const header = headers[i]
            header.onmousedown = (e) => {
                mouseMove = true
                el = document.querySelector(`#${window.id}`)
            }
            header.onmouseup = (e) => {
                mouseMove = false
                el = null
            }
        }
    }

}

function moveWindow(el) {
    window.onmousemove = (e) => {
        if (mouseMove && el) {
            el.style.top = e.screenY - 100 + 'px'
            el.style.left = e.screenX - 100 + 'px'
        }
    }
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
    mouseDown()
    setName()
    moveWindow(el)

    requestAnimationFrame(Frame)
}

Frame()