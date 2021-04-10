let sq1 = document.getElementById('div-97')
let child_sq1 = document.createElement('div')
child_sq1.setAttribute('id', 'div-97-1')
sq1.appendChild(child_sq1)

let sq2 = document.getElementById('div-127')
let child_sq2 = document.createElement('div')
child_sq2.setAttribute('id', 'div-127-1')
sq2.appendChild(child_sq2)

let sq3 = document.getElementById('div-99')
let child_sq3 = document.createElement('div')
child_sq3.setAttribute('id', 'div-99-1')
sq3.appendChild(child_sq3)

let sq4 = document.getElementById('div-129')
let child_sq4 = document.createElement('div')
child_sq4.setAttribute('id', 'div-129-1')
sq4.appendChild(child_sq4)

let div_17 = document.getElementById('div-17')
let piece_red_1 = document.createElement('div')
piece_red_1.setAttribute('id', 'piece-red-1')
div_17.appendChild(piece_red_1)

let div_20 = document.getElementById('div-20')
let piece_red_2 = document.createElement('div')
piece_red_2.setAttribute('id', 'piece-red-2')
div_20.appendChild(piece_red_2)

let div_62 = document.getElementById('div-62')
let piece_red_3 = document.createElement('div')
piece_red_3.setAttribute('id', 'piece-red-3')
div_62.appendChild(piece_red_3)

let div_65 = document.getElementById('div-65')
let piece_red_4 = document.createElement('div')
piece_red_4.setAttribute('id', 'piece-red-4')
div_65.appendChild(piece_red_4)

let div_92 = document.getElementById('div-92')
let red_piece_1 = document.getElementById('piece-red-1')
let red_piece_2 = document.getElementById('piece-red-2')
let red_piece_3 = document.getElementById('piece-red-3')
let red_piece_4 = document.getElementById('piece-red-4')

let move_ids = ['div-92', 'div-93', 'div-94', 'div-95', 'div-96', 'div-82', 'div-67', 'div-52', 'div-37', 'div-22', 'div-7', 'div-8', 'div-9', 'div-24', 'div-39', 'div-54', 'div-69', 'div-84', 'div-100', 'div-101', 'div-102', 'div-103', 'div-104', 'div-105', 'div-120', 'div-135', 'div-134', 'div-133', 'div-132', 'div-131', 'div-130', 'div-144', 'div-159', 'div-174', 'div-189', 'div-204', 'div-219', 'div-218', 'div-217', 'div-202', 'div-187', 'div-172', 'div-157', 'div-142', 'div-126', 'div-125', 'div-124', 'div-123', 'div-122', 'div-121', 'div-106', 'div-91']

let div_26 = document.getElementById('div-26')
let piece_green_1 = document.createElement('div')
piece_green_1.setAttribute('id', 'piece-green-1')
div_26.appendChild(piece_green_1)

let div_29 = document.getElementById('div-29')
let piece_green_2 = document.createElement('div')
piece_green_2.setAttribute('id', 'piece-green-2')
div_29.appendChild(piece_green_2)

let div_71 = document.getElementById('div-71')
let piece_green_3 = document.createElement('div')
piece_green_3.setAttribute('id', 'piece-green-3')
div_71.appendChild(piece_green_3)

let div_74 = document.getElementById('div-74')
let piece_green_4 = document.createElement('div')
piece_green_4.setAttribute('id', 'piece-green-4')
div_74.appendChild(piece_green_4)

let div_24 = document.getElementById('div-24')
let green_piece_1 = document.getElementById('piece-green-1')
let green_piece_2 = document.getElementById('piece-green-2')
let green_piece_3 = document.getElementById('piece-green-3')
let green_piece_4 = document.getElementById('piece-green-4')

let move_ids_green = ['div-24', 'div-39', 'div-54', 'div-69', 'div-84', 'div-100', 'div-101', 'div-102', 'div-103', 'div-104', 'div-105', 'div-120', 'div-135', 'div-134', 'div-133', 'div-132', 'div-131', 'div-130', 'div-144', 'div-159', 'div-174', 'div-189', 'div-204', 'div-219', 'div-218', 'div-217', 'div-202', 'div-187', 'div-172', 'div-157', 'div-142', 'div-126', 'div-125', 'div-124', 'div-123', 'div-122', 'div-121', 'div-106', 'div-91', 'div-92', 'div-93', 'div-94', 'div-95', 'div-96', 'div-82', 'div-67', 'div-52', 'div-37', 'div-22', 'div-7', 'div-8', 'div-23', 'div-38', 'div-53', 'div-68', 'div-83', 'div-98']

let r_num = 0

var i1 = setInterval(() => {
    if (document.getElementById('div-17').hasChildNodes() && r_num == 6) {
        red_piece_1.addEventListener('click', red1)
    } else {
        red_piece_1.removeEventListener('click', red1)
    }
    if (document.getElementById('div-26').hasChildNodes() && r_num == 6) {
        green_piece_1.addEventListener('click', green1)
    } else {
        green_piece_1.removeEventListener('click', green1)
    }
}, 500)

