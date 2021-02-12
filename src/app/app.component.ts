// Imports de librerias
import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

// Imports de clase
import { Alumno } from './model/alumno';


// Arreglo principal de la informacion
let listaAlumnos: Alumno[] = [
  {codigo: 1, nombre: 'Carlos', curso: 'PA - I', edad: 20},
  {codigo: 2, nombre: 'Oscar', curso: 'PA - I', edad: 20},
  {codigo: 3, nombre: 'Guillermo', curso: 'PA - I', edad: 20},
  {codigo: 4, nombre: 'Roy', curso: 'PA - I', edad: 20},
 ];

 // Configuración del componente
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Codigo funcional del componenete
export class AppComponent {

  //------------------------------------------- Variables de la tabla - Inicio -------------------------------------------

  // Variable de columnas
  displayedColumns: string[] = ['codigo', 'nombre', 'curso', 'edad', 'opciones'];
  // Variable del origen de datos
  dataSource = listaAlumnos;
  // ViewChild de la tabla => sirve para manipular de elementos html( la tabla en este caso)
  @ViewChild(MatTable) table: MatTable<any>;

  //------------------------------------------- Variables de la tabla - Fin -------------------------------------------

  // Variable Bind (blindaje) del formulario
  model = new Alumno(null,'','',null);

  // Funcion de creacion de Alumno
  crearAlumno(){

    // Busqueda del codigo en el origen de datos
    for (var i = 0; i < listaAlumnos.length; i++) {
      if (listaAlumnos[i].codigo === this.model.codigo) {
        // No crear porque ya existe
        break;
      }
      else{
        // Crear nuevo registro
        listaAlumnos.push(this.model)
      }
    }

    // Actualizar la tabla con metodo de MatTable - Material
    this.table.renderRows();
  }

  // Funcion de edicion de alumno
  editarAlumno(codigo :number){

    // Buscar alumno a editar
    for (var i = 0; i < listaAlumnos.length; i++) {
      if (listaAlumnos[i].codigo === codigo) {
        // Cargar modelo de alumno a editar en el formulario
        this.model = listaAlumnos[i];
        break;
      }
    }
  }

  // Funcion de eliminación de alumno
  eliminarAlumno(codigo :number){
    // Buscar alumno a eliminar
    for (var i = 0; i < listaAlumnos.length; i++) {
      if (listaAlumnos[i].codigo === codigo) {

        //  Eliminacion de alumno
        this.dataSource.splice(i, 1);
        break;
      }
    }
    // Actualizacion de origen de datos
    this.dataSource = listaAlumnos;

    // Actualizar la tabla con metodo de MatTable - Material
    this.table.renderRows();
  }
}
