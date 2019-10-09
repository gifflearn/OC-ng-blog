import { Component, OnInit, Input } from '@angular/core';
import { ArrayType } from '@angular/compiler';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {


  @Input() lesPosts: ArrayType;

  constructor() { }

  ngOnInit() {
  }

}
