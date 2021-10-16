import { Component, OnInit } from '@angular/core';
import { PhotoUploadService } from 'src/services/photo.service';


@Component({
	selector: 'app-photo-upload',
	templateUrl: './photoUpload.component.html'
})
export class PhotoUploadComponent implements OnInit {

	// Variable to store shortLink from api response
	shortLink: string = "";
	loading: boolean = false; // Flag variable
	file: File = {} as File; // Variable to store file

	// Inject service
	constructor(private photoUploadService: PhotoUploadService) { }

	ngOnInit(): void {
	}

	// On file Select
	onChange(event: any) {
		this.file = event.target.files[0];
	}

	// OnClick of button Upload

}
