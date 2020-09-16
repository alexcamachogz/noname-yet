<template lang="pug">
#app
	ap-header

	section.section-search
		nav
			input.input-search(
				type="text",
				placeholder="What anime do you want to watch?",
				v-model="searchQuery"
			)
			a.btn-info(v-on:click="search") Buscar
			a.btn-danger &times;
		section.info-search
			small {{ searchMessage }}

	section.result-search
		div(v-for="t in tracks")
			| {{ t.title }} - &star; {{ t.score }}

	ap-footer
</template>

<script>
import trackService from './services/track';
import ApFooter from './components/layout/Footer.vue';
import ApHeader from './components/layout/Header.vue';

export default {
	name: 'App',
	data() {
		return {
			searchQuery: '',
			tracks: [],
		};
	},
	components: {
		ApFooter,
		ApHeader,
	},
	computed: {
		searchMessage() {
			return `Match: ${this.tracks.length}`;
		},
	},
	methods: {
		search() {
			if (!this.searchQuery) {
				return;
			}
			trackService.search(this.searchQuery).then((res) => {
				this.tracks = res.results;
			});
		},
	},
};
</script>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap')
body
	margin 0
	font-family 'Roboto', sans-serif

.section-search
	nav
		@apply flex p-1 px-3

		.input-search
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
	.section-search
		@apply w-10 / 12 m-auto

	.result-search
		@apply w-10 / 12 m-auto
</style>
