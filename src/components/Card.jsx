import { useState, useEffect } from "react";
import { BsLinkedin } from "react-icons/bs";

const Card = ({ data }) => {
  const [image, setImage] = useState(
    "http://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.3-hp2x.gif "
  );

  useEffect(() => {
    switch (data.Company) {
      case "Google":
        setImage(
          "http://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.3-hp2x.gif"
        );
        break;
      case "Facebook (Facebook)":
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
      case "Nvidia":
        setImage(
          "http://store-images.s-microsoft.com/image/apps.20966.13599037783181022.b05b7adf-6b7a-44ae-9a70-9dc9370ea7e6.4cd88c60-6ff1-4b0f-aed6-8e2efa5629c1"
        );
        break;
      case "Snap.":
        setImage(
          "https://snaporiginals.snapchat.com/images/snapcodes/breakwater_Snapcode.svg"
        );
        break;
      case "Vauld":
        setImage(
          "https://play-lh.googleusercontent.com/dgNWQiW-Si7dG2xwL8W0q-M0_ZFapJhgOmg7DB76K6Xtmzmfpd6SzSDwup1Xy3oTtA"
        );
        break;
      case "salesforce":
        setImage(
          "https://upload.wikimedia.org/wikipedia/commons/6/64/SalesForce.jpg"
        );
        break;
      case "Adobe":
        setImage(
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Adobe_Acrobat_DC_logo_2020.svg/800px-Adobe_Acrobat_DC_logo_2020.svg.png"
        );
        break;
      case "MBI":
        setImage(
          "data:image/jpeg;base64,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"
        );
        break;
      case "Atlassian":
        setImage(
          "https://www.naco.org/sites/default/files/atlassian-logo-gradient-vertical-blue%402x.png"
        );
        break;
      case "Paypal":
        setImage(
          "https://lentaenterprise.com/wp-content/uploads/2022/03/paypal-logo.png"
        );
        break;
      case "TikTok":
        setImage(
          "https://img.freepik.com/free-vector/tiktok-banner-with-watercolor-splatter_69286-194.jpg?w=2000"
        );
        break;
      case "Dropbox":
        setImage(
          "data:image/png;base64,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"
        );
        break;
    }
  }, [data.Company]);

  return (
    <div className=" hover:scale-105 duration-300  rounded-3xl cursor-pointer">
      <div className="content flex flex-col font-bold justify-center w-[20rem] min-h-[30rem] p-5 items-center bg-blue-400 rounded-xl ">
        <img
          className={`mb-5 w-auto h-[5rem] object-cover`}
          src={image}
          alt="img"
        />
        <div className="flex flex-col text-center p-4 font-bold  bg-slate-50 rounded-xl text-md my-2">
          <h2 className=" text-xl text-blue-500">
            {data.FirstName} {data.LastName}
          </h2>
          <h3 className="text-red-500"> {data.Country}</h3>
          <h2 className="text-amber-500 text-2xl"> {data.Company}</h2>
          <h2 className=" text-blue-500"> {data.Position}</h2>
          <h2 className=" text-green-800"> {data.Years}</h2>
        </div>
        <div>
          <a href={data.Linkedin} target="_blank">
            <button className="flex items-center bg-gray-200 py-3 px-10 mt-10 hover:bg-blue-500 hover:text-white hover:scale-125 duration-300 rounded-md">
              Linked
              <BsLinkedin />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
