import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

  onCancel() {
    alert('Formulario por template: Cancelado');
  }
}
