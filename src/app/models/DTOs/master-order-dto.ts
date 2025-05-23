import { Order } from "../order";
import { UserDTO } from "./user-dto";

export interface MasterOrderDTO {

    guid : string,
    orders : Order[],
    deliveryAdress : string,
    createdDate : any,
    user : UserDTO | null
    
}
