export class Cliente {
    id?: number;
    name: string;
    phoneNumber: string;
    email: string;
    regDate?: Date;
    
    constructor(nombre: string, phoneNumber: string, email: string, fecha?: Date){
        this.name = nombre;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.regDate = fecha;
    }

}