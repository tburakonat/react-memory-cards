import { useEffect, useState } from 'react';
import Header from './components/Header';
import MemoryBoard from './components/MemoryBoard';

function App() {
	const [clickedItems, setClickedItems] = useState([]);
	const [currentScore, setCurrentScore] = useState(0);
	const [highScore, setHighScore] = useState(0);

	const playRound = cardId => {
		if (clickedItems.includes(cardId)) {
			resetGame();
		} else {
			const newScore = currentScore + 1;
			if (newScore > highScore) setHighScore(newScore);
			setCurrentScore(newScore);
			setClickedItems(prevState => [...prevState, cardId]);
		}
	};

	const resetGame = () => {
		setClickedItems([]);
		setCurrentScore(0);
	};

	useEffect(() => {
		if (currentScore > highScore) {
			setHighScore(currentScore);
		}
	}, [currentScore, highScore]);

	return (
		<div className="d-flex flex-column" style={{ backgroundColor: 'black', minHeight: '100vh' }}>
			<Header currentScore={currentScore} highScore={highScore} />
			<MemoryBoard handleClick={playRound} />
		</div>
	);
}

export default App;
