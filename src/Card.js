import React from 'react';

const Card = ({ name, email, randomHash }) => {
    return (
        <div className="minW tc bg-light-green br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${randomHash}?size=200x200`} alt='robots' />
            <div id="card">
                <h2>{name}</h2>
                <a href={`mailto:${email}`}>{email}</a>
            </div>
        </div>
    );
}

export default Card;