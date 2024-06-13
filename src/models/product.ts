export interface Product {
    _id: string;
    sku: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    imageUrl: string;
    createdAt?: Date;
    updatedAt?: Date;
}