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
    <div className="grid grid-col-3 p-5 m-5 hover:scale-110 duration-300">
      <div className="content flex flex-col font-bold  p-10 bg-blue-400 rounded-xl ">
        <img
          className="mb-5  "
          src="http://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.3-hp2x.gif"
          alt="cardImg"
        />
        <div className="flex flex-col text-center  font-bold  bg-slate-50 rounded-xl text-md my-2">
          <h2 className=" text-xl text-blue-500">
            {data.FirstName} {data.LastName}
          </h2>
          <h3 className="text-red-500"> {data.Country}</h3>
          <h2 className="text-amber-500 text-2xl"> {data.Company}</h2>
          <h2 className=" text-blue-500"> {data.Position}</h2>
          <h2 className=" text-green-800"> {data.Years}</h2>
        </div>
        <div className="flex bg-gray-200 px-10 mt-10 hover:bg-blue-500 hover:text-white hover:scale-125 duration-300 rounded-md">
          <button>
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
