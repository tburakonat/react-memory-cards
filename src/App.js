import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
// import useWindowSize from 'react-use/lib/useWindowSize';
import Header from './components/Header';
import MemoryBoard from './components/MemoryBoard';

function App() {
	const [clickedItems, setClickedItems] = useState([]);
	const [currentScore, setCurrentScore] = useState(0);
	const [highScore, setHighScore] = useState(0);
	const [hasWon, setHasWon] = useState(false);

	const playRound = cardId => {
		if (clickedItems.includes(cardId)) {
			resetGame();
		} else {
			const newScore = currentScore + 1;
			if (newScore === 9) setHasWon(true);
			if (newScore > highScore) setHighScore(newScore);
			setCurrentScore(newScore);
			setClickedItems(prevState => [...prevState, cardId]);
		}
	};

	const resetGame = () => {
		setClickedItems([]);
		setCurrentScore(0);
		setHasWon(false);
	};

	useEffect(() => {
		if (currentScore > highScore) {
			setHighScore(currentScore);
		}
	}, [currentScore, highScore]);

	return (
		<div className="d-flex flex-column" style={{ backgroundColor: 'black', minHeight: '100vh' }}>
			{hasWon && <Confetti />}
			<Header currentScore={currentScore} highScore={highScore} />
			<MemoryBoard handleClick={playRound} />
		</div>
	);
}

export default App;
