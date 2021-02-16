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

  // Metodo de creacion de Alumno
  crearAlumno(){

    // Variables del Metodo
    let flagCrear: Boolean; // 0 = no crear | 1 = crear
    let codigoAEditar: number;

    // Busqueda del codigo en el origen de datos
    for (var i = 0; i < listaAlumnos.length; i++) {
      if (listaAlumnos[i].codigo == this.model.codigo) {

        // No crear porque ya existe
        flagCrear = false;
        codigoAEditar = i;
        break;
      }
      else{

        // Crear nuevo registro
        flagCrear = true;
      }
    }

    // Se agrega modelo a un objeto de alumnos
    let alumno :Alumno;
    alumno = {
      codigo: this.model.codigo,
      nombre: this.model.nombre,
      curso: this.model.curso,
      edad: this.model.edad
    };

    if(flagCrear === true) {

      // Se agrega objeto a la lista
      listaAlumnos.push(alumno)
    }
    else{
      // Se crear el objeto con los datos nuevos y
      // Se inserta en la posicion original de la lista
      listaAlumnos[codigoAEditar] = alumno;
    }

    // Actualizar la tabla con metodo de MatTable - Material
    this.table.renderRows();

    //Limpia modelo
    this.model = new Alumno(null,'','',null);
  }

  // Funcion de edicion de alumno
  editarAlumno(codigo :number){

    // Buscar alumno a editar
    for (var i = 0; i < listaAlumnos.length; i++) {
      if (listaAlumnos[i].codigo == codigo) {

        // Cargar modelo de alumno a editar en el formulario
        let alumno :Alumno;
        alumno = {
          codigo: listaAlumnos[i].codigo,
          nombre: listaAlumnos[i].nombre,
          curso: listaAlumnos[i].curso,
          edad: listaAlumnos[i].edad
        };

        this.model = alumno;
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
