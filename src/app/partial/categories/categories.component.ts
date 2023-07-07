import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categories: any[] = [
    {
      img: "assets/img4.png",
      headline: "إكسسوارات الجوال"
    },
    {
      img: "assets/img3.png",
      headline: "إكسسوارات السيارة"
    },
    {
      img: "assets/img2.png",
      headline: "اطقم ساعات"
    },
    {
      img: "assets/img1.png",
      headline: "نظارات طبية نسائية"
    },
  ]
}
