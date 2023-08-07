import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
  
})
export class TemplateComponent {
  onSubmit(form: any) {
    if (form.valid) {
      alert('Formulario por template: Datos guardados correctamente');
    }
  }

  @ViewChild('formularioTemplate') formularioTemplate!: NgForm;

  onCancel() {
    this.formularioTemplate.reset();
    alert('Formulario por template: Cancelado');
  }
}
