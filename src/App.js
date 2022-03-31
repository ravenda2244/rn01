import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

import { Table, TableHead, TableBody, TableRow, TableCell, Paper, withStyles } from '@mui/material';

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

const customer = [
{
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/any',
  'name' : '홍홍홍',
  'birthday' : '19830301',
  'gender' : '남자',
  'job' : '개발'
},
{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/any',
  'name' : '이이이',
  'birthday' : '19830302',
  'gender' : '남자2',
  'job' : '개발2'
},
{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/any',
  'name' : '삼삼삼',
  'birthday' : '19830303',
  'gender' : '남자3',
  'job' : '개발3'
}

]
class App extends Component {
  render(){
    const {classes} = this.props;
    return (
      <div>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableHead>
            <TableBody>
              {customer.map(c => {
                return <Customer key={c.id}  id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}    />
              })}
            </TableBody>
          </Table>
        </Paper>
      </div>

    );
  }
  
}

export default withStyles(styles)(App);
