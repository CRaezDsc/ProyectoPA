import { Component } from '@angular/core';
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

  displayedColumns: string[] = ['codigo', 'nombre', 'curso', 'edad'];
  dataSource = listaAlumnos;

  model = new Alumno(0,'','',0);


  crearAlumno(){

    let codigo :number = this.model.codigo;
    let nombre :String = this.model.nombre;
    let curso :String = this.model.curso;
    let edad :number = this.model.edad;
    alert("Codigo : " + codigo + "\n" +
          "Nombre : " + nombre + "\n" +
          "Curso : " + curso + "\n" +
          "Edad : " + edad + "\n"
    );
  }

}