let i2 = setInterval(() => {
    if (document.getElementById('div-20').hasChildNodes() && r_num == 6) {
        red_piece_2.addEventListener('click', red2)
    } else {
        console.log('else 92')
        red_piece_2.removeEventListener('click', red2)
    }
    if (document.getElementById('div-29').hasChildNodes() && r_num == 6) {
        green_piece_2.addEventListener('click', green2)
    } else {
        green_piece_2.removeEventListener('click', green2)
    }
}, 500)
let i3 = setInterval(() => {
    if (document.getElementById('div-62').hasChildNodes() && r_num == 6) {
        red_piece_3.addEventListener('click', red3)
    } else {
        red_piece_3.removeEventListener('click', red3)
    }
    if (document.getElementById('div-71').hasChildNodes() && r_num == 6) {
        green_piece_3.addEventListener('click', green3)
    } else {
        green_piece_3.removeEventListener('click', green3)
    }
}, 500)
let i4 = setInterval(() => {
    if (document.getElementById('div-65').hasChildNodes() && r_num == 6) {
        red_piece_4.addEventListener('click', red4)
    } else {
        red_piece_4.removeEventListener('click', red4)
    }
    if (document.getElementById('div-74').hasChildNodes() && r_num == 6) {
        green_piece_4.addEventListener('click', green4)
    } else {
        green_piece_4.removeEventListener('click', green4)
    }
}, 500)

function red1() {
    red_piece_1.style.animation = 'scale-down 0.5s'
    setTimeout(() => {
        red_piece_1.remove()
    }, 500)
    setTimeout(() => {
        red_piece_1.style.animation = 'scale-up 0.5s'
        div_92.appendChild(red_piece_1)
    }, 500)
    setTimeout(() => {
        document.querySelector("#piece-red-1").style.zIndex = -10
        document.querySelector("#piece-red-2").style.zIndex = -10
        document.querySelector("#piece-red-3").style.zIndex = -10
        document.querySelector("#piece-red-4").style.zIndex = -10
    }, 1000)
}

function red2() {
    red_piece_2.style.animation = 'scale-down 0.5s'
    setTimeout(() => {
        red_piece_2.remove()
    }, 500)
    setTimeout(() => {
        red_piece_2.style.animation = 'scale-up 0.5s'
        div_92.appendChild(red_piece_2)
    }, 500)
    setTimeout(() => {
        document.querySelector("#piece-red-1").style.zIndex = -10
        document.querySelector("#piece-red-2").style.zIndex = -10
        document.querySelector("#piece-red-3").style.zIndex = -10
        document.querySelector("#piece-red-4").style.zIndex = -10
    }, 1000)
}

function red3() {
    red_piece_3.style.animation = 'scale-down 0.5s'
    setTimeout(() => {
        red_piece_3.remove()
    }, 500)
    setTimeout(() => {
        red_piece_3.style.animation = 'scale-up 0.5s'
        div_92.appendChild(red_piece_3)
    }, 500)
    setTimeout(() => {
        document.querySelector("#piece-red-1").style.zIndex = -10
        document.querySelector("#piece-red-2").style.zIndex = -10
        document.querySelector("#piece-red-3").style.zIndex = -10
        document.querySelector("#piece-red-4").style.zIndex = -10
    }, 1000)
}

function red4() {
    red_piece_4.style.animation = 'scale-down 0.5s'
    setTimeout(() => {
        red_piece_4.remove()
    }, 500)
    setTimeout(() => {
        red_piece_4.style.animation = 'scale-up 0.5s'
        div_92.appendChild(red_piece_4)
    }, 500)
    setTimeout(() => {
        document.querySelector("#piece-red-1").style.zIndex = -10
        document.querySelector("#piece-red-2").style.zIndex = -10
        document.querySelector("#piece-red-3").style.zIndex = -10
        document.querySelector("#piece-red-4").style.zIndex = -10
    }, 1000)
}

function green1() {
    green_piece_1.style.animation = 'scale-down 0.5s'
    setTimeout(() => {
        green_piece_1.remove()
    }, 500)
    setTimeout(() => {
        green_piece_1.style.animation = 'scale-up 0.5s'
        div_24.appendChild(green_piece_1)
    }, 500)
    setTimeout(() => {
        document.querySelector("#piece-green-1").style.zIndex = -10
        document.querySelector("#piece-green-2").style.zIndex = -10
        document.querySelector("#piece-green-3").style.zIndex = -10
        document.querySelector("#piece-green-4").style.zIndex = -10
    }, 1000)
}

