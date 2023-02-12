export class Cliente {
    id?: number;
    name: string;
    phoneNumber: string;
    email: string;
    regDate?: Date;
    
    constructor(id: number, nombre: string, phoneNumber: string, email: string, fecha?: Date){
        this.id = id;
        this.name = nombre;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.regDate = fecha;
    }

}