import { ProductSizes } from "../product-sizes";

export interface ProductDTO {

    Id : any,
    RowGuid : any,
    ProductName : string,
    ProductDescription : string,
    ProductImage : any,
    ProductPrice : string,
    ProductSizes : ProductSizes[] |  null

}
