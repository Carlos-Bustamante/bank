import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from '../../models/client';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/service/client.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-client-agregar',
    templateUrl: './cliente-agregar.component.html'
})

export class ClientAgregarComponent{
    clientForm : FormGroup;

    titulo = 'Cliente';
    idClient: string;
    
    constructor(private fb: FormBuilder, private toastr: ToastrService, private router: Router, private activatedRouter: ActivatedRoute , private _clienteService : ClientService){
        this.clientForm = this.fb.group({
        name: ['', Validators.required],
        phoneNumber: ['', Validators.required],
        email: ['', Validators.required]
        });

        this. idClient = this.activatedRouter.snapshot.paramMap.get('id')!;
    }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.editarClient();
        
        // console.log(this.clientForm);
        // this._clienteService.getId(this.idClient).subscribe(data =>{
        //     console.log(data);
        // });
    }

    addClient(){
        console.log(this.clientForm);

        const CLIENT: Cliente = {
            name : this.clientForm.get('name')?.value,
            phoneNumber : this.clientForm.get('phoneNumber')?.value,
            email : this.clientForm.get('email')?.value
        }
        console.log(CLIENT.id);
        if(this.idClient !== null){ // editar client
            CLIENT.id = parseInt(this.idClient);
            console.log(CLIENT.id);
            console.log(this.idClient);
            this._clienteService.putClient( CLIENT, this.idClient).subscribe(data => {                
            this.toastr.info('El cliente se actualizo correctamente', 'Cliente actualizado');
            this.router.navigate(['/']);
            }

            )

        }else{ // Add client

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

    editarClient(){
        if(this.idClient !== null){
            this.titulo = 'Editar Cliente';
            this._clienteService.getId(this.idClient).subscribe(data => {
                this.clientForm.setValue({
                    name: data.name,
                    phoneNumber: data.phoneNumber,
                    email: data.email
                })
            }

            )
        }
    }

}