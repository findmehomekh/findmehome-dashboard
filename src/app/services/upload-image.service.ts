import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {

  constructor(private http: HttpClient, private injector: Injector) { }

  uploadImage(id: string, files: File[]){
    const url = `http://139.59.238.27/api/properties/${id}/upload`;
    const access_token = this.injector.get(AuthService).getToken();
    const httpHeader = new HttpHeaders({
      'Authorization': `${access_token}`
    });
    const fData = new FormData();
    // files.forEach((file: File) => {
    //   fData.append('files', file, file.name);
    // });
    for(let file of files){
      fData.append('files', file, file.name);
    }
    return this.http.post(url, fData, {headers: httpHeader});
  }

  getImage(name: string){
    const imgUrl = `http://139.59.238.27:3000/images/${name}`
    const access_token = this.injector.get(AuthService).getToken();
    const httpHeader = new HttpHeaders({
      'Authorization': `${access_token}`
    });
    return this.http.get(imgUrl, {headers: httpHeader});
  }
}
