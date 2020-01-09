import { Component, OnInit } from '@angular/core';


const allowed_operators = ['+','-','/','%','*'];

@Component({
  selector: 'app-p2',
  templateUrl: './p2.component.html',
  styleUrls: ['./p2.component.css']
})

export class P2Component implements OnInit {

  p2Output: string = ''; 
  values: string[];
  constructor() { }

  ngOnInit() {
  }

  execute(val: string) {
      this.values = val.split(/[\r\n]+/);
      const operation = allowed_operators.includes(this.values[0])? this.values[0]: undefined;
      if(operation === undefined){
        console.error("Operacao invalida")
      }else{
        let a = parseInt(this.values[1],2);
        let b = parseInt(this.values[2],2);
        if( a>=256 || b>=256 || 0>a || 0>b){
          console.error("valores invalidos")
       }else{
        let op = ''+a+operation+b;
        this.p2Output = (window as any).eval(op).toString(2).padStart(8, '0');
        console.log(this.p2Output);
      }
      }
  }
}