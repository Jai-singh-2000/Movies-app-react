import { Component } from "react";

class Fav extends Component {

  constructor()
  {
    super();
    this.state={
      genres:[],
      currgenre:'All Genres',
      movies:[]
    }
  }


  componentDidMount()
  {
    
    let genresId={
      28: "Action" ,
      12: "Adventure" ,
      16: "Animation" ,
      35: "Comedy" ,
      80: "Crime" ,
      99: "Documentary" ,
      18: "Drama" ,
      10751: "Family" ,
      14: "Fantasy" ,
      36: "History" ,
      27: "Horror" ,
      10402: "Music" ,
      9648: "Mystery" ,
      10749: "Romance" ,
      878: "Science Fiction" ,
      10770: "TV Movie" ,
      53: "Thriller" , 
      10752: "War" ,
      37: "Western" ,
    }
 
    let data= JSON.parse(localStorage.getItem('movies-app')||'[]');
    let tempArr=[];
    tempArr.push("All Genres");
    data.map((movie)=>{
      //Agar temp array me genre id ka wo element present naa ho to
      if(!tempArr.includes(genresId[movie.genre_ids[0]])){
        tempArr.push(genresId[movie.genre_ids[0]]);
      }
    })


    this.setState({
      movies:[...data],
      genres:[...tempArr]
    })
  }


  handleChangeGenre=(genre)=>{
    this.setState({
      currgenre:genre
    },this.filterMovies)
  }

  filterMovies=()=>{
    let data= JSON.parse(localStorage.getItem('movies-app')||'[]');
    let genresId={
      28: "Action" ,
      12: "Adventure" ,
      16: "Animation" ,
      35: "Comedy" ,
      80: "Crime" ,
      99: "Documentary" ,
      18: "Drama" ,
      10751: "Family" ,
      14: "Fantasy" ,
      36: "History" ,
      27: "Horror" ,
      10402: "Music" ,
      9648: "Mystery" ,
      10749: "Romance" ,
      878: "Science Fiction" ,
      10770: "TV Movie" ,
      53: "Thriller" , 
      10752: "War" ,
      37: "Western" ,
    }

    if(this.state.currgenre=='All Genres'){
      this.setState({
        movies:[...data]
      })
    }else{
      let filterMovies= data.filter((movie)=>genresId[movie.genre_ids[0]]==this.state.currgenre)
      this.setState({
        movies:[...filterMovies]
      })
    }
    
  }

  render() {

    let genresId={
      28: "Action" ,
      12: "Adventure" ,
      16: "Animation" ,
      35: "Comedy" ,
      80: "Crime" ,
      99: "Documentary" ,
      18: "Drama" ,
      10751: "Family" ,
      14: "Fantasy" ,
      36: "History" ,
      27: "Horror" ,
      10402: "Music" ,
      9648: "Mystery" ,
      10749: "Romance" ,
      878: "Science Fiction" ,
      10770: "TV Movie" ,
      53: "Thriller" , 
      10752: "War" ,
      37: "Western" ,
    }



    return (
      <div className="container">
        <div className="row">
          <div className="col-3 genre">
            <ul className="list-group">
            
              {
                  this.state.genres.map((genre)=>(
                    this.state.currgenre==genre ? (
                      <li className="list-group-item active">{genre}</li>
                    ):(
                      <li className="list-group-item" onClick={()=>this.handleChangeGenre(genre)}>{genre}</li>
                    )

                ))
              }
            </ul>

          </div>
          <div className="col-9 fav">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              />
              <input type="number" className="form-control" />
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Genre</th>
                  <th scope="col">Popularity</th>
                  <th scope="col">Rating</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {this.state.movies.map((movie) => (
                  <tr>
                    <th scope="row"><img style={{width:"6rem",marginRight:"2rem"}} src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}/>
                    {movie.title}</th>
                    <td>{genresId[movie.genre_ids[0]]}</td>
                    <td>{movie.popularity}</td>
                    <td>{movie.vote_average}</td>
                    <td>
                      <button type="button" className="btn btn-danger">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Fav;
