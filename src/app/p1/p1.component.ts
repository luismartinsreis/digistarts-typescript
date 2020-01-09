import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p1',
  templateUrl: './p1.component.html',
  styleUrls: ['./p1.component.css']
})
export class P1Component implements OnInit {
  p1Output: string = ''; 
  values: Number[];
  constructor() { }

  ngOnInit() {
  }

  execute(val: string) {
      this.values = val.split(/[\r\n]+/).map(Number);
      const n =  this.values[0] >= 0 && this.values[0] <=1000 ? this.values[0]: undefined;
      if(n === undefined){
        console.error("Valor inválido para n")
      }
      this.p1Output = [...new Set(this.values.filter((k,i)=>i>0 && -1000<= k && k <=1000))].map(String).join('\r\n');
  }
}
