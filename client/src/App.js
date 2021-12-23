
import './App.css';
import { Component } from 'react';
import Customer from './components/Customer'
import { Table } from '@material-ui/core';
import { TableHead } from '@material-ui/core';
import { TableBody } from '@material-ui/core';
import { TableRow } from '@material-ui/core';
import { TableCell } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { Paper } from '@material-ui/core';

const styles = theme=>({
  root: {
    width: '100%',
    overflowX: "auto"

  },
  table: {
    minWidth: 1080
  }
})

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
  'name' : '권양숙',
  'birthday': '600822',
  'gender' : '여자',
  'job' : '아내가받았다.'
},
{
  'id':3,
  'image': 'https://placeimg.com/64/64/3',
  'name' : 'Mc무현',
  'birthday': '570822',
  'gender' : '남자',
  'job' : '힙합가수'
}
]

class App extends Component {
  render(){
    const {classes} = this.props;
    return (
      <Paper className={classes.root}>
        <Table className= {classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
            <TableBody>
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
            </TableBody>
          </Table>
        </Paper>
    );
  }
}

export default withStyles(styles)(App);