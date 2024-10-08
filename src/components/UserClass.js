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
        <div className="m-5 p-5 border border-solid border-black  w-[400px]">
            
            <h2 className='font-serif'>Name:{name}
            </h2>
            <img className='rounded-full  w-15'src={avatar_url} alt="profile" />
            <h3 className='font-serif'>location : {location}</h3>
            <h3 className='font-serif'>email : rahulbiya26@gmail.com</h3>
            <h3 className='font-serif'>instagram: @biyarahul</h3>
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
/*

*constructor(dummy)
*Render(dummy)
* <html> dummy
*Component did Mount
* api call 
* this.setstate-> state variable is updated


----Update
-render(api data)
--html tag
*/