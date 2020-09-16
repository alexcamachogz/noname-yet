<template lang="pug">
	section.hero
		header.hero-header
			.hero-header-container
				.nav-left
					strong 🀄️ AnimePedia
				.nav-right
					small Nothing
		.hero-body
			.hero-body-container
				h1.title AnimePedia
				h2.subtitle Animes que están Vue-nisimos!
</template>

<style lang="stylus">
.hero
	@apply bg-indigo-500 mb-8;
	.hero-header
		@apply p-4 text-white tracking-widest;
		.hero-header-container
			@apply flex justify-between;
	.hero-body
		@apply text-white text-center p-10;
		.hero-body-container
			.title
				@apply text-4xl p-0 m-0 font-light;
			.subtitle
				@apply text-xl p-0 m-0 font-hairline;
</style>
