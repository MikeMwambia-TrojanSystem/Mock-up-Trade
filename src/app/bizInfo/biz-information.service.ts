import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpErrorResponse , HttpEvent, HttpEventType} from '@angular/common/http';
import { Observable , of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endPoint = 'http://localhost:3000';

///api/users

const httpOptions = {
	headers:new HttpHeaders ({
	   'Content-Type':'application/json'
	})
};

@Injectable({
  providedIn: 'root'
})

export class BizInformationService {

  constructor(private http:HttpClient) { }

  private extractData(res:Response) {
  	let body = res;
  	return body || { };
  }

  //To Add Business
  addBiz(bizInfo):Observable<any> {
  	console.log(bizInfo);
  	return this.http.post<any>(endPoint + '/api/biz',JSON.stringify(bizInfo),httpOptions).pipe(
  	tap((bizInfo)=>console.log(`added biz w/ id=${bizInfo.id}`)),
  	catchError(this.handleError<any>('Add Business Information'))
  	);
  };

  //Display Single Biz information
  getBizById(bizId):Observable<any> {
  	console.log(bizId);
  	return this.http.get<any>(endPoint+'/api/biz/:'+bizId,httpOptions).pipe(
  	tap((bizId)=>console.log(`gotten biz info w/ id=${bizId.id}`)),
  	catchError(this.handleError<any>('Gotten a single Business Information'))
  	);
  };

  //Update Biz Information
  updateBiz(bizInfo):Observable<any> {
  	console.log(bizInfo);
  	return this.http.patch<any>(endPoint+'/api/biz'+bizInfo,httpOptions).pipe(
  	tap((bizInfo)=>console.log(`Update biz Info`)),
  	catchError(this.handleError<any>('Update Biz Info Profile'))
  	);
  };

  //Upload files
  uploadFiles(data,userId) {
    console.log(data);
    console.log("+++++++++++++++++++++++")
    console.log(userId);
       let uploadURL = endPoint;

   return this.http.post<any>(uploadURL+'/api/biz/'+userId, data, {
      reportProgress: true,
      observe: 'events'
    }).pipe(map((event) => {

      switch (event.type) {

        case HttpEventType.UploadProgress:
          const progress = Math.round(100 * event.loaded / event.total);
          return { status: 'progress', message: progress };

        case HttpEventType.Response:
          return event.body;
        default:
          return `Unhandled event: ${event.type}`;
      }
    })
    );

  }

  //Handle Errors
  private handleError<T>(operation = 'operation',result?:T) {
  	return (error:any):Observable<T> => {
  		//TODO: send the error to remote logging infrastructure
  		console.error(error);//Log to console instead

  		//TODO: better job at transforming error for user consumption
  		console.log(`${operation} failed:${error.message}`);

  		//Let the app keep running by returning an empty result
  		return of(result as T);
  	};
  }

}
