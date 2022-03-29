import { useState } from "react";
import Button from "react-bootstrap/esm/Button";

export default function NewsSlider() {
    const [activeSlide,setActiveSlide] = useState(1);
    const [hovered,setHovered] = useState();

    const newsSliderData = [
        {   
            itemImage:'images/news-slider/news-slider-image-1.png',
            itemHead:'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR.',
            itemContent:'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Aperiam Consectetur Cumque Dolorum, Ex Incidunt Ipsa Laudantium Necessitatibus Neque Quae Tempora......'
        },
        {
            itemImage:'images/news-slider/news-slider-image-2.png',
            itemHead:'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR.',
            itemContent:'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Aperiam Consectetur Cumque Dolorum, Ex Incidunt Ipsa Laudantium Necessitatibus Neque Quae Tempora......'
        },
        {
            itemImage:'images/news-slider/news-slider-image-3.png',
            itemHead:'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR.',
            itemContent:'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Aperiam Consectetur Cumque Dolorum, Ex Incidunt Ipsa Laudantium Necessitatibus Neque Quae Tempora......'
        },
    ]
 
    return (
    <div className="news mt-5">
        <p class='text-center'>InBux In The News</p>
        { newsSliderData && newsSliderData!=undefined ? <div className="news__slider">
            <div>
            {
                newsSliderData.map((item,index)=>{
                    // console.log("======Slider Item=====",item,index);
                    // console.log('====Active Status=====',activeSlide);
                    // console.log('====Hovered=====',hovered)       
                    return(
                        <div className={`news__slider__item ${activeSlide==index ? 'active' :''} ${hovered==index ? 'bg-secondary text-white':'bg-white'}`} onMouseEnter={(()=>setHovered(index))} onMouseLeave={(()=>setHovered(null))}>
                        <div>
                            <img src={item.itemImage} class='img-fluid' alt="" />
                        </div>
                        <div class='my-2 px-3 pb-4'>
                            <h4 class='w-50 my-3'>{item.itemHead}</h4>
                            <p>{item.itemContent}</p>
                            { activeSlide == index ? <Button  variant={`success`}>Read More</Button> :null}
                        </div>
                    </div>
                    )
                })
            }
              </div>
            <div className="news__slider__dots">
            { 
                newsSliderData.map((item,index)=>{
                    return(
                        <button type="button" onClick={(()=>{setActiveSlide(index)})} className={ activeSlide==index ? `bg-success`: `bg-secondary`}></button>
                    )
                })
            }
            </div>
            <button onClick={(()=>activeSlide == 0 ? setActiveSlide(0) : setActiveSlide(activeSlide-1))} className="btn news__slider__control__btn prev">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="19" viewBox="0 0 15 19">
                <text id="_" data-name="" transform="matrix(-1, 0, 0, 1, 15, 17)" fill="#0e7745" font-size="19" font-family="Material-Design-Iconic-Font"><tspan x="0" y="0"></tspan></text>
                </svg>
            </button>
            <button onClick={(()=>  activeSlide == newsSliderData.length-1 ? setActiveSlide(newsSliderData.length-1) : setActiveSlide(activeSlide+1))} className="btn news__slider__control__btn next">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="19" viewBox="0 0 15 19">
                <text id="_" data-name="" transform="translate(0 17)" fill="#0e7745" font-size="19" font-family="Material-Design-Iconic-Font"><tspan x="0" y="0"></tspan></text>
                </svg>
            </button>
           
        </div> :null}
    </div>
  );
}
