const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'lol-champion-stat.p.rapidapi.com'
	}
};

fetch('https://lol-champion-stat.p.rapidapi.com/counter_stat?champ=%3CREQUIRED%3E', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));