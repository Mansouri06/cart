import logo from "../../assets/dfd.jpg";
import { useState } from "react";
import like from "../../assets/3141738.png";
import download from "../../assets/telecharger.png";
import "./card.css"

export default function Card(props) {
  return (
    <div className="flex flex-col p-4 h-96 w-72  justify-between  shadow-sm  relative bg-white border-2 border-slate-200">
      <div className=" p-1  absolute top-3 right-3 border-2 rounded-full border-gray-100 ">
        <img src={like} alt="" className="w-4 " />
      </div>
      <div className="flex justify-center">
        <img src={logo} alt="" className="w-32 justify-center  " />
      </div>
      <div className="text-start  ">
        <div className="">
          <h1 className="TileCard text-start font-bold text-start"> {props.title} </h1>
          <h1 className="PrixCard text-right text-xl font-bold  py-1  ">
            £{props.prix}
          </h1>
        </div>
        <div className=""></div>
      </div>
      <div className="  ">
        <p className="TxtDetails text-xs">{props.details}</p>
      </div>
      <div className="flex mt-5  space-x-2 bottom-3  ">
        <button className="flex justify-center border-2 border-gray-200 w-1/6 p-2 ">
          <img className="w-3" src={download} alt="" />
        </button>
        <button className="BtnAddCard border-2 border-gray-200 w-64  text-white text-xs p-2">
          Add to cart
        </button>
      </div>
    </div>
  );
}
