import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent  implements OnInit {

  constructor() { }

  gellery = [
    { name: "关都地区", class: "g1" },
    { name: "城都地区", class: "g2" },
    { name: "丰缘地区", class: "g3" },
    { name: "神奥地区", class: "g4" },
    { name: "合众地区", class: "g5" },
    { name: "卡洛斯地区", class: "g6" },
    { name: "阿罗拉地区", class: "g7" },
    { name: "伽勒尔地区", class: "g8" },
    { name: "洗翠地区", class: "g9" },
    { name: "帕底亚地区", class: "g10" }
  ];

  ngOnInit() {}

}
