const box = document.querySelector('#mega')
const position = {
    x: -1,
    y: 0.5,
    z: -1.5,
}
console.log(box)
window.addEventListener('keydown', (e) => {
    // console.log(e, position)
    if (e.key == 8 && position.z < 4) {
        position.z++
    }
    if (e.key == 9 && position.z > -7) {
        position.z--
    }
    if (e.key == 6 && position.x < 6) {
        position.x++
    }
    if (e.key == 7 && position.x > -6) {
        position.x--
    }
    box.setAttribute('position', position)
})

const gameArea = document.querySelector('.area');

const tetris = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 0, 0, 0, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
]

tetris.reverse()

function render() {
    tetris.map((row, y) => {
        // console.log(row)
        row.map((cell, x) => {
            // console.log(cell, x, y)
            // if cell=1 add cube with position x,y
            var sceneEl = document.querySelector('a-scene');
            var newEl = document.createElement('a-box');
            var position;
            if (cell == 1) {
                newEl.setAttribute('color', 'red');
                position = {
                    x,
                    y,
                    z: -10
                }
            } else {
                newEl.setAttribute('color', 'green');
                newEl.setAttribute('width', '.1')
                newEl.setAttribute('height', '.1')
                newEl.setAttribute('depth', '.1')
                position = {
                    x,
                    y,
                    z: -10
                }
            }
            sceneEl.appendChild(newEl);
            newEl.classList.add('box')
            newEl.setAttribute('position', position);
        })

    })
}

document.querySelector('a-scene').addEventListener('loaded', function () {
    render();
    setTimeout(() => {
        tetris.shift()
        tetris.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
        remove('.box')
        render()
    }, 2000)
})

// game tik

console.log(tetris.length)

function remove(el) {
    // console.log(tetris.length)
    //tetris.splice(0, 30)
    const all = document.querySelectorAll(el)
    console.log(all)
    all.forEach((element) => {
        element.remove()
    })
}
// setInterval(() => {
//     console.log('tik')
//     tetris.pop()
//     tetris.shift([0,0,0,0,0,0,0,0,0,0])
// }, 2000)