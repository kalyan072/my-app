export interface Item {
    id: number;
    tittle: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating:
    { rate: number;
        count:number;

    }
}
