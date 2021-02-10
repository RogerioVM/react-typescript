import React from 'react';
import { Container, Grid } from '@material-ui/core';
import OutrosVideos from './videos';

import '../styles/home.css'


const Home: React.FC = () => {

  return (
      <Container className="container" maxWidth='xl'>
          <Grid
            
            container direction='column'
            justify='center'
            >
              <header>
                <div className="container-header">
                  <h1>Click&Play</h1>
                  <cite>Aqui você pode ver as principais noticias dos melhores campeonatos do mundo</cite>
                </div>
              </header>
            
              <OutrosVideos />
              
            </Grid>
      </Container>
  );
}

export default Home;