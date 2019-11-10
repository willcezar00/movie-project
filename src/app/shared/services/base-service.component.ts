import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

export const API_URL = environment.apiUrl;

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-type': 'application/json'
//   })
// };

@Injectable()
export abstract class BaseService {

    url: string;

    constructor(protected http: HttpClient, urlResource: string) {
        this.url = [API_URL, urlResource].join('/');
    }

    protected handleError(error: HttpErrorResponse): Observable<any> {
        return;
    }

    protected extractData(res: Response | any) {
        try {
            return <any>res.json();
        }
        catch (e) {
            return {};
        }
    }
}