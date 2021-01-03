// from react
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// from file
import EmailView from './emailList.js'
import EmailDetails from './EmailDetails.js'
import './App.css';


class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      emails: [],
      activeEmail: null,
    }

    this.setActiveEmail = this.setActiveEmail.bind(this);
  }
  async componentDidMount(){
    // let response = await fetch ('https://jsonplaceholder.typicode.com/posts')
    let response = await fetch ('http://localhost:3001/emails')
    let emailList = await response.json()

    this.setState({ emails: emailList })
  }
  async setActiveEmailDetails(){
    let {activeEmail} = this.state;
    let response = await fetch ('http://localhost:3001/emails')
    let EmailDetailsOBJ = await response.json()

    let EDetails = await EmailDetailsOBJ
    this.setState({ activeEmail : EDetails })
  }

  setActiveEmail(EDetails){
    this.setState({activeEmail:EDetails}, this.setActiveEmailDetails)

  }

  render(){
    let {emails} = this.state;
    let {setActiveEmail} =this;
    // activeEmail is from this.state from the constructor
    // let CorrectView = activeEmail === null ?
    // if is it rendering
    // <EmailView list={emails} setActiveEmail ={setActiveEmail}/> :
    // // else
    // <EmailDetails />
  return (
    <div className="App">
    <h1>Email</h1>
    {/* from'emailList.js, set emails to list, so can map */}
    <EmailView list={emails} setActiveEmail ={setActiveEmail}/> 
    {/* {CorrectView} */}
    </div>  
  );
  }
  
}

export default App;
