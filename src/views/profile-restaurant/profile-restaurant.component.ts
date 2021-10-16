import { RestaurantService } from 'src/services/restaurant.service';
import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/models/photo';
import { PhotoUploadService } from 'src/services/photo.service';

@Component({
  selector: 'app-profile-restaurant',
  templateUrl: './profile-restaurant.component.html',
  styleUrls: ['./profile-restaurant.component.css']
})
export class ProfileRestaurantComponent implements OnInit {

  constructor(  private photoUploadService: PhotoUploadService,
                private restaurantService: RestaurantService) { }

  photoToUpload: Photo = new Photo;
  url = " ";
  isShown: boolean;


  ngOnInit(): void {
    this.isShown = false;
  }
  toggleShow() {
    this.isShown = !this.isShown;
  }

  onSelectFile(e){
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event: any)=>{
        this.url=event.target.result;
      }
    }
  }
  handleFileInput(event: Event) {

    const element = event.currentTarget as HTMLInputElement;
    let files :FileList | null = element.files;
    this.photoToUpload.Path = files?.item(0)?.name as string;
    this.photoToUpload.PhotoContent = files?.item(0) as File;
    this.restaurantService.formDataRestaurant.photos.push(this.photoToUpload)
    debugger
  }
  uploadFileToActivity() {
    this.photoUploadService.postFile(this.photoToUpload);
  }
}
