import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { SocketService } from './socket.service';
import { PushService } from './push.service';
import { Storage } from '@ionic/storage';

import * as ml5 from 'ml5';

@Injectable({
  providedIn: 'root'
})
export class ClassifierService {
  featureExtractor: any;
  knnClassifier: any;
  callBack: Function;

  constructor(private apiService: ApiService, private socketService: SocketService, private pushService: PushService, private storage: Storage) {
    this.knnClassifier = ml5.KNNClassifier();
    this.featureExtractor = ml5.featureExtractor('MobileNet', this.modelLoaded());
    this.socketService.socket.on('update', this.updateModel.bind(this));
  }

  updateModel(data) {
    console.log('updating model');
    this.storage.set('classifier', JSON.parse(data)).then((classifierData) => {
      this.knnClassifier.load(classifierData);
      this.pushService.sendNotification('Card scan results updated!');
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
    console.log('result label:' + result.label);
    this.callBack(result.label);
  }
}
