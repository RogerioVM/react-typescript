/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { Container, Button, Grid } from '@material-ui/core'
import { Datas, Videos} from '../interfaces/Datas';




const videos: React.FC = () => {

    const [data, setData] = useState<Datas[]>([]);

    async function load() {
        const response = await fetch('https://www.scorebat.com/video-api/v1/');
        const data = await response.json();

        setData(data)
    }
    
   


  return (
      <Container>
        <Grid justify='center'>
              <div style={{display:'flex', justifyContent: 'center', flexWrap: "wrap"}}>
                {data?.map((e: Datas) =>  e.videos?.map((e: Videos) => ( 
                <div style={{margin: '10px'}}>
                  <h2 dangerouslySetInnerHTML={{ __html: e.title}} />
                  <p style={{width: 400, height: 400}} dangerouslySetInnerHTML={{ __html: e.embed }} />
                </div>
                )))}
              </div>
            <Button 
                variant="contained"
                color="primary"
                onClick={load}>
            Carregar videos
            </Button>
        </Grid>
      </Container>
  );
}

export default videos;