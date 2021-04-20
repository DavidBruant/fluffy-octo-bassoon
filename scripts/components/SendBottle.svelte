<script>
	//@ts-check
	export let onMessageReady
	export let message = '';

	function onSubmit(e){
		e.preventDefault()
		onMessageReady(message)
	}
</script>

<section>
	<h2>Rédiger un message</h2>
	<form on:submit={onSubmit}>
		<textarea placeholder="ici" bind:value={message}></textarea>
		<button type="submit">Envoyer à la mer</button>
	</form>
	<div>{message}</div>
</section>


<style lang="scss">
	h2 {
		color: palevioletred;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
	
	form{
		border: 5px solid peru;
	}
</style>