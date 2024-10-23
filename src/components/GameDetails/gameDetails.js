import React from 'react';
import { useParams } from 'react-router-dom';

const GameDetails = () => {
    const { gameName } = useParams();
    return (
    <div className="position-relative d-flex flex-column w-100 min-vh-100 " style={{background: 'rgb(21,17,34)', background: 'linear-gradient(94deg, rgba(21,17,34,1) 0%, rgba(45,12,55,1) 24%, rgba(28,20,77,1) 64%, rgba(14,7,24,1) 100%)', overflowX: 'hidden', fontFamily: "'Be Vietnam Pro', 'Noto Sans', sans-serif"}}>
        <div className="container-fluid d-flex justify-content-center h-100">
            <div class="text-white text-center rounded p-2 bajar_elemento" style={{backgroundColor:'#403a45'}}>
                <h1>{gameName}</h1>
                <p>Soon you will be able to see all the games' info.</p>
            </div>
        </div>
    </div>
    );
};

export default GameDetails;
