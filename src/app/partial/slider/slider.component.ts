import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})


export class SliderComponent {
  active = 0;
  slides: any[] = [
    {
      img: "assets/sliderIMG.png",
      txt: {
        headline: "بيوتي سنتر",
        secondary: "متجر مستلزمات نسائية",
        details: "تسوقي سيدتي أفضل المنتجات النسائية والبضائع الفاخرة من متجرنا بأفضل الأسعار والخصومات"
      }
    },
    {
      img: "assets/sliderIMG.png",
      txt: {
        headline: "بيوتي سنتر",
        secondary: "متجر مستلزمات نسائية",
        details: "تسوقي سيدتي أفضل المنتجات النسائية والبضائع الفاخرة من متجرنا بأفضل الأسعار والخصومات"
      }
    },
    {
      img: "assets/sliderIMG.png",
      txt: {
        headline: "بيوتي سنتر",
        secondary: "متجر مستلزمات نسائية",
        details: "تسوقي سيدتي أفضل المنتجات النسائية والبضائع الفاخرة من متجرنا بأفضل الأسعار والخصومات"
      }
    },
    {
      img: "assets/sliderIMG.png",
      txt: {
        headline: "بيوتي سنتر",
        secondary: "متجر مستلزمات نسائية",
        details: "تسوقي سيدتي أفضل المنتجات النسائية والبضائع الفاخرة من متجرنا بأفضل الأسعار والخصومات"
      }
    },
    {
      img: "assets/sliderIMG.png",
      txt: {
        headline: "بيوتي سنتر",
        secondary: "متجر مستلزمات نسائية",
        details: "تسوقي سيدتي أفضل المنتجات النسائية والبضائع الفاخرة من متجرنا بأفضل الأسعار والخصومات"
      }
    },
    {
      img: "assets/sliderIMG.png",
      txt: {
        headline: "بيوتي سنتر",
        secondary: "متجر مستلزمات نسائية",
        details: "تسوقي سيدتي أفضل المنتجات النسائية والبضائع الفاخرة من متجرنا بأفضل الأسعار والخصومات"
      }
    },
    {
      img: "assets/sliderIMG.png",
      txt: {
        headline: "بيوتي سنتر",
        secondary: "متجر مستلزمات نسائية",
        details: "تسوقي سيدتي أفضل المنتجات النسائية والبضائع الفاخرة من متجرنا بأفضل الأسعار والخصومات"
      }
    },
    {
      img: "assets/sliderIMG.png",
      txt: {
        headline: "بيوتي سنتر",
        secondary: "متجر مستلزمات نسائية",
        details: "تسوقي سيدتي أفضل المنتجات النسائية والبضائع الفاخرة من متجرنا بأفضل الأسعار والخصومات"
      }
    },
    {
      img: "assets/sliderIMG.png",
      txt: {
        headline: "بيوتي سنتر",
        secondary: "متجر مستلزمات نسائية",
        details: "تسوقي سيدتي أفضل المنتجات النسائية والبضائع الفاخرة من متجرنا بأفضل الأسعار والخصومات"
      }
    },
    {
      img: "assets/sliderIMG.png",
      txt: {
        headline: "بيوتي سنتر",
        secondary: "متجر مستلزمات نسائية",
        details: "تسوقي سيدتي أفضل المنتجات النسائية والبضائع الفاخرة من متجرنا بأفضل الأسعار والخصومات"
      }
    },
    {
      img: "assets/sliderIMG.png",
      txt: {
        headline: "بيوتي سنتر",
        secondary: "متجر مستلزمات نسائية",
        details: "تسوقي سيدتي أفضل المنتجات النسائية والبضائع الفاخرة من متجرنا بأفضل الأسعار والخصومات"
      }
    },
    {
      img: "assets/sliderIMG.png",
      txt: {
        headline: "بيوتي سنتر2",
        secondary: "متجر مستلزمات نسائية2",
        details: "تسوقي سيدتي أفضل المنتجات النسائية والبضائع الفاخرة من متجرنا بأفضل الأسعار والخصومات2"
      }
    },
    {
      img: "assets/sliderIMG.png",
      txt: {
        headline: "بيوتي سنتر3",
        secondary: "متجر مستلزمات نسائية3",
        details: "تسوقي سيدتي أفضل المنتجات النسائية والبضائع الفاخرة من متجرنا بأفضل الأسعار والخصوما3"
      }
    },
  ]

  bullets: number[] = []

  constructor(){
    let counter = 0;
    this.slides = this.slides.map(slide => {
      slide.id = counter++;
      return slide;
    })
    
    this.bullets = this.slides.map(e => Number(e.id))
  }

  goNext = (slider:HTMLElement) => {
    this.active = (this.active + 1) % this.bullets.length;
    slider.style.left = `calc(-1 * ${this.active} * 100vw)`
  }

  goPrev = (slider:HTMLElement) => {
    this.active = (this.active == 0)? this.bullets.length - 1: this.active - 1;
    slider.style.left = `calc(-1 * ${this.active} * 100vw)`
  }

  bulletClick = (slider:HTMLElement, index:number) => {
    this.active = index
    slider.style.left = `calc(-1 * ${this.active} * 100vw)`
  }
}
