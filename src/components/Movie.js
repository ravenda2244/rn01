import React from 'react';
import { TableRow } from "@mui/material";
import { TableCell } from "@mui/material";
import PropTypes from 'prop-types';

function Movie( {id, year , title , summary , poster , genres }) {
return (

            <TableRow>
                <TableCell>{id}</TableCell>
                <TableCell><img src={poster} alt="profile" /></TableCell>
                <TableCell>{title}</TableCell>
                <TableCell>{year}</TableCell>
            </TableRow>

        

    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}



export default Movie;