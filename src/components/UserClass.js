import React from "react";
class UserClass extends React.Component {
    constructor(props){
        super(props);
        console.log(props);
         this.state ={
            count :0,
         };
    }
    render() {
    const{name,location}=this.props;
    return (
        <div className="user-card">
            <h1></h1>
            <h2>Name:
                {name}
            </h2>
            <h3>location : {location}</h3>
            <h3>email : rahulbiya26@gmail.com</h3>
            <h3>instagram: @biyarahul</h3>
        </div>
    );
  }
}
export default UserClass
