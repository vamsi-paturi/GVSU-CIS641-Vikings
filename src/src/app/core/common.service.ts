import { Injectable } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';


@Injectable()
export class CommonService {
constructor( public toastr: ToastrManager) { }


toast(msg: String, type: String) {
    if (type === 'Success') {
        this.toastr.successToastr(msg.toString(), 'Success!', {
            showCloseButton: true,
            toastTimeout: 6000
        });
    } else if (type === 'Error') {
        this.toastr.errorToastr(msg.toString(), 'Error!', {
            showCloseButton: true,
            toastTimeout: 6000
        });
    }
}
}