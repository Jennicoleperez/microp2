const cargarP = async() => {
    const response  = await fetch("https://api.themoviedb.org/3/movie/550?api_key=90f27e7fca27aa224261ee839d68b94b");

    console.log(response);
}

cargarP();
