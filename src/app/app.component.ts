import { Component } from '@angular/core';

export interface Alumno {
  codigo: number;
  nombre: string;
  curso: string;
  edad: number;
}

let listaAlumnos: Alumno[] = [
  {codigo: 1, nombre: 'Carlos', curso: 'PA - I', edad: 20},
  {codigo: 2, nombre: 'Oscar', curso: 'PA - I', edad: 20},
  {codigo: 3, nombre: 'Guillermo', curso: 'PA - I', edad: 20},
  {codigo: 4, nombre: 'Roy', curso: 'PA - I', edad: 20},
 ];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectoPa';

  displayedColumns: string[] = ['codigo', 'nombre', 'curso', 'edad'];
  dataSource = listaAlumnos;
}
