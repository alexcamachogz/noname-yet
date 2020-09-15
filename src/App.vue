<template lang="pug">
#app
	header
		nav
			input.input-search(
				type="text",
				placeholder="¿Qué anime quieres encontrar?",
				v-model="searchQuery"
			)
			a.btn-info(v-on:click="search") Buscar
			a.btn-danger &times;
		section.info-search
			small {{ searchMessage }}

	section.result-search
		div(v-for="t in tracks")
			| {{ t.title }} - &star; {{ t.score }}
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
header
	nav
		@apply flex p-1

		.input-search
			// w-8/12
			@apply bg-white border border-gray-300 rounded rounded-r-none py-3 px-4 block appearance-none leading-normal w-full

			&:focus
				@apply outline-none

		.btn-info
			@apply bg-blue-500 text-white font-bold py-3 px-4 cursor-pointer

			&:hover
				@apply bg-blue-600

		.btn-danger
			@apply bg-red-500 text-white font-bold py-3 px-4 rounded rounded-l-none cursor-pointer

			&:hover
				@apply bg-red-600

	.info-search
		@apply p-0 pr-3 m-0 mt-1 flex justify-end text-gray-500

@screen md
	header
		@apply w-10 / 12 m-auto

	.result-search
		@apply w-10 / 12 m-auto
</style>
