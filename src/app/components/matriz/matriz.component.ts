import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matriz',
  templateUrl: './matriz.component.html',
  styleUrls: ['./matriz.component.css']
})
export class MatrizComponent implements OnInit {
 public Matriz:any=[];
 public status:string;
 public MatrizXYZ:any=[];
  /*matriz:any=[
    [1, -3,  2, -3],
    [5,  6, -1, 13],
    [4, -1,  3,  8]
  ]
  */

  constructor() {
    this.Matriz=[
      [0,0,0,0],
      [0,0,0,0],
      [0,0,0,0]
     ];
     this.MatrizXYZ=[
      [0,0,0]
     ];
     this.status="success";
   }

  ngOnInit(): void {
 

  }
 

  onSubmit(){
    if(this.determinantes("AS")==0){
      this.status="error";
      console.log(this.status)

    }else{
      this.status="success";
    this.findValues("x");
    this.findValues("y");
    this.findValues("z");
        } 
  }


  copiarMatrizAS(matriz:any){
    var aux=matriz;
    aux.push(this.Matriz[0],this.Matriz[1]);
   return aux;
  }


  copiarMatrizAX(matriz:any){
    var aux: any[]=[
      [0,0,0,0,0],
      [0,0,0,0,0],
      [0,0,0,0,0]
     ]
     var a=0;
     var b=0;
     for (let c = 0; c < 5; c++){
       aux[a][0]=matriz[a][3]
       aux[a][1]=matriz[a][1]
       aux[a][2]=matriz[a][2]
       aux[a][3]=matriz[a][3]
       aux[a][4]=matriz[a][1]
       if(a==2){a=0}
       a++;
     }
     return aux;
   }

   copiarMatrizAY(matriz:any){
     var a=0; var b=0;
     var aux:any[]=[
       [0,0,0],
       [0,0,0],
       [0,0,0]
     ];
     for (let c = 0; c < 3; c++){
      aux[a][0]=matriz[a][b]
      aux[a][1]=matriz[a][b+3]
      aux[a][2]=matriz[a][b+2]
      if(a==2){
        a=0;
      }
      a++;
      b=0;
    }
     aux.push(aux[0],aux[1])
     return aux;
   }

   copiarMatrizAZ(matriz:any){
    var aux: any[]=[
      [0,0,0,0,0],
      [0,0,0,0,0],
      [0,0,0,0,0]
     ]
     var a=0;
     var b=0;
     for (let c = 0; c < 5; c++){
       aux[a][0]=matriz[a][0]
       aux[a][1]=matriz[a][1]
       aux[a][2]=matriz[a][3]
       aux[a][3]=matriz[a][0]
       aux[a][4]=matriz[a][1]
       if(a==2){a=0}
       a++;
     }
     return aux;
   }


determinantes(tipo:String) {
var matriz; var a=0; var b=0; var resultA=0; var resultB=0;

if(tipo=="AS"){
   matriz=this.copiarMatrizAS(this.Matriz);
}
if(tipo == "AX"){
matriz=this.copiarMatrizAX(this.Matriz);
}
if(tipo=="AY"){
matriz=this.copiarMatrizAY(this.Matriz);
}
if(tipo=="AZ"){
  matriz=this.copiarMatrizAZ(this.Matriz);
  }


for (let c = 0; c < 3; c++){
    let aux:any;
    if(tipo=="AS" || tipo=="AY"){
      aux=matriz[a][b]*matriz[a+1][b+1]*matriz[a+2][b+2];
    }
    if(tipo=="AX" || tipo == "AZ"){
      aux=matriz[b][a]*matriz[b+1][a+1]*matriz[b+2][a+2];
    } 
    resultA=resultA+aux;
     if(b==2){b=0;}
    a++;
}
//Return Result A


a=0; b=2;
for (let c = 0; c < 3; c++){
  let aux:any;
  if(tipo=="AS" || tipo == "AY"){
    aux=matriz[a][b]*matriz[a+1][b-1]*matriz[a+2][b-2];
  }
  if(tipo=="AX" || tipo == "AZ"){
    aux=matriz[a][b]*matriz[a+1][b-1]*matriz[a+2][b-2];
  } 

  resultB=resultB+aux;

  if(tipo=="AX" || tipo == "AZ"){
    b++;
  }else{
   if(b==0){b=2;}
  }
 if(tipo=="AX" || tipo == "AZ"){
    if(a==2){a=0}
 }else{a++}
}


return(resultA-resultB);

}//EndResultAS

findValues(tipo:any){
  var result=0;
  if(tipo == "x"){
    result= this.determinantes("AX") / this.determinantes("AS");
    this.MatrizXYZ[0][0]=result;
   
  }
  if(tipo == "y"){
    result= this.determinantes("AY") / this.determinantes("AS");
    this.MatrizXYZ[0][1]=result;
   }
  if(tipo == "z"){
    result= this.determinantes("AZ") / this.determinantes("AS");
    this.MatrizXYZ[0][2]=result;
  }
 console.log(result);

}




}
