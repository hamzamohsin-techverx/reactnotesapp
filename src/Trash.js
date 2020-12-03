import React from 'react';
import { useParams ,useLocation, useHistory } from 'react-router-dom';

const Trash = () => {
    const {name} = useParams(); 
    const location = useLocation();
    const history = useHistory();
    console.log(history);
    return(
        <>
        <h1>Trash {name}</h1>
        <p>My Current Path is {location.pathname}</p>
        {location.pathname === `/Trash/hamza` ? 
        <button onClick={()=> {
            history.push('/');
        }}>Click Me </button> : null
        }
        </>
        );
}

export default Trash;