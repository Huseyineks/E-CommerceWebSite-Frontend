import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpStatusCode } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EMPTY, Observable, throwError,of } from "rxjs";
import { UserService } from "../user/user.service";
import { map, catchError, switchMap } from 'rxjs/operators';
import { RefreshTokenDTO } from "../user/model/DTOs/refresh-token-dto";
import { LoginResponse } from "../user/model/login-response";
import { Router } from "@angular/router";
import { TokenRequestDTO } from "../user/model/DTOs/token-request-dto";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private userService : UserService,private route : Router){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        const token = localStorage.getItem('token');

        let model : TokenRequestDTO = {

            token : token
        }
        

        if(req.headers.has('Authentication') && req.headers.get('Authentication') === 'true'){

            return next.handle(req);

        }

        else if(token){

        

          this.userService.tokenExpired(model).pipe(

            map(() => {

                req = req.clone({
                    setHeaders : {Authorization : `Bearer ${token}`}
                });

                return next.handle(req);
        }),

        catchError((error)=>{

            if(error?.error?.message === "Token is expired"){

                let model : RefreshTokenDTO = {

                    token : localStorage.getItem('token'),
                    refreshToken : localStorage.getItem('refreshToken')
                };

                  return this.userService.refreshToken(model).pipe(

                    switchMap((data)=>{

                    let response : LoginResponse = data;

                

                    localStorage.setItem('token',response.jwtToken);
                    localStorage.setItem('refreshToken',response.refreshToken);

                    req = req.clone({
                        setHeaders : {Authorization : `Bearer ${response.jwtToken}`}
                    });
    
                    return next.handle(req);


                        
                        

                    })


                )

            }
            else {

                
                this.route.navigate(['/login']);
                    return EMPTY;


            }
          
            
            

        })
        
    
    )



        }
        

        this.route.navigate(['/female']);
                    return EMPTY;
        

    }

    
    
}