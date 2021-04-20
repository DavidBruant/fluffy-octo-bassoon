<script>
	export let onMessageReady
	export let placeholder = 'ici'

	function onSubmit(e){
		e.preventDefault()
		onMessageReady(e.target.querySelector('textarea').value)
	}
</script>

<section>
	<h2>Rédiger un message</h2>
	<form on:submit={onSubmit}>
		<textarea {placeholder}></textarea>
		<button type="submit">Envoyer à la mer</button>
	</form>
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