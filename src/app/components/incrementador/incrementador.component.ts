import { Component, OnInit, Input, Output,EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  constructor() { }

  @ViewChild('txtProgress' ,{static:false}) txtProgress :ElementRef;

  @Input() leyenda : string = "leyenda";
  @Input() progreso: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  ngOnInit() {
    
  }

  onChanges(value:number){

   

    if(value >= 100){
      this.progreso=100;
    }else if( value <=0){
      this.progreso = 0;
    }else{
       this.progreso = value;
    }

    this.txtProgress.nativeElement.value = this.progreso;

    this.cambioValor.emit( this.progreso)
  }

  cambiarValor(valor:number){

    this.progreso += valor;
    this.cambioValor.emit(this.progreso)
  }

}
