import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fprofile%2F&psig=AOvVaw31HuU49jPZg5tzuVzFwX9r&ust=1703665253887000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCIDFi-HVrIMDFQAAAAAdAAAAABAE",
      },
    };
  }


  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/mdarmaan6204");
    const json = await data.json();
    // console.log(avtar_url);
    this.setState({
        userInfo : json,
    })
  }
  render() {
    const {name , location ,avatar_url} = this.state.userInfo;
    return (
      <div className="user-card">
      <img src = {avatar_url}></img>
        <h1>Name : {name} </h1>
        <h2>Education : B.Tech</h2>
        <h3>Location : {location}</h3>
      </div>
    );
  }
}

export default UserClass;
