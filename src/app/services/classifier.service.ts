import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import * as ml5 from 'ml5';

@Injectable({
  providedIn: 'root'
})
export class ClassifierService {
  image: HTMLImageElement;
  featureExtractor: any;
  features: any;
  imageLabel: string;
  customLabelData: string;
  knnClassifier: any;

  constructor(private apiService: ApiService) {
    this.knnClassifier = ml5.KNNClassifier();
    this.featureExtractor = ml5.featureExtractor('MobileNet', this.modelLoaded());
  }

  modelLoaded() {
    console.log('model loaded');
    this.apiService.getData('classifier').subscribe((data: any) => {
      this.knnClassifier.load(JSON.parse(data), this.customKnnLoaded);
    });
  }

  customKnnLoaded() {
    console.log('Knn loaded');
  }

  async classifyImage(image: HTMLImageElement) {
    this.image = image;
    console.log(image);
    console.log('classifying image');
    const features = await this.featureExtractor.infer(this.image)
    this.knnClassifier.classify(features, this.setImageLabel.bind(this));

    // console.log('returning image label: ' + this.imageLabel);
    return this.imageLabel
    // return this.imageLabel;
  }

  async extractFeatures() {
  }

  async setImageLabel(err, result) {
    console.log(result);
    if (err) {
      console.error(err);
    }
    console.log(result.label);

    this.imageLabel = result.label;
    this.apiService.getData(`cards?search=${result.label}`)
  }
}
