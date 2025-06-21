import { Component } from "react";
// import List from "./List";
import Card from "./Card";
import './Navbar.css'

class Navbar extends Component {
    state = {
        userDetails: []
    }
    componentDidMount() {
        this.UserDetails()
    }
    UserDetails = async () => {
        let options= {
            method: "GET"
        };
        const response = await fetch("https://gorest.co.in/public/v2/users",options);
        const Arraydata = await response.json();
        console.log(Arraydata);
        const details = Arraydata.map(i => {
            return {
                id: i.id,
                name: i.name,
                email: i.email,
                gender: i.gender,
                status: i.status
            }
        })
        this.setState({ userDetails: details })
    }

    render() {
        const { userDetails } = this.state;
        return (
            <div className="nav">
                {userDetails.map(item => <Card id={item.id} name={item.name} email={item.email} gender={item.gender} />)}
            </div>
        )
    }
}

export default Navbar;