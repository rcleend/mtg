import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { SocketService } from './socket.service';
import { Storage } from '@ionic/storage';

import * as ml5 from 'ml5';

@Injectable({
  providedIn: 'root'
})
export class ClassifierService {
  featureExtractor: any;
  knnClassifier: any;
  callBack: Function;

  constructor(private apiService: ApiService, private socketService: SocketService, private storage: Storage) {
    this.knnClassifier = ml5.KNNClassifier();
    this.featureExtractor = ml5.featureExtractor('MobileNet', this.modelLoaded());
    this.socketService.socket.on('update', this.updateModel.bind(this));
  }

  updateModel(data) {
    this.storage.set('classifier', JSON.parse(data)).then((classifierData) => {
      this.knnClassifier.load(classifierData);
    });
  }

  modelLoaded() {
    this.storage.get('classifier').then((classifier) => {
      if (classifier === null) {
        this.apiService.getData('classifier').subscribe((data: any) => {
          this.updateModel(data);
        });
      } else {
        this.knnClassifier.load(classifier);
        this.socketService.checkForClassifierUpdate(classifier.version);
      }
    });
  }

  async classifyImage(image: HTMLImageElement, callBack: Function) {
    this.callBack = callBack;
    const features = await this.featureExtractor.infer(image);
    this.knnClassifier.classify(features, this.addResultToCallBack.bind(this));
  }

  addResultToCallBack(err, result) {
    if (err) {
      console.error(err);
    }
    this.callBack(result.label);
  }
}