function green2() {
    green_piece_2.style.animation = 'scale-down 0.5s'
    setTimeout(() => {
        green_piece_2.remove()
    }, 500)
    setTimeout(() => {
        green_piece_2.style.animation = 'scale-up 0.5s'
        div_24.appendChild(green_piece_2)
    }, 500)
    setTimeout(() => {
        document.querySelector("#piece-green-1").style.zIndex = -10
        document.querySelector("#piece-green-2").style.zIndex = -10
        document.querySelector("#piece-green-3").style.zIndex = -10
        document.querySelector("#piece-green-4").style.zIndex = -10
    }, 1000)
}

function green3() {
    green_piece_3.style.animation = 'scale-down 0.5s'
    setTimeout(() => {
        green_piece_3.remove()
    }, 500)
    setTimeout(() => {
        green_piece_3.style.animation = 'scale-up 0.5s'
        div_24.appendChild(green_piece_3)
    }, 500)
    setTimeout(() => {
        document.querySelector("#piece-green-1").style.zIndex = -10
        document.querySelector("#piece-green-2").style.zIndex = -10
        document.querySelector("#piece-green-3").style.zIndex = -10
        document.querySelector("#piece-green-4").style.zIndex = -10
    }, 1000)
}

function green4() {
    green_piece_4.style.animation = 'scale-down 0.5s'
    setTimeout(() => {
        green_piece_4.remove()
    }, 500)
    setTimeout(() => {
        green_piece_4.style.animation = 'scale-up 0.5s'
        div_24.appendChild(green_piece_4)
    }, 500)
    setTimeout(() => {
        document.querySelector("#piece-green-1").style.zIndex = -10
        document.querySelector("#piece-green-2").style.zIndex = -10
        document.querySelector("#piece-green-3").style.zIndex = -10
        document.querySelector("#piece-green-4").style.zIndex = -10
    }, 1000)
}

// function move(num) {
// }

function move(num, piece, color) {
    let par_id = ' '
    let new_id = ' '
    if (piece === 'piece-1') {
        if (color === 'red') {
            par_id = red_piece_1.parentNode.getAttribute('id')
        }
        if (color === 'green') {
            par_id = green_piece_1.parentNode.getAttribute('id')
        }
    }
    if (piece === 'piece-2') {
        if (color === 'red') {
            par_id = red_piece_2.parentNode.getAttribute('id')
        }
        if (color === 'green') {
            par_id = green_piece_2.parentNode.getAttribute('id')
        }
    }
    if (piece === 'piece-3') {
        if (color === 'red') {
            par_id = red_piece_3.parentNode.getAttribute('id')
        }
        if (color === 'green') {
            par_id = green_piece_3.parentNode.getAttribute('id')
        }
    }
    if (piece === 'piece-4') {
        if (color === 'red') {
            par_id = red_piece_4.parentNode.getAttribute('id')
        }
        if (color === 'green') {
            par_id = green_piece_4.parentNode.getAttribute('id')
        }
    }


    if (color === 'red') {
        new_id = move_ids.indexOf(par_id)
    }
    if (color === 'green') {
        new_id = move_ids_green.indexOf(par_id)
    }

    let fake_id = new_id
    let ch_id = ''
    for (i = 4; i < par_id.length; i++) {
        ch_id = ch_id + par_id[i]
    }
    ch_id = parseInt(ch_id, 10)

    if (color === 'red') {
        if (ch_id >= 106 && (piece === 'piece-1' || piece === 'piece-2' || piece === 'piece-3' || piece === 'piece-4')) {
            if (fake_id >= 0) {
                for (i = 1; i <= num; i++) {
                    console.log(fake_id)
                    let div_red = move_ids[fake_id]
                    console.log(div_red)
                    if (div_red === 'div-106' && (piece === 'piece-1' || piece === 'piece-2' || piece === 'piece-3' || piece === 'piece-4')) {
                        let sub = num - (i - 1)
                        console.log(sub)
                        let ch_id = ''
                        for (i = 4; i < div_red.length; i++) {
                            ch_id = ch_id + div_red[i]
                        }
                        ch_id = parseInt(ch_id, 10)
                        ch_id = ch_id + sub
                        console.log(ch_id)
                        return `div-${ch_id}`
                        // console.log(`div-${ch_id}`)
                    }
                    fake_id++
                }
            } else {
                let id = 112 - ch_id
                if (num <= id) {
                    ch_id = ch_id + num
                    console.log(ch_id)
                    return `div-${ch_id}`
                } else {
                    console.log("hey")
                    return false
                    // clearInterval(int_t)
                    // setTimeout(() => {
                    //     setInterval(() => {
                    //         if (!document.getElementById('div-17').hasChildNodes()) {
                    //             red_piece_1.addEventListener('click', wobble)
                    //         }
                    //     }, 1000)
                    // }, 500)
                }
            }
        }
        // else {
        new_id = new_id + num
        if (new_id > (move_ids.length - 1)) {
            let an_id = new_id - (move_ids.length - 1)
            an_id = an_id - 1
            // console.log(move_ids[an_id])
            return move_ids[an_id]
        } else {
            // console.log(move_ids[new_id])
            return move_ids[new_id]
        }

        // }
    }

    if (color === 'green') {
        new_id = new_id + num
        if (new_id > (move_ids_green.length - 1)) {
            // let an_id = new_id - (move_ids_green.length - 1)
            // an_id = an_id - 1
            // console.log(move_ids_green[an_id])
            // return move_ids_green[an_id]
            return false
        } else {
            // console.log(move_ids_green[new_id])
            return move_ids_green[new_id]
        }
    }
}

