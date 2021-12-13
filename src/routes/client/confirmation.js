const app = require('../../loaders/express-handlebars');

const { retriveOrder } = require('../../services/server/klarna');

app.get('/confirmation', async function (req, res, next) {
	const order_id = req.query.order_id;

	const klarnaJsonResponse = await retriveOrder(order_id);

	const html_snippet = klarnaJsonResponse.html_snippet;

	res.render('confirmation', {
		klarna_confirmation: html_snippet
	});
});

module.exports = app;
