import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class RestRequest {
  APIEndpoint = '';
  constructor(private http: HttpClient) {
    this.APIEndpoint = environment.APIEndpoint;
  }
  headers: HttpHeaders | undefined;
  addAuthorization() {
    this.headers = new HttpHeaders({
      // 'Content-Type':  'application/json',
      // 'Accept':  'application/json',
      'x-auth-token': 'Bearer ' + localStorage.getItem('currentSession'),
    });
    // this.headers.append('Authorization', 'Basic ' + localStorage.getItem('currentSession'));
    return this;
  }

  get(url: string, query?: any) {
    return this.http.get(this.APIEndpoint + '/' + url, {
      headers: this.headers,
      params: query,
    });
  }

  download(url: string) {
    return this.http.get(this.APIEndpoint + '/' + url, {
      headers: this.headers,
      responseType: 'blob',
    });
  }

  post(url: string, data: any) {
    return this.http.post(this.APIEndpoint + '/' + url, data, {
      headers: this.headers,
    });
  }

  put(url: string, data: any) {
    return this.http.put(this.APIEndpoint + '/' + url, data, {
      headers: this.headers,
    });
  }

  delete(url: string) {
    return this.http.delete(this.APIEndpoint + '/' + url, {
      headers: this.headers,
    });
  }
}
