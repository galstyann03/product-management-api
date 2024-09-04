export interface Product {
    id: string,
    name: string,
    description: string,
    price: number,
    category: string,
    stock: Stock,
    tags: string[],
    rating: number,
    deleted: boolean,
    manufacturer: Manufacturer
}

interface Stock {
    available: number,
    reserved: number,
    location: string
}

interface Manufacturer {
    address: {
        street: string,
        city: string,
        state: string,
        zip: string,
    },
    name: string
}