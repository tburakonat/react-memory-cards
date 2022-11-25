import Header from './components/Header';
import MemoryBoard from './components/MemoryBoard';

function App() {
	return (
		<div className="d-flex flex-column" style={{ height: '100vh' }}>
			<Header />
			<MemoryBoard />
		</div>
	);
}

export default App;
