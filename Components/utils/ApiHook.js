export default async function ApiHook({setMovieResult, search}){ 
    try {     
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=4be4997946f0bc9f4dee48a492824044&query=${search}`);
        const data = await response.json();
        setMovieResult(data.results);
        } catch(errorLog){
            console.log(errorLog);
        }
}