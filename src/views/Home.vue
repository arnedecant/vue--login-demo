<template>
	<section class="view view-center">
		<h1>Welcome, {{ firstname }}</h1>
	</section>
</template>

<style scoped>
	h1 {
		font-size: 5rem;
		background: var(--gradient-primary);
		background-size: cover;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		text-fill-color: transparent;
		
		position: relative;
		line-height: 1;
		padding: 1rem;
	}

	h1:after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		display: block;
		width: 100%;
		height: 100%;
		background-color: white;
		z-index: -1;
		border-radius: 3px;
	}
</style>

<script>

export default {
	name: 'Home',
	data () {
		return {
			firstname: window.USER.firstname,
		}
	},
	components: {}
}

</script>
