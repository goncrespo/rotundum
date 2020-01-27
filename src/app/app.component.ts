import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firstProgram';
  
  public selectedValue: any;
  public firstInput: any;
  public showFirstModal: boolean = false;
  public secondInput: any;

  letsCheckFirstImput(){
    let vm = this;

    if(vm.firstInput && vm.secondInput){
      let bodyForClient = {
        password: vm.secondInput,
        userName: vm.firstInput
      }
      sessionStorage.setItem('bodyForClient', JSON.stringify(bodyForClient));
    }
  }
}