// setTimeout(() => {
//     move(6, 'red_piece_1')
// }, 3000)

let int_1 = setInterval(() => {
    if (!document.getElementById('div-17').hasChildNodes()) {
        console.log("in first")
        red_piece_1.addEventListener('click', kickstart_r1)
        if (red_piece_1.parentNode.getAttribute('id') === 'div-112') {
            red_piece_1.removeEventListener('click', kickstart_r1)
            // clearInterval(int_1)
        }
    }
    if (!document.getElementById('div-26').hasChildNodes()) {
        console.log("in first")
        green_piece_1.addEventListener('click', kickstart_g1)
        if (green_piece_1.parentNode.getAttribute('id') === 'div-98') {
            green_piece_1.removeEventListener('click', kickstart_g1)
            // clearInterval(int_1)
        }
    }
}, 1100)

let int_2 = setInterval(() => {
    if (!document.getElementById('div-20').hasChildNodes()) {
        console.log("in second")
        red_piece_2.addEventListener('click', kickstart_r2)
        if (red_piece_2.parentNode.getAttribute('id') === 'div-112') {
            red_piece_2.removeEventListener('click', kickstart_r2)
            clearInterval(int_2)
        }
    }
    if (!document.getElementById('div-29').hasChildNodes()) {
        console.log("in first")
        green_piece_2.addEventListener('click', kickstart_g2)
        if (green_piece_2.parentNode.getAttribute('id') === 'div-98') {
            green_piece_2.removeEventListener('click', kickstart_g2)
            // clearInterval(int_1)
        }
    }
}, 1100)

let int_3 = setInterval(() => {
    if (!document.getElementById('div-62').hasChildNodes()) {
        red_piece_3.addEventListener('click', kickstart_r3)
        if (red_piece_3.parentNode.getAttribute('id') === 'div-112') {
            red_piece_3.removeEventListener('click', kickstart_r3)
            clearInterval(int_3)
        }
    }
    if (!document.getElementById('div-71').hasChildNodes()) {
        console.log("in first")
        green_piece_3.addEventListener('click', kickstart_g3)
        if (green_piece_3.parentNode.getAttribute('id') === 'div-98') {
            green_piece_3.removeEventListener('click', kickstart_g3)
            // clearInterval(int_1)
        }
    }
}, 1100)

let int_4 = setInterval(() => {
    if (!document.getElementById('div-65').hasChildNodes()) {
        red_piece_4.addEventListener('click', kickstart_r4)
        if (red_piece_4.parentNode.getAttribute('id') === 'div-112') {
            red_piece_4.removeEventListener('click', kickstart_r4)
            clearInterval(int_4)
        }
    }
    if (!document.getElementById('div-74').hasChildNodes()) {
        console.log("in first")
        green_piece_4.addEventListener('click', kickstart_g4)
        if (green_piece_4.parentNode.getAttribute('id') === 'div-98') {
            green_piece_4.removeEventListener('click', kickstart_g4)
            // clearInterval(int_1)
        }
    }
}, 1100)


