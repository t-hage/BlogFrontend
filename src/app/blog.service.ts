import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class BlogService {

  constructor(private http: HttpClient) { }

  private url = "http://localhost:8080/api/";
  private resource = "blogpost/"

  getBlog(blogId: String) {
    const headers = new HttpHeaders({'Accept':'text/html; charset=utf-8'});
    return this.http.get(this.url + this.resource + blogId, {headers: headers, responseType: 'text' });
  }

}
