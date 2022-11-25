import { useEffect, useState } from 'react';
import Header from './components/Header';
import MemoryBoard from './components/MemoryBoard';

function App() {
	const [clickedItems, setClickedItems] = useState([]);
	const [currentScore, setCurrentScore] = useState(0);
	const [highScore, setHighScore] = useState(0);

	return (
		<div className="d-flex flex-column" style={{ backgroundColor: 'black', minHeight: '100vh' }}>
			<Header currentScore={currentScore} highScore={highScore} />
			<MemoryBoard />
		</div>
	);
}

export default App;
