import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    return (
        <div id="cardHolder">
            {
                /* Function that maps each robot onto a card */
                robots.map((user) => {
                    return (
                        <Card
                            key={user.id} // Key prop is suggested for React iterator
                            randomHash={user.username}
                            name={user.name}
                            email={user.email}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;