import React from 'react';
import { Container, Grid } from '@material-ui/core';
import OutrosVideos from './videos';


const Home: React.FC = () => {

  return (
      <Container className="container" maxWidth='xl'>
          <Grid
            
            container direction='column'
            justify='center'
            >
              <header>
                  <h1>Aqui você pode ver as principais noticias dos melhores campeonatos do mundo</h1>
              </header>
            
              <OutrosVideos />
              
            </Grid>
      </Container>
  );
}

export default Home;