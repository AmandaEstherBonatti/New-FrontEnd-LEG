import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from '../models/photo';
@Injectable({
	providedIn: 'root'
})
export class PhotoUploadService {

	// API url
  baseApiUrl = "https://localhost:44308/api/Photos"

	constructor(private http: HttpClient) { }

	postFile(photoToUpload: Photo): void {

		const httpOptions = {
			headers: new HttpHeaders({'Content-Type': 'application/json'})
		  }
		  debugger;
		 this.http.post(this.baseApiUrl, photoToUpload, httpOptions).subscribe(data => {
			console.log(data)
		});
  }

}
