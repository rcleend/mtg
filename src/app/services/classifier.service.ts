import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import * as ml5 from 'ml5';

@Injectable({
  providedIn: 'root'
})
export class ClassifierService {
  featureExtractor: any;
  knnClassifier: any;
  callBack: Function;

  constructor(private apiService: ApiService) {
    this.knnClassifier = ml5.KNNClassifier();
    this.featureExtractor = ml5.featureExtractor('MobileNet', this.modelLoaded());
  }

  modelLoaded() {
    this.apiService.getData('classifier').subscribe((data: any) => {
      this.knnClassifier.load(JSON.parse(data));
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
