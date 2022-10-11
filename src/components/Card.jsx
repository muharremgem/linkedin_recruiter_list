import { useState } from "react";
import { BsLinkedin } from "react-icons/bs";

const Card = ({ data }) => {
  const [image, setImage] = useState(
    "http://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.3-hp2x.gif "
  );
  switch (data.Company) {
    case "Google":
      setImage(
        "http://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.3-hp2x.gif"
      );
      break;
    case "Facebook":
      setImage(
        "https://i.pcmag.com/imagery/articles/04HUXgEu0I3mdCOejOjQpNE-5..v1620748900.jpg"
      );
      break;
    case "Netflix":
      setImage(
        "https://play-lh.googleusercontent.com/TBRwjS_qfJCSj1m7zZB93FnpJM5fSpMA_wUlFDLxWAb45T9RmwBvQd5cWR5viJJOhkI"
      );
      break;
    case "Amazon":
      setImage("https://s3-symbol-logo.tradingview.com/amazon--600.png");
      break;
    case "Apple":
      setImage(
        "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/appleid/gift-cards-apple.png"
      );
      break;
    case "Twitter":
      setImage(
        "https://image.similarpng.com/very-thumbnail/2020/04/Twitter-logo-watercolor-social-media-icon-png.png"
      );
      break;
    case "Airbnb":
      setImage(
        "https://www.theriver.asia/wp-content/uploads/2020/01/pngkey.com-airbnb-logo-png-605967.png"
      );
      break;
    case "Uber":
      setImage(
        "https://techcrunch.com/wp-content/uploads/2018/09/Screen-Shot-2018-09-12-at-3.49.36-PM.png?w=1500&crop=1"
      );
      break;
    case "LinkedIn":
      setImage(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSghowrv91uMJNlGPFVfPgNYHlQCQ7gbj8E4vPONR1r2fxgFoW7EN-XyCu886_YMVE8bT0&usqp=CAU"
      );
      break;
    case "Microsoft":
      setImage(
        "https://image.shutterstock.com/image-photo/image-260nw-272871062.jpg"
      );
      break;
    case "Pinterest":
      setImage(
        "https://play-lh.googleusercontent.com/dVsv8Hc4TOUeLFAahxR8KANg22W9dj2jBsTW1VHv3CV-5NCZjP9D9i2j5IpfVx2NTB8"
      );
      break;
    case "Slack":
      setImage(
        "https://helios-i.mashable.com/imagery/articles/047UsVLCrupUmmsuitpn1nw/hero-image.fill.size_1248x702.v1623374965.png"
      );
      break;
    case "Spotify":
      setImage(
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Spotify_App_Logo.svg/2048px-Spotify_App_Logo.svg.png"
      );
      break;
    case "Tesla":
      setImage(
        "https://www.logo.wine/a/logo/Tesla%2C_Inc./Tesla%2C_Inc.-Logomark%26Wordmark2-Dark-Background-Logo.wine.svg"
      );
      break;
  }

  return (
    <div className="grid grid-col-5 p-5 m-5 hover:scale-110 duration-300">
      <div className="content flex flex-col font-bold  p-10 bg-blue-400 rounded-xl ">
        <img className="mb-5" src={image} alt="cardImg" />
        <div className="flex flex-col text-center  font-bold  bg-slate-50 rounded-xl text-md my-2">
          <h2 className=" text-xl text-blue-500">
            {data.FirstName} {data.LastName}
          </h2>
          <h3 className="text-red-500"> {data.Country}</h3>
          <h2 className="text-amber-500 text-2xl"> {data.Company}</h2>
          <h2 className=" text-blue-500"> {data.Position}</h2>
          <h2 className=" text-green-800"> {data.Years}</h2>
        </div>
        <div>
          <button className="flex bg-gray-200 px-10 mt-10 hover:bg-blue-500 hover:text-white hover:scale-125 duration-300 rounded-md">
            <div className="flex mt-2">
              <a href={data.Linkedin} target="_blank">
                Linked
              </a>
            </div>
            <div>
              <div className="flex justify-end mx-15">
                <a href={data.Linkedin} target="_blank">
                  <BsLinkedin />
                </a>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
