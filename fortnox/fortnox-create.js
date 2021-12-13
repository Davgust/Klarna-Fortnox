import fetch from 'node-fetch';

const BASE_URL = 'https://api.fortnox.se';

async function createArticle() {
	const method = 'POST';
	const path = '/3/articles/';

	const headers = {
		'Access-Token': '1374608c-4b93-43ab-86de-0dd1181413a4',
		'Client-Secret': 'AoSdmX3BaC',
		'Content-Type': 'application/json'
	};

	const body = {
		Article: {
			ArticleNumber: 'FPPLUS2',
			Description: 'Red T-Shirt',
			PurchasePrice: 1337,
			Note: 'physical' // OBS: Must be order.type enum from Klarna Checkout API
		}
	};

	const stringifiedBody = JSON.stringify(body);

	const response =
		/**
		 *  MAKE THE REQUEST
		 */
		await fetch(
			BASE_URL + path, // URL
			{
				body: stringifiedBody, // BODY
				method: method, // METHOD
				headers: headers // HEADERS (AUTH)
			}
		);

	const res = await response.json();
	console.log(res);
}

createArticle();