function wobble(which_piece, color) {
    // let r_num = Math.floor(Math.random() * 6) + 1
    let move_id = move(r_num, which_piece, color)
    console.log(move_id)
    if (!move_id) {
        console.log("i am here")
    } else {
        // console.log(typeof move_id)
        let new_id = document.getElementById(move_id)
        // console.log(new_id)
        if (color === 'red') {
            if (which_piece === 'piece-1') {
                red_piece_1.style.animation = 'scale-down 0.3s'
                setTimeout(() => {
                    red_piece_1.remove()
                }, 300)
                setTimeout(() => {
                    red_piece_1.style.animation = 'scale-up 0.3s'
                    new_id.appendChild(red_piece_1)
                }, 600)
            }
            if (which_piece === 'piece-2') {
                red_piece_2.style.animation = 'scale-down 0.3s'
                setTimeout(() => {
                    red_piece_2.remove()
                }, 300)
                setTimeout(() => {
                    red_piece_2.style.animation = 'scale-up 0.3s'
                    new_id.appendChild(red_piece_2)
                }, 600)
            }
            if (which_piece === 'piece-3') {
                red_piece_3.style.animation = 'scale-down 0.3s'
                setTimeout(() => {
                    red_piece_3.remove()
                }, 300)
                setTimeout(() => {
                    red_piece_3.style.animation = 'scale-up 0.3s'
                    new_id.appendChild(red_piece_3)
                }, 600)
            }
            if (which_piece === 'piece-4') {
                red_piece_4.style.animation = 'scale-down 0.3s'
                setTimeout(() => {
                    red_piece_4.remove()
                }, 300)
                setTimeout(() => {
                    red_piece_4.style.animation = 'scale-up 0.3s'
                    new_id.appendChild(red_piece_4)
                }, 600)
            }
            setTimeout(() => {
                document.querySelector("#piece-red-1").style.zIndex = -10
                document.querySelector("#piece-red-2").style.zIndex = -10
                document.querySelector("#piece-red-3").style.zIndex = -10
                document.querySelector("#piece-red-4").style.zIndex = -10
            }, 1000)
        }
        if (color === 'green') {
            if (which_piece === 'piece-1') {
                green_piece_1.style.animation = 'scale-down 0.3s'
                setTimeout(() => {
                    green_piece_1.remove()
                }, 300)
                setTimeout(() => {
                    green_piece_1.style.animation = 'scale-up 0.3s'
                    new_id.appendChild(green_piece_1)
                }, 600)
            }
            if (which_piece === 'piece-2') {
                green_piece_2.style.animation = 'scale-down 0.3s'
                setTimeout(() => {
                    green_piece_2.remove()
                }, 300)
                setTimeout(() => {
                    green_piece_2.style.animation = 'scale-up 0.3s'
                    new_id.appendChild(green_piece_2)
                }, 600)
            }
            if (which_piece === 'piece-3') {
                green_piece_3.style.animation = 'scale-down 0.3s'
                setTimeout(() => {
                    green_piece_3.remove()
                }, 300)
                setTimeout(() => {
                    green_piece_3.style.animation = 'scale-up 0.3s'
                    new_id.appendChild(green_piece_3)
                }, 600)
            }
            if (which_piece === 'piece-4') {
                green_piece_4.style.animation = 'scale-down 0.3s'
                setTimeout(() => {
                    green_piece_4.remove()
                }, 300)
                setTimeout(() => {
                    green_piece_4.style.animation = 'scale-up 0.3s'
                    new_id.appendChild(green_piece_4)
                }, 600)
            }
            setTimeout(() => {
                document.querySelector("#piece-green-1").style.zIndex = -10
                document.querySelector("#piece-green-2").style.zIndex = -10
                document.querySelector("#piece-green-3").style.zIndex = -10
                document.querySelector("#piece-green-4").style.zIndex = -10
            }, 1000)
        }
    }
}

// let new_int = setInterval(() => {
//     let child = ''
//     if (document.querySelector('#div-112').hasChildNodes()) {
//         child = document.querySelector('#div-112').children

//         for (let i = 0; i < child.length; i++) {
//             if (child[i].getAttribute('id') === 'piece-red-1') {
//                 red_piece_1.removeEventListener('click', kickstart_1)
//             }
//             if (child[i].getAttribute('id') === 'piece-red-2') {
//                 red_piece_2.removeEventListener('click', kickstart_2)
//             }
//             if (child[i].getAttribute('id') === 'piece-red-3') {
//                 red_piece_3.removeEventListener('click', kickstart_3)
//             }
//             if (child[i].getAttribute('id') === 'piece-red-4') {
//                 red_piece_4.removeEventListener('click', kickstart_4)
//             }
//         }

//         if (child[0] && child[1] && child[2] && child[3]) {
//             clearInterval(new_int)
//         }
//     }
// }, 500)

function kickstart_r1() {
    wobble('piece-1', 'red')
}

function kickstart_r2() {
    wobble('piece-2', 'red')
}

function kickstart_r3() {
    wobble('piece-3', 'red')
}

function kickstart_r4() {
    wobble('piece-4', 'red')
}

let kickstart_g1 = () => {
    wobble('piece-1', 'green')
}
let kickstart_g2 = () => {
    wobble('piece-2', 'green')
}
let kickstart_g3 = () => {
    wobble('piece-3', 'green')
}
let kickstart_g4 = () => {
    wobble('piece-4', 'green')
}

let number_1 = document.getElementById('dice-1')
let number_2 = document.getElementById('dice-2')
// number_1.childNodes[1].addEventListener('click', generate_number)
// number_2.childNodes[1].addEventListener('click', generate_number)
let c_red = 10
let c_green = 20
let n = 1

