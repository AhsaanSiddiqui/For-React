import React from 'react';


const Avatarlist = (props) => {

    return (
        <div className="avatarstyle tc ma3 bg-light-purple pa3 dib grow">
            <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Avatar" />
            <h1>{props.name}</h1>
            <p>{props.work}</p>
        </div>
    )
}

export default Avatarlist;