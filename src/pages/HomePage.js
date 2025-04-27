import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import '../css sheets/global2.css';
import TinyLineChart from '../components/lines';
import TinyLineChart2 from '../components/lines2';
import TinyLineChart3 from '../components/lines3';
import Slideshow from '../components/carousel';
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div className='wrapper'>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <Card className="fadeLeft" sx={{ position: 'absolute', zIndex: '1', animation: 'fadeLeft 1s', background: 'rgb(51, 65, 94)', marginTop: '11em', marginLeft: '10.1em', height: '250px', width: '28.5em', padding: '2px', display: 'inline-block', borderRadius: '20px'}}>
          <CardContent style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '1em'}}>
            <h1 
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '2.4rem',
                fontWeight: '600',
                color: 'rgb(252, 252, 211)',
                marginBottom: '0.6em',
                lineHeight: '1.2em',
                letterSpacing: '0.5px',
                textShadow: '1px 1px 6px rgba(0, 0, 0, 0.4)',
                textAlign: 'center'
              }}
            >
              Instant updates <br /> on your favorite <br /> S&P 500 Companies
            </h1>
            <Link to="/stocks">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: 'rgb(47, 199, 148)',
                  color: 'white',
                  padding: '0.9em 2.7em',
                  fontSize: '0.8rem',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: '#3bc49e',
                  }
                }}
              >
                Search
              </Button>
            </Link>
          </CardContent>
        </Card>

        <button className='btnLoginPopup'>Login</button>
        <img src='/logoScout.png' alt='logo' style={{ position: 'absolute', top: '0.69em', width: '2.5em', height: 'auto', left: '1.89em' }}></img>
        <h2 style={{ fontSize: '1.8em', color: '#9167fb', userSelect: 'none', position: 'absolute', top: '0.6em', left: '2.5em', margin: '0' }}>Scout</h2>

        {/* Main heading */}
        <h2 
          className="fadeUpText"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '8vh',
            fontWeight: '700',
            color: 'rgb(151, 239, 210)',
            userSelect: 'none',
            position: 'absolute',
            top: '1.38em',
            left: '1.49em',
            zIndex: '1',
            letterSpacing: '1px',
            lineHeight: '1.2em',
            textShadow: '2px 2px 8px rgba(0, 0, 0, 0.4)',
            maxWidth: '80vw',
            textAlign: 'center'
          }}
        >
          Market Insights <br /> Powered by AI
        </h2>

        {/* Charts */}
        <div style={{ width: '100vw', height: '100vh', transform: 'scale(1.025)', marginTop: '-15em' }}>
          <div style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '-13em',
            left: '0'
          }}>
            <TinyLineChart />
          </div>
          <div style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '-65em',
            left: '0'
          }}>
            <TinyLineChart2 />
          </div>
          <div style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '-59.5em',
            left: '0'
          }}>
            <TinyLineChart3 />
          </div>
        </div>

        {/* Slideshow */}
        <div style={{ position: 'fixed', left: '0em', bottom: '-0.4em', zIndex: '5' }}>
          <Slideshow />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
