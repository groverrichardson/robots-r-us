import React from 'react';
import FollowButton from './follow-button';
import r2d2 from '../assets/r2d2.png';

export default class Card extends React.Component {
    render() {
        let card = this.props.card;
        let id = this.props.id;

        return (
            <div className="card" key={id}>
                <img
                    src={card.avatar ? card.avatar : r2d2}
                    alt="Robot"
                    className="profile-img"
                />
                <div className="full-name">
                    <p className="first-name">{card.first_name}</p>
                    <p className="last-name">{card.last_name}</p>
                </div>
                <FollowButton id={id} />
                <p className="title">{card.title}</p>
                <p className="email">{card.email}</p>
            </div>
        );
    }
}
