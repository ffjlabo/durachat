console.log('once')
window.addEventListener('load', () => {
    const socket = io()
    console.log('inner')
    document.getElementById('form-button').onclick = (event) => {
        event.preventDefault()
        const message = document.getElementById('form-textarea').value
        // emit event for socket
        socket.emit('submit', message)
    }

    // receive message from socket
    socket.on('add',(val) => {
        /*const div = document.createElement('div')
        div.innerText = val
        const li = document.createElement('li')
        li.appendChild(div)
        const ul = document.getElementById('root')
        ul.insertBefore(li, ul.firstElementChild)*/

        // 親のdiv
        const parent_div = document.createElement('div')
        parent_div.classList.add("dura-chat-plane")

        // ユーザのアイコン部分
        const chat_icon_div = document.createElement('div')
        chat_icon_div.classList.add("dura-chat-icon")

        // アイコンの画像
        const chat_icon_img = document.createElement('img')
        chat_icon_img.src = "./icon_sample.jpg"
        chat_icon_img.classList.add("dura-chat-icon-img")

        // ユーザ名
        const chat_icon_name = document.createElement('div')
        chat_icon_name.innerText = "user"
        chat_icon_name.classList.add("dura-chat-icon-name")

        // メッセージ
        const chat_message_div = document.createElement('div')
        chat_message_div.innerText = val
        chat_message_div.classList.add("dura-chat-message")

        /* 組み立て */
        // アイコン部分
        chat_icon_div.appendChild(chat_icon_img)
        chat_icon_div.appendChild(chat_icon_name)

        // プレーンの組み立て
        parent_div.appendChild(chat_icon_div)
        parent_div.appendChild(chat_message_div)

        // li 要素に追加
        const li = document.createElement('li')
        li.appendChild(parent_div)
        const ol = document.getElementById('root')
        ol.insertBefore(li, ol.firstElementChild)

    })
}, false)
