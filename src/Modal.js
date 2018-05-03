import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class Modal extends Component {
	constructor(props) {
        super(props);
        this.state = {
        	fname: '',
        	ferror: '',
        	lname: '', 
        	lerror: '', 
        	email: '', 
        	emailerror: '',
					username: '',
					profileimage: '',
        };

        this.fnameChange = this.fnameChange.bind(this);	
        this.lnameChange = this.lnameChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }

    fnameChange(event){
    	this.setState({fname: event.target.value});
    	if (this.state.fname != ''){
    	this.setState({ferror: ''});
    	}
    }

    lnameChange(event){
    	this.setState({lname: event.target.value});
    	if (this.state.lname != ''){
    	this.setState({lerror: ''});
    	}
    }

    emailChange(event){
    	this.setState({email: event.target.value});
    	if (this.state.email != ''){
    	this.setState({emailerror: ''});
    	}
    }


    formSubmit(){

        axios.get('https://api.github.com/users/'+ this.state.fname +'')
				 .then((response) => {
					 console.log(response)
					 this.setState({
						 username: response.data.name,
						 profileimage: response.data.avatar_url
					 })
				 });

    	if (this.state.fname === ''){
    	this.setState({ferror: 'Please enter first name'});
    	}
    	else if (this.state.lname === ''){
    	this.setState({lerror: 'Please enter last name'});
    	}
    	else if (this.state.email === ''){
    	    this.setState({emailerror: 'Please enter email address'});
    	}
    	else{
    	alert('Hello: ' + this.state.fname + ' ' + this.state.lname + '\n' + 'Your Email Address is:' + this.state.email);
    	}
    }

  render() {
    return (
      <div className="modal-inner-wrap">
        <div className="form-group">        
          <input name="fname" value={this.state.fname} onChange={this.fnameChange} placeholder="First Name" type="text" />
          <span className="error-msg">{this.state.ferror}</span>
        </div>
        <div className="form-group">
          <input name="lname" value={this.state.lname} onChange={this.lnameChange} placeholder="Last Name" type="text" />
          <span className="error-msg">{this.state.lerror}</span>
        </div>
        <div className="form-group">
          <input name="email" value={this.state.email} onChange={this.emailChange} placeholder="Email" type="email" />
          <span className="error-msg">{this.state.emailerror}</span>
        </div>
          <input type="button" className="nw-btn primary-btn" onClick={this.formSubmit} value="Submit"/>
					<div className="user-info-wrap">
						<div className="img-wrap"><img src={this.state.profileimage} /></div>
						<div className="info-wrap"><p>{this.state.username}</p></div>
					</div>
					
      </div>    
    );
  }
}

export default Modal;
