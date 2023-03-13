const cargarP = async() => {

    try {
        const response  = await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=90f27e7fca27aa224261ee839d68b94b");

        console.log(response);

        const data = await response.json();
        console.log(data.results);
    } catch (error) {
        console.log(error);
    }

}

cargarP();
