const box = document.querySelector('#mega')
const position = {
    x: -1, y: 0.5, z: -1.5,
}
console.log(box)
window.addEventListener('keydown', (e) => {
    console.log(e, position)
    if (e.key == 8 && position.z < 4) { position.z++ }
    if (e.key == 9 && position.z > -7) { position.z-- }
    if (e.key == 6 && position.x < 6) { position.x++ }
    if (e.key == 7 && position.x > -6) { position.x-- }
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
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
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
]

function render() {
    tetris.map((row, y) => {
        console.log(row)
        row.map((cell, x) => {
            console.log(cell, x, y)
            // if cell=1 add cube with position x,y
            var sceneEl = document.querySelector('a-scene');
            var newEl = document.createElement('a-box');
            if (cell == 1) {
                newEl.setAttribute('color', 'red');
                sceneEl.appendChild(newEl);
                const position = { x, y, z: -10 }
                newEl.setAttribute('position', position);
            } else {
                newEl.setAttribute('color', 'green');
                newEl.setAttribute('width', '.1')
                newEl.setAttribute('height', '.1')
                newEl.setAttribute('depth', '.1')
                sceneEl.appendChild(newEl);
                const position = { x, y, z: -10 }
                newEl.setAttribute('position', position);
            }

        })

    })
}

document.querySelector('a-scene').addEventListener('loaded', function () { render() })

// game tik

setInterval(() => {
    console.log('tik')
    tetris.pop()
    tetris.shift([0,0,0,0,0,0,0,0,0,0])
}, 2000)
