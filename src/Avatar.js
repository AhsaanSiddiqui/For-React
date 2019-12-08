import React, { Component } from 'react';
import 'tachyons'
import './Avatar.css'
import Avatarlist from './Avatarlist'


class Avatar extends Component {

    constructor () {
        super();
        this.state = {
            name: "Welcome Avatar World"
        }
    }

    changeHeading() {
        this.setState({
            name: "Welcome To The React World"
        });
    }

    render() {

        // Object Arrays
        const avatarlistarray = [
            {
                id: 1,
                name: 'Ahsaan Siddiqui',
                work: 'Front End Developer'
            },
            {
                id: 2,
                name: 'Faraz Hussain',
                work: 'Mobile App Developer'
            },
            {
                id: 3,
                name: 'Fahad Ali',
                work: 'Back End Developer'
            },
            {
                id: 4,
                name: 'Rizwaan Nazir',
                work: 'Business Man'
            }
        ]
        
        // Map Funtion Array to pass Avatar Card 
        const avatarcardfun = avatarlistarray.map( (avatarcard, i) => { 
            return (
                <Avatarlist 
                            id={avatarlistarray[i].id} 
                            name={avatarlistarray[i].name} 
                            work={avatarlistarray[i].work} 
                />
            )
        })

        // Return Card to the main wrap div
        return (
            <div className="mainDiv">
                <h1>{this.state.name}</h1>
                {avatarcardfun}
                <button onClick={ () => this.changeHeading() }>Subscribe</button>
            </div>
        )


    } // Render Bracket End

    
} // Class Bracket End


export default Avatar;