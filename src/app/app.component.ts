import { Component } from '@angular/core';
import { NoticiasService } from './services/noticias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'App-noticias';
  listNoticias:any[] = [];
  constructor(private newSrv:NoticiasService){

  }
  buscar(parametros:any) {
    this.newSrv.getNoticias(parametros).subscribe((data)=>{
      this.listNoticias = data.articles
    },error => {
      console.log(error)
    })
  }
}
