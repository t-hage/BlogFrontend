import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private blogService: BlogService) { }

  blog: String = "";

  ngOnInit() {
    this.getBlog("1");
  }

  getBlog(blogId: String){
     this.blogService.getBlog(blogId).subscribe( data => this.blog = data)
  }

}
