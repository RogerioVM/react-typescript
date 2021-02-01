/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { Button, Grid } from '@material-ui/core'
import { Datas, Videos} from '../interfaces/Datas';




const videos: React.FC = () => {

    const [data, setData] = useState<Datas[]>([]);

    async function load() {
        const response = await fetch('https://www.scorebat.com/video-api/v1/');
        const data = await response.json();
        console.log(data)

        setData(data)
    }
    
   


  return (
      <div>
        <Grid sm justify="center">
          
                {data?.map((e: Datas) =>  e.videos?.map((e: Videos) => ( 
                <div style={{display:'flex', justifyContent:'flex-end', flexDirection:'column'}}>
                  <h2 dangerouslySetInnerHTML={{ __html: e.title}} />
                  <p style={{width: 400, height: 400}} dangerouslySetInnerHTML={{ __html: e.embed }} />
                </div>
                )))}
                
        </Grid>
        <Button 
            variant="contained"
            color="primary"
            onClick={load}>
        Carregar videos
        </Button>
      </div>
  );
}

export default videos;