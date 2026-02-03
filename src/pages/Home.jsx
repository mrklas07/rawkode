// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import FAQ from '../components/FAQ';
import BudgetCalculator from '../components/BudgetCalculator';

const Home = () => {
  return (
    <>
      <Hero />
      
      <section id="services">
        <Services />
      </section>

      <section id="projects">
        <Projects />
      </section>
      
      <FAQ />

      <section id="calculator" style={{ padding: '80px 20px', background: '#0a0a0a' }}>
         <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ 
            fontFamily: 'Anton', 
            color: '#fff', 
            textAlign: 'center', 
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            marginBottom: '40px',
            textTransform: 'uppercase'
          }}>
            ¿Cuánto cuesta tu idea?
          </h2>
          <BudgetCalculator />
        </div>
      </section>
    </>
  );
};

export default Home;