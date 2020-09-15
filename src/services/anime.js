import trae from 'trae';
import configService from './config';

const animeService = trae.create({
	baseUrl: configService.apiUrl
})

export default animeService