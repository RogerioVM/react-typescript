export interface Datas {
    title: string[];
    url: string;
    videos?: [
        {
            title: string,
            embed: string
        }
    ];
    competition: {
        id: string,
        name: string,

    }
}

export interface Videos {
    title: string;
    embed: string;
}
