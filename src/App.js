import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

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
    return (
      <div>
        {customer.map(c => {
          return <Customer key={c.id}  id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}    />
        })}
      </div>

    );
  }
  
}

export default App;
