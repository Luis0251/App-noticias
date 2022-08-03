import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-noticias',
  templateUrl: './list-noticias.component.html',
  styleUrls: ['./list-noticias.component.scss']
})
export class ListNoticiasComponent implements OnInit {
  @Input() listNoticias:any;
  constructor() { }

  ngOnInit(): void {
  }

}
