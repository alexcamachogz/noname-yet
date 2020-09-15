<template lang="pug">
#app
	section.section
		nav.nav.has-shadow
			.container
				.field.has-addons
					.control.is-expanded
						input.input.is-large(
							type="text",
							placeholder="¿Qué canción buscas?",
							v-model="searchQuery"
						)
					.control
						a.button.is-info.is-large(v-on:click="search") Buscar
					.control
						a.button.is-danger.is-large &times;
				p.help.is-info.has-text-right
					small {{ searchMessage }}
		.container.results
			.columns
				.column(v-for="t in tracks") {{ t.name }} - {{ t.artist }}
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
const tracks = [
	{ name: 'Muchacha', artist: 'Luis Alberto Spinetta' },
	{ name: 'Lo siento', artist: 'Laura Pausini' },
	{ name: 'Corre', artist: 'Jessy & Joy' },
];

export default {
	name: 'App',
	data() {
		return {
			searchQuery: '',
			tracks: [],
		};
	},
	computed: {
		searchMessage() {
			return `Match: ${this.tracks.length}`;
		},
	},
	methods: {
		search() {
			this.tracks = tracks;
		},
	},
	components: {
		// HelloWorld,
	},
};
</script>

<style lang="stylus">
@import './stylus/main.styl'
.results
	margin-top 50px
</style>
