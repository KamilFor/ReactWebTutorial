import React from 'react';
import CardItem from './CardsItem';
import './Cards.scss';

function Cards() {
	return (
		<div className="cards">
			<h1>Check out these EPIC DESTINATIONS!</h1>
			<div className="cards__container">
				<div className="cards__wrapper">
					<div className="cards__items">
						<CardItem />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Cards;
