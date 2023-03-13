const APIkey = "90f27e7fca27aa224261ee839d68b94b";

try {
    const response = fetch{
        'https://api.themoviedb.org/3/movie/550?api_key=${APIkey}'
    };
} catch (error) {
    console.log("ERROR", error);
};