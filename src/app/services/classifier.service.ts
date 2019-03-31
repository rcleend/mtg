import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Storage } from '@ionic/storage';

import * as ml5 from 'ml5';

@Injectable({
  providedIn: 'root'
})
export class ClassifierService {
  featureExtractor: any;
  knnClassifier: any;
  callBack: Function;

  constructor(private apiService: ApiService, private storage: Storage) {
    this.knnClassifier = ml5.KNNClassifier();
    this.featureExtractor = ml5.featureExtractor('MobileNet', this.modelLoaded());
  }

  modelLoaded() {
    this.storage.get('classifier').then((classifier) => {
      if (classifier === null) {
        this.apiService.getData('classifier').subscribe((apiData: any) => {
          this.storage.set('classifier', JSON.parse(apiData)).then((newClassifier) => {
            this.knnClassifier.load(newClassifier);
          });
        });
      } else {
        this.knnClassifier.load(classifier);
      }
    });
  }

  updateModel() {

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
