<template>
	<section class="view view--home">
		<h1>Welcome, {{ firstname }}</h1>
	</section>
</template>

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
