import React, { useEffect, useState } from 'react';
import { data } from '../data';

const MemoryBoard = ({ handleClick }) => {
	const styles = {
		display: 'flex',
		flexWrap: 'wrap',
		gap: '30px',
		justifyContent: 'center',
		alignItems: 'center',
		padding: '0 50px 50px',
	};

	const [cards, setCards] = useState(data);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => {
		setCards(prevCards => prevCards.sort(() => Math.random() - 0.5));
	});

	return (
		<div style={styles}>
			{cards.map(card => {
				return (
					<div
						key={card.id}
						style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
						onClick={() => handleClick(card.id)}
					>
						<span className="text-white">{card.title}</span>
						<img src={card.src} alt={`${card.title} logo`} width="200px" />
					</div>
				);
			})}
		</div>
	);
};

export default MemoryBoard;
