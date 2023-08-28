import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {

  constructor(
    private router: Router
  ) { }

  component = PostComponent;

  posts = [
    { title: 'Umbreon', content: 'Umbreon', userId: 'uaena' },
    { title: 'Umbreon', content: 'Umbreon', userId: 'uaena' },
    { title: 'Umbreon', content: 'Umbreon', userId: 'uaena' },
    { title: 'Umbreon', content: 'Umbreon', userId: 'uaena' },
    { title: 'Umbreon', content: 'Umbreon', userId: 'uaena' },
    { title: 'Umbreon', content: 'Umbreon', userId: 'uaena' },
  ];

  ngOnInit() {}

  goToPost() {
    this.router.navigate(['/post'])
  }

}
