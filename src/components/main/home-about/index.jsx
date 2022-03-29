import "./home-about.scss";
import NewsSlider from "./news";

export default function HomeAbout() {
  const homeAboutData = [
    {
      itemImage: "images/home-about/home-about-image-1.png",
      itemHead: "184k",
      itemContent:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, similique.",
    },
    {
      itemImage: "images/home-about/home-about-image-2.png",
      itemHead: "$800B",
      itemContent:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, similique.",
    },
    {
      itemImage: "images/home-about/home-about-image-3.png",
      itemHead: "250+",
      itemContent:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, similique.",
    },
    {
      itemImage: "images/home-about/home-about-image-4.png",
      itemHead: "3421",
      itemContent:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, similique.",
    },
  
  ];
  return (
    <div className="home-about">
      <h3>
        Something Interesting <br />
        About Us
      </h3>
      <div className="container">
        {homeAboutData && homeAboutData != undefined ? (
          <div className="home-about__inner">
            {homeAboutData.map((item) => {
              return (
                <div className="home-about__inner__item">
                  <div>
                    <img src={item.itemImage} alt="" />
                  </div>
                  <p className="text-success">{item.itemHead}</p>
                  <p className="text-muted"> {item.itemContent} </p>
                </div>
              );
            })}
          </div>
        ) : null}
        <div className="about__content mt-5">
          <div className="row">
            <div className="col-4 pt-5">
              <h3>
                Serving <br />
                <b> Investors </b> <br />
                and{" "}
                <b>
                  {" "}
                  International <br /> Oil Companies{" "}
                </b>
                Around the world
              </h3>
            </div>
            <div className="col-8">
              <img
                src="images/home-news/image-1.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
        <NewsSlider></NewsSlider>
      </div>
    </div>
  );
}
