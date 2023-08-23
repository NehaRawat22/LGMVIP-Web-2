import React, { Component } from 'react'
import UserItem from './UserItem'

export class Users extends Component {
    constructor(){
        super();
        this.state = {
          data : [], 
          loading: false
      }
    }
    async componentDidMount(){
      let url = "https://reqres.in/api/users?page=1";
      let dataFetch = await fetch(url);
      let parsedData = await dataFetch.json();
      console.log(parsedData);
      this.setState({data: parsedData.data});
    }
  render() {
    return (
      <div className='user'>
        {this.state.data.map((element)=>{
        return<UserItem title1={element.first_name} title2={element.last_name} description={element.email} imageUrl={element.avatar} newsUrl={element.url}/>
        })}
      </div>
    )
  }
}

export default Users
