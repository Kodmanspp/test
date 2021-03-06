import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/dist/client/image";
import styles from "./slider.module.css";


export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <div className={styles.container}>
        <Slider {...settings}>
          <div>
            <h4 className={styles.slick__h4}>Изысканный фасад</h4>
          <Image
                    src="/slider1.png"
                    alt="Logo"
                    width={307}
                    height={360}
                  />
          </div>
          <div>
          <h4 className={styles.slick__h4}>Изысканный фасад</h4>
          <Image
                    src="/slider2.png"
                    alt="Logo"
                    width={307}
                    height={360}
                  />
          </div>
          <div>
          <h4 className={styles.slick__h4}>Изысканный фасад</h4>
          <Image
                    src="/slider3.png"
                    alt="Logo"
                    width={307}
                    height={360}
                  />
          </div>
          <div>
          <h4 className={styles.slick__h4}>Изысканный фасад</h4>
          <Image
                    src="/slider4.png"
                    alt="Logo"
                    width={307}
                    height={360}
                  />
          </div>
          <div>
          <h4 className={styles.slick__h4}>Изысканный фасад</h4>
          <Image
                    src="/slider4.png"
                    alt="Logo"
                    width={307}
                    height={360}
                  />
          </div>
          <div>
          </div>
        </Slider>
        </div>
      </div>
    );
  }
}