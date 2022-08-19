import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './components/Home.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Dashboard from './components/Dashboard.tsx';
import SportsEng from './components/SportsEng.tsx';
import TechnologyNews from './components/TechnologyNews.tsx';

const queryClient = new QueryClient()


function App(): JSX.Element {
    return (
        <QueryClientProvider client={queryClient}>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Dashboard" element={<Dashboard />} />
                    <Route path="/SportsEnglish" element={<SportsEng />} />
                    <Route path="/TechNews" element={<TechnologyNews />} />

                </Routes>
            </div>
        </QueryClientProvider>
    );
}

export default App;
