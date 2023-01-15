export default class MovieService {
  constructor(search){
    this.search = search
  }
  async searchMovie(){
      const response = await fetch(`${this.search}`);
      const data = await response.json();
      return data.results
  };
};