import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './components/Home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Dashboard from './components/Dashboard.jsx';
import SportsEng from './components/SportsEng';

const queryClient = new QueryClient()


function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Dashboard" element={<Dashboard />} />
                    <Route path="/SportsEnglish" element={<SportsEng />} />

                </Routes>
            </div>
        </QueryClientProvider>
    );
}

export default App;
