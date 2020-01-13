import { Component, OnInit } from '@angular/core';
import { MarsRoverService } from 'src/app/services/mars-rover.service';
import { Camera, Rover, PhotoItem } from 'src/app/models/rover';
import { share, map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  sol: number = 0;
  solTimeout: any;
  roverManifesto: Observable<Rover>;
  launchedValue: string = '2011-11-26';
  landedValue: string = '2012-08-06'
  maxSol: number = 2540;
  cameraValues: Camera[];
  photos: PhotoItem[] = [];
  photoSubscriptions: Subscription[] = [];
  loading = false;

  constructor(
    private marsRoverService: MarsRoverService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.roverManifesto = this.marsRoverService.getRoverManifest()
      .pipe(map(rover => {
        this.loading = false;
        this.launchedValue = rover.launch_date;
        this.landedValue = rover.landing_date;
        this.maxSol = rover.max_sol;
        return rover;
      }), share());

    this.photoSubscriptions.push(this.marsRoverService.getCameras()
      .subscribe(cameras => {
        this.loading = false;
        this.cameraValues = cameras;
      }));
  }

  getPhotosBySol(sol) {
    this.sol = sol;
    this.cameraValues.forEach(camera => camera.checked = false);
    this.photoSubscriptions.forEach(subscription => subscription.unsubscribe);
    this.photos = [];
  }

  getAllPhotosForSol() {
    this.loading = true;
    this.photos = [];
    this.photoSubscriptions.push(this.marsRoverService.getPhotosBySol(this.sol)
      .subscribe(photos => {
        this.loading = false;
        this.cameraValues.forEach(camera => {
          this.photos.push({ camera: camera, data: [] })
        })
        photos.forEach(photo => {
          this.photos.find(myPhoto => myPhoto.camera.name === photo.camera.name).data.push(photo);
        })
        this.orderPhotos();
      }));
  }

  clearAllCameras() {
    this.photoSubscriptions.forEach(subscription => subscription.unsubscribe);
    this.photos = [];
  }

  filterPhotosByCamera(camera) {
    this.loading = true
    if (camera.checked) {
      this.photoSubscriptions.push(this.marsRoverService.getPhotosBySolAndCamera(this.sol, camera.name)
        .subscribe(photos => {
          this.loading = false;
          this.photos.push({ camera, data: photos })
          this.orderPhotos();
        }));
    } else {
      if (!this.photos.find(photo => photo.camera.name === camera.name)) {
        this.photoSubscriptions.forEach(subscription => subscription.unsubscribe);
      }
      this.photos = this.photos.filter(photo => photo.camera.name !== camera.name);
      this.loading = false;
      this.orderPhotos();
    }
  }

  orderPhotos() {
    this.photos.sort((a, b) => b.data.length - a.data.length);
  }
}
