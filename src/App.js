import React, { Component } from 'react';
// import Customer from './components/Customer';
import Movie from './components/Movie';
import axios from 'axios';
import './App.css';

import { Table, TableHead, TableBody, TableRow, TableCell, Paper, withStyles } from '@mui/material';

class App extends Component {

  state = {
    isLoading : true,
    movies : []
  }
  
  getMovies = async () => {
    const { data: { data: { movies } } } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    this.setState({ movies, isLoading: false })
  }

  componentDidMount(){
    this.getMovies();
  }


  render(){
    const { isLoading, movies } = this.state;

    return (

      <Paper >
        <Table >
          <TableHead>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>타이틀</TableCell>
            <TableCell>년도</TableCell>
          </TableHead>
          <TableBody>
            {
              movies.map(movie => (
                <Movie 
                  key={movie.id}
                  id={movie.id} 
                  year={movie.year} 
                  title={movie.title}     
                  poster={movie.medium_cover_image} 
                />
                )
              )
            }
          </TableBody>
        </Table>
      </Paper>
    

  );


    // return <section >
    //         {isLoading 
    //           ? <div >
    //               <span >Loading</span>
    //           </div>
    //           : 
    //           <div >
    //             {
    //               movies.map(movie => (
    //                 <Movie 
    //                   key={movie.id}
    //                   id={movie.id} 
    //                   year={movie.year} 
    //                   title={movie.title} 
    //                   summary={movie.summary} 
    //                   poster={movie.medium_cover_image} 
    //                   genres={movie.genres}
    //                 />
    //              ))}
    //           </div> 
    //           }</section>;
    }
  }
  


export default App;
