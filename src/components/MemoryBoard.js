import React from 'react';
import anakin from './../images/anakin.jpeg';
import obiwan from './../images/obiwan.jpeg';
import luke from './../images/luke.jpeg';
import vader from './../images/vader.jpeg';
import c3po from './../images/c3po.jpeg';
import r2d2 from './../images/r2d2.jpeg';
import chewie from './../images/chewie.jpeg';
import maul from './../images/maul.jpeg';
import yoda from './../images/yoda.jpeg';

const MemoryBoard = () => {
	const styles = {
		backgroundColor: 'green',
		display: 'grid',
		gridTemplateColumns: 'repeat(3, 1fr)',
		gridAutoRows: 'max-content',
	};

	const cards = [
		{
			id: 1,
			src: anakin,
			title: 'Anakin',
		},
		{
			id: 2,
			src: obiwan,
			title: 'Obiwan',
		},
		{
			id: 3,
			src: luke,
			title: 'Luke',
		},
		{
			id: 4,
			src: vader,
			title: 'Vader',
		},
		{
			id: 5,
			src: c3po,
			title: 'C3PO',
		},
		{
			id: 6,
			src: r2d2,
			title: 'R2D2',
		},
		{
			id: 7,
			src: chewie,
			title: 'Chewie',
		},
		{
			id: 8,
			src: maul,
			title: 'Maul',
		},
		{
			id: 9,
			src: yoda,
			title: 'Yoda',
		},
	];

	return (
		<div style={styles}>
			{cards.map(card => {
				return (
					<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
						{card.title}
						<img key={card.id} src={card.src} alt={`${card.title} logo`} width="160px" />
					</div>
				);
			})}
		</div>
	);
};

export default MemoryBoard;
