import { Request, Response } from 'express';
import axios from 'axios';

interface Infos {
    infos: string[];
    competition: {
        id: string,
        name: string,
        embed: string
    },
    videos: [
        
    ]

}

interface Videos {
    title: string,
    embed: string
}


const users = {
    async index(req: Request, res: Response) {
            const { data } = await axios('https://www.scorebat.com/video-api/v1/');
            // data.map((elemento:string[]) => elemento.map((e:string) => e))
          return res.json(data.map((e: Infos) => e.videos.map((e: Videos) => e.embed)));
    }
}

export default users;