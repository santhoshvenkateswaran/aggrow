import { CropService } from './home.service';
import { IMAGES } from './home.model';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: any;

  rainfall: number;
  temperature: number;
  ph: number;
  crops: any;

  images: any;

  isLoading: boolean;
  isFetched: boolean;
  isSet: boolean;

  isError: boolean;
  errorMsg: any;

  // cropList = [
  //   'Urad', 'Turmeric', 'Tapioca', 'Sweet potato', 'Sunflower', 'Sugarcane', 'Sesamum', 'Rice', 'Ragi', 'Onion',
  //   'Moong(Green Gram)', 'Maize', 'Jowar', 'Horse-gram', 'Groundnut', 'Gram', 'Cotton', 'Coriander', 'Coconut',
  //   'Chillies', 'Castor', 'Cashewnut', 'Banana', 'Bajra', 'Arecanut',
  // ];

  constructor(private http: HttpClient, private cropService: CropService) {
    this.images = IMAGES;
    this.rainfall = null;
    this.temperature = null;
    this.ph = null;
    this.errorMsg = {
      rainfall: '',
      temperature: '',
      ph: '',
      api: ''
    };
    this.isError = false;
  }

  // pathTrainAPI = 'http://127.0.0.1:5000/api/train';
  // pathPredictAPI = 'http://127.0.0.1:5000/api/predict';

  ngOnInit(): void {
    this.isLoading = true;
    this.isFetched = true;
    this.cropService.get('train')
      .subscribe(data => {
        // console.log(data);
        this.isLoading = false;
        this.isError = false;
        this.errorMsg.temperature = '';
      }, error => {
        console.log(error);
        this.isError = true;
        this.errorMsg.temperature = 'API Failure. Please try again.';
      });
  }

  onFocus(field: string): void {
    if (this.isError) {
      this[field] = null;
      this.errorMsg[field] = '';
      this.isSet = false;
      if (this.errorMsg.rainfall === '' && this.errorMsg.temperature === '' && this.errorMsg.ph === '') {
        this.isError = false;
      }
    }
  }

  validateInput(): boolean {

    // Validating Rainfall
    if (this.rainfall === null) {
      this.errorMsg.rainfall = 'Please enter input for Rainfall to predict.';
    } else if (this.rainfall < 200 || this.rainfall > 2000) {
      this.errorMsg.rainfall = 'Input for Rainfall is out of range. Enter a valid input.';
    } else {
      this.errorMsg.rainfall = '';
    }

    // Validating temperature
    if (this.temperature === null) {
      this.errorMsg.temperature = 'Please enter input for Temperature to predict.';
    } else if (this.temperature < 10 || this.temperature > 40 || this.temperature === null) {
      this.errorMsg.temperature = 'Input for Temperature is out of range. Enter a valid input.';
    } else {
      this.errorMsg.temperature = '';
    }

    // Validating pH
    if (this.ph === null) {
      this.errorMsg.ph = 'Please enter input for pH to predict.';
    } else if (this.ph < 5 || this.ph > 7.5 || this.ph === null) {
      this.errorMsg.ph = 'Input for pH is out of range. Enter a valid input.';
    } else {
      this.errorMsg.ph = '';
    }

    this.isError = !(this.errorMsg.rainfall === '' && this.errorMsg.temperature === '' && this.errorMsg.ph === '');
    return (!this.isError);
  }

  onPredict(): void {
    if (this.validateInput()) {
      this.cropService.post('predict', { rainfall: this.rainfall, temperature: this.temperature, pH: this.ph })
        .subscribe(data => {
          this.isFetched = false;
          this.crops = data;
          setTimeout(() => {
            this.isFetched = true;
          }, 700);
          this.isSet = true;
        }, error => {
          this.isError = true;
          this.errorMsg.api = 'API Failure. Please try again.';
          console.log(error);
        });
    } else {
      this.crops = {};
    }
  }

  onReset(): void {
    this.rainfall = null;
    this.temperature = null;
    this.ph = null;
    this.isSet = false;
    this.isError = false;
    this.errorMsg = { rainfall: '', temperature: '', ph: '', api: '' };
  }

}
