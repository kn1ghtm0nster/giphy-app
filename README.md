# Giphy-Party

## Overview:

- This project was made as a part of Springboard's Software Engineering Course. The main objective of the project was to use `Axios` to make an external `API` call to add new elements to the page via the `DOM Object`.

    - __NOTE:__ This page uses a beta `API` key which will be changed in the coming days.

---

## Technologies:

- `HTML`
- `CSS`
- `Javascript`
- `Axios` (CDN)

---

## Function Breakdown:

- `searchGif([SEARCH_TERM])`

    ```JS
    async function searchGif(search) {
        try {
            const api_key = YOUR_API_KEY;
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
    ```

    - Function will accept a `String` and use that string to make a call via `Axios` to the `Giphy API`.
    - Once the `promise` is resolved, the main content area is selected, a new image object is created from the `URL` returned from the response.
    - The new image is then added to the web page for display.

- `randInt()`

    ```JS
    function randInt() {
        let rand = Math.floor(Math.random() * 15);
        return rand;
    }
    ```

    - Function's main responsibility is to generate a random number between 1-15 which will be called in the function from above.
    - Once the random number is generated, we will select an image from the returned `promise` with said random number.

- `form` and `deleteBtn` are the main variables that the application will use to input the results received from the Giphy API.

    - `form` is listening for submission events and once a search term is added, the page will wipe the `input` section via the `DOM Object` to mimic the page being reloaded.
    
    - `deleteBtn` is listening for a click on this button and once it is clicked, all items on the content section will be removed from the page view.


---