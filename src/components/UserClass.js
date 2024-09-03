import React from "react";
class UserClass extends React.Component {
    constructor(props){
        super(props);
        console.log(props);
         this.state ={
            userInfo:{
                name:"Dummy",
                location:"Default",
                avatar_url:"http://dummy.photo.com",
            },
            
            
         };
        // console.log(this.props.name + "child constructor");
    }
    async componentDidMount(){
        const  data = await fetch('https://api.github.com/users/Rahulbiya')
        const json = await data.json();

        this.setState({userInfo:json});

        console.log(json);
    }
    render() {
    const{name,location,avatar_url}=this.state.userInfo;
    ;
    return (
        <div className="user-card">
            
            <h2>Name:{name}
            </h2>
            <img src={avatar_url} alt="profile" />
            <h3>location : {location}</h3>
            <h3>email : rahulbiya26@gmail.com</h3>
            <h3>instagram: @biyarahul</h3>
        </div>
    );
  }
}

/*
-Parent constructor
-Parent render
    -Rahul Constructor
    -Rahul render
    -Rahu ComponentDidMount
    <DOM -Updated in single Batch>

    -Elon Constructor
    -Elon render
    -Elon ComponentDidMount
-Parent ComponentDidMount

***https://medium.com/codex/the-lifecycle-of-a-react-component-8e01332a068d***

*/
export default UserClass
