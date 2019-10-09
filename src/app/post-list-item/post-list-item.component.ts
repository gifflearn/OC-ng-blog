import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  constructor() { }

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveits: string;
  @Input() postCreatedat: Date;

  ngOnInit() {
  }

  getColor() {
    if (parseInt(this.postLoveits, 10) > 0) {
      return 'green';
    } else if (parseInt(this.postLoveits, 10) < 0) {
      return 'red';
    }
}


}
