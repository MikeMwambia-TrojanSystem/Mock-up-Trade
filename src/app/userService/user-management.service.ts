import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable , of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endPoint = 'http://localhost:3600';

const httpOptions = {
	headers:new HttpHeaders ({
	   'Content-Type':'application/json',
     'Access-Control-Allow-Origin': 'http://localhost:3600',
     'Access-Control-Allow-Headers': 
     'Origin,Accept,Authorization,Content-Type,X-Requested-With,Range'
	})
};

@Injectable({
  providedIn: 'root'
})

export class UserManagementService {

  constructor(private http:HttpClient) { }

  private extractData(res:Response) {
  	let body = res;
  	return body || { };
  }



  //To register users
  addUser(user):Observable<any> {
  	console.log('Level 1');
  	console.log(user)
  	return this.http.post<any>(endPoint + '/api/users',JSON.stringify(user),httpOptions).pipe(
  	tap((user) => console.log(`added user w/ id=${user.id}`)),
    catchError(this.handleError<any>('addUser'))
  	);
  };

  //To Login
  login(userCredentials):Observable<any> {
  	return this.http.post<any>(endPoint+'/api/auth',
      JSON.stringify(userCredentials),httpOptions).
  	pipe(tap((userCredentials)=>console.log(userCredentials.accessToken)),
  	catchError(this.handleError<any>('login')))
  };

  //Password reset 
  passwrdReset(userCredentials):Observable<any> {
    console.log(userCredentials);
  	return this.http.post<any>(endPoint+'/api/users/:userName',
      JSON.stringify(userCredentials),httpOptions).
    pipe(tap(_=>console.log(`updated password email or phone reset code sent`)),
  	catchError(this.handleError<any>('passwrdReset'))
  	);
  };


  //Activate account UPDATE ROUTE
  activateAccount(usersCode):Observable<any> {
    return this.http.post<any>(endPoint+'/api/activate',
      JSON.stringify(usersCode),httpOptions).
    pipe(tap((result)=>console.log(`activated account`+ result)),
    catchError(this.handleError<any>('activation')));
  };
  



  //Handle Errors
  private handleError<T>(operation = 'operation',result?:T) {
  	return (error:any):Observable<T> => {
  		//TODO: send the error to remote logging infrastructure
  		console.error(error);//Log to console instead
  		//TODO: better job at transforming error for user consumption
  		console.log(`${operation} failed:${error.error}`);

  		//Let the app keep running by returning an empty result
  		return of(error.error as T);
  	};
  };

}
