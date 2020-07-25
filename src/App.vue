<template>
	<div id="app">
		<div class="view-container view-container--compact">
			<transition name="slide-down">
				<router-view />
			</transition>
		</div>
	</div>
</template>

<style lang="scss">

	@import "./scss/_main.scss";

</style>
