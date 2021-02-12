import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';


import { Alumno } from './model/alumno';

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
  displayedColumns: string[] = ['codigo', 'nombre', 'curso', 'edad', 'opciones'];
  dataSource = listaAlumnos;
  model = new Alumno(null,'','',null);

  // ViewChild => Manipulacion de elementos html
  @ViewChild(MatTable) table: MatTable<any>;

  crearAlumno(){

    let crearEditar: boolean; // true crea || false editar

    for (var i = 0; i < listaAlumnos.length; i++) {
      if (listaAlumnos[i].codigo === this.model.codigo) {
        // editar registro
        crearEditar = false;
        break;
      }
      else{
        // crear nuevo registro
        crearEditar = true;
      }
    }

    if(crearEditar === true){
      listaAlumnos.push(this.model)
    }

    this.table.renderRows();
  }

  editarAlumno(codigo :number){
    for (var i = 0; i < listaAlumnos.length; i++) {
      if (listaAlumnos[i].codigo === codigo) {
        this.model = listaAlumnos[i];
        break;
      }
    }
  }

  eliminarAlumno(codigo :number){
    for (var i = 0; i < listaAlumnos.length; i++) {
      if (listaAlumnos[i].codigo === codigo) {
        this.dataSource.splice(i, 1);
        break;
      }
    }
    this.dataSource = listaAlumnos;
    this.table.renderRows();
  }
}
