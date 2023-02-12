import { Component } from '@angular/core';
import { ClientService } from '../../service/client.service';
import { Cliente } from '../../models/client';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-client-lista',
    templateUrl: './client-lista.component.html'
})

export class ClientListaComponent{

    listClient: Cliente[] = [];

    constructor(private _clientService: ClientService, private router: Router, private toastr: ToastrService){}

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.obtenerProductos();
    }
    

    obtenerProductos(){
        this._clientService.getClient().subscribe(
            data => {
                console.log(data);
                this.listClient = data;
            }, error => {
                console.log(error);
            }
        )
    }
//     openEditarArticulo() {
//         // this.seleccionado = data;
//         // this.router.navigate(['/catalogo/articulos-agregar', { articuloId: this.seleccionado?.articuloId }]);
//         this.router.navigate(['/edit']);
//     }
    deletClient(id: any){
        this._clientService.deletClient(id).subscribe(data =>{
            this.toastr.error('El cliente fue eliminado con exito', 'Cielnte eliminado');
            this.obtenerProductos();
        }, error => {
            console.log(error);
        }
            
        )
    }
    
    agregar(){
        this.router.navigate(['/add']);
    }

    editar(id: any){
       // this.seleccionado = editCliente;
        this.router.navigate(['/edit', id])
        // this.router.navigate(['/catalogo/articulos-agregar', { articuloId: this.seleccionado?.articuloId }]);
    }

}