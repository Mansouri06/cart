import logo from "../../assets/dfd.jpg";
import like from "../../assets/3141738.png";
import download from "../../assets/telecharger.png";
export default function Card(props) {
  return (
    <div className="flex flex-col p-3 h-96 w-72 items-center  shadow-sm relative bg-white border-2 border-slate-200">
      <div className="p-1  absolute top-3 right-3 border-2 rounded-full border-gray-100 ">
        <img src={like} alt="" className="w-4 " />
      </div>
      <img src={logo} alt="" className="w-32 " />
      <div className="flex  ">
        <div className="">
          <p className="tex-xl font-bold text-start"> {props.title} </p>
        </div>
        <div className="my-7">
          <p className="absolute right-2 text-xl font-bold text-orange-700   ">
            £21.12{props.prix}
          </p>
        </div>
      </div>
      <div className=" mt-1 ">
        <p className="text-start text-xs">{props.details}</p>
      </div>
      <div className="flex mt-5 absolute space-x-2 bottom-3 justify-center ">
        <button className="flex justify-center border-2 border-gray-200 w-1/6 p-2 ">
        <img className="w-3" src={download} alt="" />
        </button>
        <button className="border-2 border-gray-200 w-48 bg-indigo-700 text-white text-xs p-2">
          Add to cart
        </button>
      </div>
    </div>
  );
}
