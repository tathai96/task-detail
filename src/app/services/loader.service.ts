import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  isLoading = false;
  loading: HTMLIonLoadingElement;
  counter = 0;


  constructor(private loadingController: LoadingController) {}

  async present() {
    this.isLoading = true;
    return await this.loadingController.create({
      message: 'Please wait...'
    }).then((res) => {
      res.present().then(()=> {
        if(!this.isLoading) {
          res.dismiss().then(() => {
            console.log('aborted');
          });
        }
      });
    });
  }

  async dismiss() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => {
      console.log('dismissed');
    });
  }
}
