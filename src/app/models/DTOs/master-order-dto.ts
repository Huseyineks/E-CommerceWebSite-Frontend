import { Order } from "../order";

export interface MasterOrderDTO {

    guid : string,
    orders : Order[],
    deliveryAdress : string,
    createdDate : any
    
}
