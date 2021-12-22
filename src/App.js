
import './App.css';
import { Component } from 'react';
import Customer from './components/Customer'


const customers =[ {
  'id':1,
  'image': 'https://placeimg.com/64/64/1',
  'name' : '임정환',
  'birthday': '990822',
  'gender' : '남자',
  'job' : '대학생'
},
{
  'id':2,
  'image': 'https://placeimg.com/64/64/2',
  'name' : '이명박',
  'birthday': '990822',
  'gender' : '여자',
  'job' : '대통령'
},
{
  'id':3,
  'image': 'https://placeimg.com/64/64/3',
  'name' : '노무현',
  'birthday': '990822',
  'gender' : '남자',
  'job' : '힙합가수'
}
]
class App extends Component {
  render(){
    return (
      <div>
        {
          customers.map(c=>{
            return(
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
                /> //for문과 비슷 
            )
          })
        }
      </div>
    );
  }
}

export default App;