// function generate_number() {
//     if (c_green === Math.pow(20, n)) {
//         random = Math.floor(Math.random() * 6) + 1
//         number_1.childNodes[1].textContent = random
//         r_num = random
//         document.querySelector("#piece-red-1").style.zIndex = 0
//         document.querySelector("#piece-red-2").style.zIndex = 0
//         document.querySelector("#piece-red-3").style.zIndex = 0
//         document.querySelector("#piece-red-4").style.zIndex = 0
//         number_1.childNodes[1].removeEventListener('click', generate_number)
//         number_2.childNodes[1].addEventListener('click', generate_number)
//         n++;
//         c_red = Math.pow(10, n)
//     } else {
//         random = Math.floor(Math.random() * 6) + 1
//         number_2.childNodes[1].textContent = random
//         r_num = random
//         document.querySelector("#piece-green-1").style.zIndex = 0
//         document.querySelector("#piece-green-2").style.zIndex = 0
//         document.querySelector("#piece-green-3").style.zIndex = 0
//         document.querySelector("#piece-green-4").style.zIndex = 0
//         number_1.childNodes[1].addEventListener('click', generate_number)
//         number_2.childNodes[1].removeEventListener('click', generate_number)
//         n++;
//         c_green = Math.pow(20, n)
//     }
// }

// let div_1 = document.getElementById('div-1')
// let red_cover_1 = document.createElement('div')
// red_cover_1.setAttribute('class', 'red-cover-1')
// let div_parent = div_1.parentNode
// let div_sib = div_1.previousElementSibling
// console.log(div_sib)
// // div_parent.replaceChild(red_cover_1, div_1)
// // red_cover_1.appendChild(div_1)

// div = []

// for (let index = 1; index <= 6; index++) {
//     div[index] = document.getElementById(`div-${index}`)
//     div[index].remove()
// }

// let new_div = div_sib.nextElementSibling
// console.log(new_div)

// div_parent.insertBefore(red_cover_1, new_div)

// for (let index = 1; index <= 6; index++) {
//     red_cover_1.appendChild(div[index])
// }

let ans_parent = document.getElementsByClassName('temporary')

for (var i = 0; i < ans_parent.length; i++) {
    ans_parent[i].addEventListener('mouseenter', slideIn)
    ans_parent[i].addEventListener('mouseleave', slideOut)
}

function slideIn() {
    this.style.transform = 'scale(1.1)'
    this.children[0].style.animation = 'slide_left 0.5s';
    this.children[0].style.visibility = 'visible'
}

function slideOut() {
    this.style.transform = 'scale(1)'
    this.children[0].style.animation = 'slide_right 0.5s'
    setTimeout(() => {
        this.children[0].style.visibility = null
    }, 500)
}

let elem_ans = document.getElementsByClassName('answer')
let text = document.getElementById('answer_input')

for (var i = 0; i < elem_ans.length; i++) {
    elem_ans[i].addEventListener('click', selectMe)
}

function selectMe() {
    this.parentNode.removeEventListener('mouseenter', slideIn)
    this.parentNode.removeEventListener('mouseleave', slideOut)
    text.value = `${text.value}${this.children[0].textContent}`
}

let question = document.getElementById('question')

if (document.getElementById('modal')) {
    let modal = document.getElementById('modal')
    modal.showModal()

    function closeDialog() {
        modal.close()
    }

    modalText = document.getElementById('modal').children[0].textContent

    if (modalText.includes('Red')) {
        console.log('red')
        number_1.childNodes[1].addEventListener('click', generate_number)

        document.querySelector("#piece-red-1").style.zIndex = 0
        document.querySelector("#piece-red-2").style.zIndex = 0
        document.querySelector("#piece-red-3").style.zIndex = 0
        document.querySelector("#piece-red-4").style.zIndex = 0
    } else if (modalText.includes('Green')) {
        number_2.childNodes[1].addEventListener('click', generate_number)

        document.querySelector("#piece-green-1").style.zIndex = 0
        document.querySelector("#piece-green-2").style.zIndex = 0
        document.querySelector("#piece-green-3").style.zIndex = 0
        document.querySelector("#piece-green-4").style.zIndex = 0
    } else {
        if (localStorage.getItem('modaltext')) {
            if (localStorage.getItem('modaltext').includes('Red')) {
                number_1.childNodes[1].addEventListener('click', generate_number)

                document.querySelector("#piece-red-1").style.zIndex = 0
                document.querySelector("#piece-red-2").style.zIndex = 0
                document.querySelector("#piece-red-3").style.zIndex = 0
                document.querySelector("#piece-red-4").style.zIndex = 0
            }
            if (localStorage.getItem('modaltext').includes('Green')) {
                number_2.childNodes[1].addEventListener('click', generate_number)

                document.querySelector("#piece-green-1").style.zIndex = 0
                document.querySelector("#piece-green-2").style.zIndex = 0
                document.querySelector("#piece-green-3").style.zIndex = 0
                document.querySelector("#piece-green-4").style.zIndex = 0
            }
        }
    }

    let check_red, check_green = 0

    function generate_number() {
        if (localStorage.getItem('modaltext')) {
            check_red = localStorage.getItem('modaltext').includes('Red')
            check_green = localStorage.getItem('modaltext').includes('Green')
        }
        if (modalText.includes('Red')) {
            random = Math.floor(Math.random() * 6) + 1
            number_1.childNodes[1].textContent = random
            r_num = random
            number_1.childNodes[1].removeEventListener('click', generate_number)
            // document.querySelector("#piece-red-2").style.zIndex = 0
            // document.querySelector("#piece-red-3").style.zIndex = 0
            // document.querySelector("#piece-red-1").style.zIndex = 0
            // document.querySelector("#piece-red-4").style.zIndex = 0
            // number_1.childNodes[1].removeEventListener('click', generate_number)
            // number_2.childNodes[1].addEventListener('click', generate_number)
            // n++;
            // c_red = Math.pow(10, n)
        }
        if (modalText.includes('Green')) {
            random = Math.floor(Math.random() * 6) + 1
            number_2.childNodes[1].textContent = random
            r_num = random
            number_2.childNodes[1].removeEventListener('click', generate_number)
            // document.querySelector("#piece-green-1").style.zIndex = 0
            // document.querySelector("#piece-green-2").style.zIndex = 0
            // document.querySelector("#piece-green-3").style.zIndex = 0
            // document.querySelector("#piece-green-4").style.zIndex = 0
            // number_1.childNodes[1].addEventListener('click', generate_number)
            // number_2.childNodes[1].removeEventListener('click', generate_number)
            // n++;
            // c_green = Math.pow(20, n)
        }

        if (modalText.includes('Wrong')) {
            if (check_red) {
                random = Math.floor(Math.random() * 6) + 1
                number_1.childNodes[1].textContent = random
                r_num = random
                number_1.childNodes[1].removeEventListener('click', generate_number)
            }
            if (check_green) {
                random = Math.floor(Math.random() * 6) + 1
                number_2.childNodes[1].textContent = random
                r_num = random
                number_2.childNodes[1].removeEventListener('click', generate_number)
            }
        }
    }
}

