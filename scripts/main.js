import SendBottle from './components/SendBottle.svelte'

new SendBottle({
    target: document.querySelector('main'),
    props: {
        onMessageReady(message){
            console.log('Sauvegarde du message', message)
        },
        placeholder: "lverlkergmltgm"
    }
})