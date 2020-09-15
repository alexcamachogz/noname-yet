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
				.column(v-for="t in tracks") {{ t.title }} - &#9733; {{ t.score }}
</template>

<script>
import trackService from "./services/track";

export default {
	name: "App",
	data() {
		return {
			searchQuery: "",
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
			trackService.search(this.searchQuery).then((res) => {
				this.tracks = res.results;
			});
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
