import React from 'react';

const Header = () => {
    return ( 
        <div>
            <h1 style={header}>MY TODO APP</h1>
        </div>
     );
}
const header = {
    padding: '20px',
    textAlign : 'center',
    background : 'red',
    color : 'white'
}
 
export default Header;