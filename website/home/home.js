function MathRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function id(id) {
    return document.getElementById(id)
}

// function class(get, class, hint, func) {
//     let a = document.querySelectorAll(class)
//     if (get == 1 || get == 'length') {
//         return a.length
//     } else if (get == 2 || get == 'post') {
//         if (hint == 'i') {
//             for (let i = 0;i<a.length;i++) {
//                 func
//             }
//         } else if (typeof hint == 'number') {
//             return a[i]
//         }
//     }
// }

setInterval(function () {
    let menu = document.querySelectorAll('.menu'), menuCount = menu.length;
    if (window.innerWidth > window.innerHeight) {
        //LANDSCAPE
        id('news-list').style.width = parseInt(window.innerWidth) - 410 + "px"
        id('news-list').style.left = '400px'
        console.log('landscape')
        id('toolbar-left').style.display = 'block'
        for (let i = 0; i < menu.length; i++) {
            menu[i].style.fontSize = '15pt'
        }
    } else {
        //POTRAIT
        id('toolbar-left').style.display = 'none'
        id('news-list').style.width = '100vw'
        console.log('potrait')
        id('news-list').style.left = '0'
        for (let i = 0; i < menu.length; i++) {
            menu[i].style.fontSize = '10pt'
        }
    }


    for (let i = 0; i < menuCount; i++) {
       menu[i].style.width = (parseInt(window.innerWidth) / menuCount) + 'px'
    }



})

var xhr = new XMLHttpRequest()
xhr.open('GET','../../database/password.json')
xhr.onreadystatechange = function () {
    if (this.status == 200 && this.readyState == 4) {
        console.log(this.responseText)
    }
}
xhr.send()