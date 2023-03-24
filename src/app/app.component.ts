import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  datos: personas[] = [
    {
      id: 1,
      nombre: 'Ivan Alejandro',
      apellido: 'Lopez Martinez',
      sexo: 'Hombre',
    },
    { id: 2, nombre: 'Jose Armando', apellido: 'Perez Lugo', sexo: 'Hombre' },
    {
      id: 3,
      nombre: 'Andrea Fernanda',
      apellido: 'Perez Estrada',
      sexo: 'Mujer',
    },
    {
      id: 4,
      nombre: 'Manuel Alejandro',
      apellido: 'Dlorez Ramirez',
      sexo: 'Hombre',
    },
    {
      id: 5,
      nombre: 'Luis Alejandro',
      apellido: 'Lopez Muñoz',
      sexo: 'Hombre',
    },
  ];
}

interface personas {
  id: number;
  nombre: string;
  apellido: string;
  sexo: string;
}
