import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  public nomeUsuario:string = "Diego Minelli do Código";

  constructor() { }

  ngOnInit() {
  }

}