let new_modal = ''

function savedata() {
    let local_red = c_red
    let local_green = c_green
    let local_n = n
    let local_red_1 = document.getElementById('piece-red-1')
    local_red_1 = local_red_1.parentNode.getAttribute('id')
    let local_red_2 = document.getElementById('piece-red-2')
    local_red_2 = local_red_2.parentNode.getAttribute('id')
    let local_red_3 = document.getElementById('piece-red-3')
    local_red_3 = local_red_3.parentNode.getAttribute('id')
    let local_red_4 = document.getElementById('piece-red-4')
    local_red_4 = local_red_4.parentNode.getAttribute('id')

    let local_green_1 = document.getElementById('piece-green-1')
    local_green_1 = local_green_1.parentNode.getAttribute('id')
    let local_green_2 = document.getElementById('piece-green-2')
    local_green_2 = local_green_2.parentNode.getAttribute('id')
    let local_green_3 = document.getElementById('piece-green-3')
    local_green_3 = local_green_3.parentNode.getAttribute('id')
    let local_green_4 = document.getElementById('piece-green-4')
    local_green_4 = local_green_4.parentNode.getAttribute('id')

    // if (document.querySelector("#piece-red-1").hasAttribute('style')) {
    //     if (document.querySelector("#piece-red-1").getAttribute('style') === 0) {
    //         localstorage.setItem('z-red', Number(0))
    //     } else {
    //         localstorage.setItem('z-red', Number(-10))
    //     }
    // }

    // if (document.querySelector("#piece-green-1").hasAttribute('style')) {
    //     if (document.querySelector("#piece-green-1").getAttribute('style') === 0) {
    //         localStorage.setItem('z-green', 0)
    //     } else {
    //         localStorage.setItem('z-green', -10)
    //     }
    // }

    localStorage.setItem('c_red', Number(local_red))
    localStorage.setItem('c_green', Number(local_green))
    localStorage.setItem('n', Number(local_n))

    localStorage.setItem('red_piece_1', local_red_1)
    localStorage.setItem('red_piece_2', local_red_2)
    localStorage.setItem('red_piece_3', local_red_3)
    localStorage.setItem('red_piece_4', local_red_4)

    localStorage.setItem('green_piece_1', local_green_1)
    localStorage.setItem('green_piece_2', local_green_2)
    localStorage.setItem('green_piece_3', local_green_3)
    localStorage.setItem('green_piece_4', local_green_4)

    if (modalText) {
        if (!modalText.includes('Wrong')) {
            localStorage.setItem('modaltext', modalText)
        } else {
            if (localStorage.getItem('modaltext')) {
                if (localStorage.getItem('modaltext').includes('Red')) {
                    new_modal = localStorage.getItem('modaltext').replace('Red', 'Green')
                    localStorage.setItem('modaltext', new_modal)
                } else if (localStorage.getItem('modaltext').includes('Green')) {
                    new_modal = localStorage.getItem('modaltext').replace('Green', 'Red')
                    localStorage.setItem('modaltext', new_modal)
                }
            }
        }
    }
}

