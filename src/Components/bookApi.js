function bookApi(links) {
    return fetch(links).then((response) => {
        return response.json();
    })
}

export { bookApi };