window.addEventListener('load', () => {
    const socket = io()
    document.getElementById('form-button').onclick = (event) => {
        event.preventDefault()
        const message = document.getElementById('form-textarea').value
        // emit event for socket
        socket.emit('submit', message)
    }

    // receive message from socket
    socket.on('add',(val) => {
        const li = document.createElement('li')
        li.innerText = val
        document.getElementById('root').appendChild(li)
    })
}, false)
