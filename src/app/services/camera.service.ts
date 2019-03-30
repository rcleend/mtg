import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Injectable({
  providedIn: 'root'
})
export class CameraService {
  takenPicture: string;

  cameraOptions: CameraOptions = {
    quality: 70,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    targetWidth: 400,
    targetHeight: 400,
  }
  constructor(private camera: Camera) { }

  async getPicture() {

    await this.camera.getPicture(this.cameraOptions).then((imageData) => {
      this.takenPicture = 'data:image/jpeg;base64,' + imageData;
      console.log('picture taken');
    });

    console.log('returning image');
    return this.takenPicture
  }
}
