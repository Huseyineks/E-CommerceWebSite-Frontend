import { ProductSizes } from "./product-sizes";

export interface Product {

    id : number,
    rowGuid : string,
    productName : string,
    productDescription : string,
    productPrice : string,
    productImage : any,
    productSizes : ProductSizes[] |  null
    
    
}
