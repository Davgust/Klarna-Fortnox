import fetch from 'node-fetch';

export default async function retriveArticle(articleID) {
	console.log(articleID);
	const BASE_URL = 'https://api.fortnox.se';
	const method = 'GET';
	const path = '/3/articles/' + articleID;

	const headers = {
		'Access-Token': '1374608c-4b93-43ab-86de-0dd1181413a4',
		'Client-Secret': 'AoSdmX3BaC'
	};

	const body = {};

	const response =
		/**
		 *  MAKE THE REQUEST
		 */
		await fetch(
			BASE_URL + path, // URL
			{
				method: method, // METHOD
				headers: headers // HEADERS (AUTH)
			}
		);

	const res = await response.json();
	return res;
}
