console.warn(
	'If you are reading this, Diego is asking politely to close this tab which can be done by pressing the F12 key. It is a tool for devs only. Ty :) <3'
);

async function searchGif(search) {
	try {
		const api_key = 'LDgZh9ikEaLEYvmQI2aSwx9OtkLPZbAD';
		const res = await axios.get('https://api.giphy.com/v1/gifs/search', {
			params: { api_key, q: search, limit: 15 }
		});
		const mainDiv = document.querySelector('#content-row');
		const rand = randInt();
		const resObj = res.data.data;
		const imgSrc = resObj[rand].images.original.url;
		const newDiv = document.createElement('div');
		newDiv.classList.add('col-md-4', 'mx-auto');
		const newImg = document.createElement('img');
		newImg.classList.add('m-2', 'rounded', 'shadow');
		newImg.src = imgSrc;
		newDiv.append(newImg);
		mainDiv.append(newDiv);
	} catch (e) {
		alert('ERROR: Search field MUST be filled out!');
	}
}

function randInt() {
	let rand = Math.floor(Math.random() * 15);
	return rand;
}

const form = document.querySelector('#search-form');
const input = document.querySelector('#input-search');

form.addEventListener('submit', function(event) {
	event.preventDefault();
	searchGif(input.value);
	input.value = '';
});

const deleteBtn = document.querySelector('#delete');
deleteBtn.addEventListener('click', function() {
	const content = document.querySelector('#content-row');
	content.innerHTML = '';
});
