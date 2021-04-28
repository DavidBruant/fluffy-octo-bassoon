<script>
	import { fly, fade } from 'svelte/transition';

	//@ts-check
	export let onMessageReady
	export let message = '';

	let sending = false;

	function onSubmit(e){
		e.preventDefault()
		onMessageReady(message)
		sending = true;
	}
</script>

<section>
	<h2>Rédiger un message</h2>
	<form on:submit={onSubmit}>
		{#if sending}
			<audio autoplay src="./audio/plouf.mp3" title="plouf !"></audio>
			<span in:fly="{{duration: 200, y: -200, opacity: 0}}">La bouteille a été jetée à la mer !!!</span>
		{:else}
			<textarea out:fly="{{delay: 200, duration: 800, x: 500, y:500, opacity: 0}}" placeholder="ici" bind:value={message}></textarea>
			<button out:fly="{{delay: 200, duration: 800, x: 500, y:500, opacity: 0}}" type="submit">Jeter le message sur la plage web...</button>
		{/if}
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
		position: relative;
		border: 5px solid peru;
		min-height: 7rem;
		width: 20rem;

		display: flex;
		flex-direction: column;

		span{
			text-align: center;
			position: absolute;
			font-weight: bold;
		}
	}
</style>