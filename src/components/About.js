import User from './User';
import UserClass from './UserClass';
import React, { Component } from 'react';


class About extends Component {
    constructor(props){
        super(props);
        console.log(props);
         };
    componentDidMount(){
        console.log("componentDidMount");
    }
    
    render() {
        return (
            <div >
            <h1>About Us</h1>
            <p>Swigato is India's largest and highest-valued online food ordering and delivery platform founded in 2014. Swigato is based in Bangalore, India, and as of March 2019, was operating in 100 Indian cities. In early 2019, Swigato expanded into general product deliveries under the name Swigato Stores.</p>
            

            <UserClass />
               
                </div>
        );
    }
}
export default About;