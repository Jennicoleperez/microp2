const APIkey = "90f27e7fca27aa224261ee839d68b94b"
const mostrarD = document.getElementById('detalles')

mostrarD = addEventListener('click', async () => {
    try {
        const response = await fetch{
            'https://api.themoviedb.org/3/movie/550?api_key=${APIkey}'
        };
    } catch (error) {
        console.log("ERROR", error);
    };
})