function loaddata() {
    if (localStorage.getItem('c_red')) {
        c_red = Number(localStorage.getItem('c_red'))
    } else {
        c_red = 10
    }
    if (localStorage.getItem('c_green')) {
        c_green = Number(localStorage.getItem('c_green'))
    } else {
        c_green = 20
    }
    if (localStorage.getItem('n')) {
        n = Number(localStorage.getItem('n'))
    } else {
        n = 1
    }
    if (localStorage.getItem('red_piece_1')) {
        let red_1 = document.getElementById('piece-red-1')
        red_1.remove()
        // if (localStorage.getItem('red_piece_1') != 'div-17') {
        //     number_2.childNodes[1].addEventListener('click', generate_number)
        // }
        let new_div = document.getElementById(`${localStorage.getItem('red_piece_1')}`)
        new_div.appendChild(red_1)
    }
    if (localStorage.getItem('red_piece_2')) {
        let red_2 = document.getElementById('piece-red-2')
        red_2.remove()
        // if (localStorage.getItem('red_piece_2') != 'div-20') {
        //     number_2.childNodes[1].addEventListener('click', generate_number)
        // }
        let new_div = document.getElementById(`${localStorage.getItem('red_piece_2')}`)
        new_div.appendChild(red_2)
    }
    if (localStorage.getItem('red_piece_3')) {
        let red_3 = document.getElementById('piece-red-3')
        red_3.remove()
        // if (localStorage.getItem('red_piece_3') != 'div-62') {
        //     number_2.childNodes[1].addEventListener('click', generate_number)
        // }
        let new_div = document.getElementById(`${localStorage.getItem('red_piece_3')}`)
        new_div.appendChild(red_3)
    }
    if (localStorage.getItem('red_piece_4')) {
        let red_4 = document.getElementById('piece-red-4')
        red_4.remove()
        // if (localStorage.getItem('red_piece_4') != 'div-65') {
        //     number_2.childNodes[1].addEventListener('click', generate_number)
        // }
        let new_div = document.getElementById(`${localStorage.getItem('red_piece_4')}`)
        new_div.appendChild(red_4)
    }

    if (localStorage.getItem('green_piece_1')) {
        let green_1 = document.getElementById('piece-green-1')
        green_1.remove()
        let new_div = document.getElementById(`${localStorage.getItem('green_piece_1')}`)
        new_div.appendChild(green_1)
    }
    if (localStorage.getItem('green_piece_2')) {
        let green_2 = document.getElementById('piece-green-2')
        green_2.remove()
        let new_div = document.getElementById(`${localStorage.getItem('green_piece_2')}`)
        new_div.appendChild(green_2)
    }
    if (localStorage.getItem('green_piece_3')) {
        let green_3 = document.getElementById('piece-green-3')
        green_3.remove()
        let new_div = document.getElementById(`${localStorage.getItem('green_piece_3')}`)
        new_div.appendChild(green_3)
    }
    if (localStorage.getItem('green_piece_4')) {
        let green_4 = document.getElementById('piece-green-4')
        green_4.remove()
        let new_div = document.getElementById(`${localStorage.getItem('green_piece_4')}`)
        new_div.appendChild(green_4)
    }

    // if (localStorage.getItem('red_piece_1') != 'div-17' || localStorage.getItem('red_piece_2') != 'div-20' || localStorage.getItem('red_piece_3') != 'div-62' || localStorage.getItem('red_piece_4') != 'div-65') {
    //     number_2.childNodes[1].addEventListener('click', generate_number)
    // }

    // if (localStorage.getItem('z-red')) {
    //     if (Number(localStorage.getItem('z-red')) === 0) {
    //         document.querySelector("#piece-red-1").style.zIndex = 0
    //         document.querySelector("#piece-red-2").style.zIndex = 0
    //         document.querySelector("#piece-red-3").style.zIndex = 0
    //         document.querySelector("#piece-red-4").style.zIndex = 0


    //     } else {
    //         document.querySelector("#piece-red-1").style.zIndex = -10
    //         document.querySelector("#piece-red-2").style.zIndex = -10
    //         document.querySelector("#piece-red-3").style.zIndex = -10
    //         document.querySelector("#piece-red-4").style.zIndex = -10
    //     }
    // }

    // if (localStorage.getItem('z-green')) {
    //     if (Number(localStorage.getItem('z-green')) === 0) {
    //         document.querySelector("#piece-green-1").style.zIndex = 0
    //         document.querySelector("#piece-green-2").style.zIndex = 0
    //         document.querySelector("#piece-green-3").style.zIndex = 0
    //         document.querySelector("#piece-green-4").style.zIndex = 0
    //     } else {
    //         document.querySelector("#piece-green-1").style.zIndex = -10
    //         document.querySelector("#piece-green-2").style.zIndex = -10
    //         document.querySelector("#piece-green-3").style.zIndex = -10
    //         document.querySelector("#piece-green-4").style.zIndex = -10
    //     }
    // }
}

window.unload = window.onbeforeunload = function (event) {
    if (localStorage.length == 0) {} else {
        savedata()
    }
}