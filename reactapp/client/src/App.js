import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const e = React.createElement;

class AppForm extends Component {
        constructor(props){
                super(props);
                //Add change handler to form
                this.handleChange = this.handleChange.bind(this);
                //Add submit handler to form
                this.handleSubmit = this.handleSubmit.bind(this);

                this.state = {
                        firstName:'',
                        lastName:'',
                        studentId:'',
                        pawprint:'',
                        address1:'',
                        address2:'',
                        city:'',
                        state:'',
                        country:'',
                        zip:'',
                        dob:'',
                        dateApplied:new Date(),
                        major:'',
                        interests:'',
			response:''
                };
        }
        handleChange(event){
                this.setState({[event.target.name]:event.target.value});
        }

        handleSubmit(event){
                alert("This is working");
                //$.ajax(

                event.preventDefault();
        }

	componentDidMount(){
		this.callApi()
			.then(res=>this.setState({response:res.express }))
			.catch(err=>console.log(err));
	}

	callApi = async () => {
		const response = await fetch('/api/hello');
		const body = await response.json();
		if(response.status!==200) throw Error(body.message);
		return body;
	};

        render() {
          return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <br />First Name:
                <input name="firstName" type="text" value={this.state.firstName} onChange={this.handleChange} />
                <br />Last Name:
                <input name="lastName" type="text" value={this.state.lastName} onChange={this.handleChange}  />

                <br />Student ID Number:
                <input name="studentId" type="text" value={this.state.studentId} onChange={this.handleChange} />
                <br />Pawprint:
                <input name="pawprint" type="text" value={this.state.pawprint} onChange={this.handleChange} />


                <br />Address 1:
                <input name="address1" type="text" value={this.state.address1} onChange={this.handleChange} />
                <br />Address 2:
                <input name="address2" type="text" value={this.state.address2} onChange={this.handleChange} />



                <br />City:
                <input name="city" type="text" value={this.state.city} onChange={this.handleChange} />
                <br />State:
                <input name="state" type="text" value={this.state.state} onChange={this.handleChange} />
                <br />Country:
                <input name="country" type="text" value={this.state.country} onChange={this.handleChange} />


                <br />Zip Code:
                <input name="zip" type="number" value={this.state.zip} onChange={this.handleChange} />
                <br />Date Of Birth:
                <input name="dob" type="text" value={this.state.dob} onChange={this.handleChange} />
                <br />Major:
                <input name="major" type="text" value={this.state.major} onChange={this.handleChange} />
                <br />
                Interests:
                <textarea name="interests" value={this.state.interests} onChange={this.handleChange} />
                <br />
                <br />
                <input type="submit" value="Submit" />
             </form>
		<div className="App-intro">{this.state.response}</div>
	    </div>
          );
        }
};

export default AppForm;


const container1 = document.querySelector('#studentCreateForm');
ReactDOM.render(e(AppForm), container1);

