//@ts-check

import SendBottle from './components/SendBottle.svelte'

const KEY = 'message bouteille'

new SendBottle({
    target: document.querySelector('main'),
    props: {
        onMessageReady(message){
            console.log('Sauvegarde du message', message)
            localStorage.setItem(KEY, message)
        },
        message: localStorage.getItem(KEY) || ''
    }
})