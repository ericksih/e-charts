import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigations from './components/Navigations';
import LineChartPages from './pages/LineChartPages';
import PieBarPages from './pages/PieBarPages';
import BarChartPages from './pages/BarChartPages';

import './style.css';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigations />
        <div className="App">
          <Routes>
            <Route path="/" element={<PieBarPages />} />
            <Route path="/line-chart" element={<LineChartPages />} />
            <Route path="/bar-chart" element={<BarChartPages />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
