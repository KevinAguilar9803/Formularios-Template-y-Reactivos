import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-reactivo',
  templateUrl: './reactivo.component.html',
  styleUrls: ['./reactivo.component.css']
})
export class ReactivoComponent implements OnInit {
  formularioReactivo: FormGroup= new FormGroup({});
  constructor(private formBuilder: FormBuilder, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.formularioReactivo = this.formBuilder.group({
      cedula: ['', Validators.required],
      nombre: ['', Validators.required],
      fecha: ['', Validators.required],
      ciudad: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.formularioReactivo.valid) {
      this.mostrarSnackBar('Formulario reactivo: Datos guardados correctamente');
    }
  }

  onCancel() {
    this.formularioReactivo.reset();
    this.mostrarSnackBar('Formulario reactivo: Cancelado');
  }

  private mostrarSnackBar(mensaje: string) {
    this.snackBar.open(mensaje, 'Cerrar', {
      duration: 3000, // Duración del mensaje en milisegundos (3 segundos en este caso)
    });
  }
}
