import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Rover, Camera } from '../models/rover';
import { PhotoItem } from '../models/photo-item';

@Injectable({
  providedIn: 'root'
})
export class MarsRoverService {
  demoKey: string = 'AOYQ8FxaeKtE6N5GKVIAgnrkIq3yv91rcxsqim5A';
  baseUrl: string = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity';
  manifestUrl: string = 'https://api.nasa.gov/mars-photos/api/v1/manifests/curiosity'

  constructor(
    private http: HttpClient
  ) { }

  getRoverManifest(): Observable<Rover> {
    const url = `${this.manifestUrl}/?api_key=${this.demoKey}`;
    return this.http.get<{ photo_manifest: Rover }>(url).pipe(map(response => response.photo_manifest));
  }

  getPhotosBySol(sol): Observable<PhotoItem[]> {
    const url = `${this.baseUrl}/photos?sol=${sol}&api_key=${this.demoKey}`
    return this.http.get<{ photos: PhotoItem[] }>(url).pipe(map(response => response.photos));
  }

  getPhotosBySolAndCamera(sol, camera): Observable<PhotoItem[]> {
    const url = `${this.baseUrl}/photos?sol=${sol}&camera=${camera}&api_key=${this.demoKey}`
    return this.http.get<{ photos: PhotoItem[] }>(url).pipe(map(response => response.photos));
  }

  getCameras(): Observable<Camera[]> {
    const url = `${this.baseUrl}/?api_key=${this.demoKey}`
    return this.http.get<{ rover: Rover }>(url).pipe(map(response => {
      response.rover && response.rover.cameras.forEach(camera => camera['checked'] = false);
      return response.rover.cameras;
    }));
  }
}
