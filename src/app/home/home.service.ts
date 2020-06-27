import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable()

export class CropService {
    baseURL = environment.baseURL;

    constructor(private http: HttpClient) { }

    get(endPoint: string): Observable<JSON> {
        return this.http
            .get(this.baseURL + endPoint)
            .pipe(map(responseData => {
                return JSON.parse(JSON.stringify(responseData));
            }));
    }


    post(endPoint: string, input): Observable<JSON> {
        return this.http
        .get(this.baseURL + endPoint)
        .pipe(map(responseData => {
            return JSON.parse(JSON.stringify(responseData));
        }));
    }
}
