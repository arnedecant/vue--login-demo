<template>
	<div id="app">
		<div id="nav">
			<router-link to="/">Home</router-link>|
			<router-link to="/about">About</router-link>
		</div>
		<div class="view-container">
			<transition name="slide">
				<router-view />
			</transition>
		</div>
	</div>
</template>

<style lang="scss">

	:root {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	body {
		margin: 0;
	}

	.slide-enter-active,
	.slide-leave-active {
		transition: opacity 0.5s, transform 0.5s;
	}

	.slide-enter,
	.slide-leave-to {
		opacity: 0;
		transform: translateX(-10%);
	}

	.view-container {
		position: relative;
	}

	.view-container > section {
		position: absolute;
		width: 100%;
	}

</style>
