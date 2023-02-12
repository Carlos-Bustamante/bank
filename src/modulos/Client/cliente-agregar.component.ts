import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from '../../models/client';
import { Router } from '@angular/router';
import { ClientService } from 'src/service/client.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-client-agregar',
    templateUrl: './cliente-agregar.component.html'
})

export class ClientAgregarComponent{
    clientForm : FormGroup;
    
    constructor(private fb: FormBuilder, private toastr: ToastrService, private router: Router, private _clienteService : ClientService){
        this.clientForm = this.fb.group({
        name: ['', Validators.required],
        phoneNumber: ['', Validators.required],
        email: ['', Validators.required]
        })
    }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        
    }

    addClient(){
        console.log(this.clientForm);

        const CLIENT: Cliente = {
            name : this.clientForm.get('name')?.value,
            phoneNumber : this.clientForm.get('phoneNumber')?.value,
            email : this.clientForm.get('email')?.value
        }

        console.log(CLIENT);
    
        // this.router.navigate(['/']);
        this._clienteService.postClient(CLIENT).subscribe(
            data => {
            this.toastr.success('El cliente se añadio correctamente', 'Cliente añadido');
            this.router.navigate(['/']);
        }, error =>{
            console.error(error);
        })
    }

}