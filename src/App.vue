<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png" />
		<!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
		<h1>{{ msg }}</h1>
	</div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
	name: "App",
	data() {
		return {
			msg: "Hola Vue!",
		};
	},
	components: {
		// HelloWorld,
	},
};
</script>

<style lang="stylus">
@import './stylus/main.styl'
</style>
