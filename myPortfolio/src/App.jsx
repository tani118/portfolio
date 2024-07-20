import { useState } from 'react';
import MainCard from './components/MainCard';
import './App.css'

function App() {
  return (
    <>
    <MainCard name="Lakshya Bhutani" desc={["Student at JIIT", "Delhi, India"]} resumeLink="Resume"></MainCard>
    </>
  )
}

export default App
