<template lang="pug">
footer
	div
		p 
		| 🚀 Code with ❤️ by @
		a(href='https://twitter.com/alexcamachogz') alexcamachogz
</template>

<style lang="stylus">
footer
	@apply text-center
	a
		@apply no-underline
		&:hover
			@apply underline text-gray-500
		&:visited
			@apply text-gray-800


@screen md
	footer
		@apply w-10 / 12 m-auto
</style>
