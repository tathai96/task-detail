/* eslint-disable quote-props */
import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { ReqRes } from '../model/ReqRes';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.page.html',
  styleUrls: ['./list-view.page.scss'],
})
export class ListViewPage implements OnInit {
  loader = false;
  userData: ReqRes;

  constructor(private userService: UsersService, private alertController: AlertController) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(res => {
      this.userData = res as ReqRes;
      console.log(this.userData.data);
      this.presentAlert();
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'App Alert',
      message: 'Reqres.com delete and create request API not working. So manually deleted and added to array',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async openModal() {
    console.log('modal open');
    const addAlert = await this.alertController.create({
      'header': 'Add User',
      'inputs': [
        {
          name: 'first_name',
          type: 'text',
          placeholder: 'Enter First Name',
        },
        {
          name: 'last_name',
          type: 'text',
          placeholder: 'Enter Last Name'
        },
        {
          name: 'email',
          type: 'email',
          placeholder: 'Enter Email',
        },
      ],
      buttons: [
        {
          text: 'Discard',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Add',
          handler: (e) => {
            e.avatar = 'https://picsum.photos/128/123';
            e.id = this.userData.data.length + 1;
            // e.map(i => {
            //   i.avatar = 'https://picsum.photos/128/123';
            //   i.id = this.userData.data.length + 1;
            // });
            console.log(e);
            this.userData.data.push(e);
          }
        }
      ],
    });

    await addAlert.present();
  }

  swipeToDelete(id: number) {
    // console.log(typeof(this.userData.data));
    this.userData.data= this.userData.data.filter(s => s.id !== id);
    // console.log(typeof(x));
    // console.log(x);
    // this.userService.deleteUsers(id).subscribe(res => {
    //   console.log(this.userData.data);
    // });
  }

}
