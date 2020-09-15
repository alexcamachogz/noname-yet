import animeService from './anime'

const trackService = {}

// https://jikan.moe/
trackService.search = function (q) {
	// const type = 'track';
	const limit = 15;
	return animeService.get('search/anime', {
		params: { q, limit }
	}).then((res) => {
		return res.data
	});
}

export default trackService;