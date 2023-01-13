MovieApi = process.env.Api_Key
export default async function SearchMovieApi({setMovieResult, search}){
     

    try {     
      const response = await fetch(`${MovieApi}${search}`);
      const data = await response.json();
      setMovieResult(data.results);
      } catch(errorLog){
          console.log(errorLog);
      }
}