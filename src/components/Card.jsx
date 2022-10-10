import { useState } from "react";
import { BsLinkedin } from "react-icons/bs";

const Card = ({ data }) => {
  // const [image, setImage] = useState(
  //   "http://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.3-hp2x.gif "
  // );
  // switch (data.Company) {
  //   case "Google":
  //     setImage(
  //       "http://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.3-hp2x.gif"
  //     );
  //     break;
  //   case "Facebook":
  //     setImage(
  //       "https://i.pcmag.com/imagery/articles/04HUXgEu0I3mdCOejOjQpNE-5..v1620748900.jpg"
  //     );
  //     break;
  // }

  return (
    <div className="grid grid-col-3   p-5 m-5  ">
      <div className="content font-bold text-lg p-16   bg-blue-400 rounded-xl h-[35rem]">
        <img
          className="mb-10 rounded-full"
          src="http://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.3-hp2x.gif"
          alt=""
        />
        <div className="flex flex-col text-center m-2 text-2xl  items-stretch">
          <h2>
            {data.FirstName} {data.LastName}
          </h2>
          <h3> {data.Country}</h3>
          <h2 className="text-white"> {data.Company}</h2>
          <h2> {data.Position}</h2>
          <h2> {data.Years}</h2>
        </div>
        <div className=" ">
          <button className=" bg-gray-200 px-2 py-1 mx-2 mt-10  hover:bg-blue-500 hover:text-white hover:scale-105 duration-300 rounded-md">
            <div className="flex ">
              <div className="mt-1">
                <a
                  className="flex  text-center m-2 "
                  href={data.Linkedin}
                  target="_blank"
                >
                  <BsLinkedin />
                </a>
              </div>
              <div className="flex  text-center m-2 ">
                <p>
                  <a href={data.Linkedin} target="_blank">
                    Linkedin
                  </a>
                </p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
