import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { toast } from "tailwind-toast";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../../store/index";
const Max_rating = 5;
const Min_rating = 2;
const Product = ({ products }) => {
  const basket = useSelector((state) => state.basket);
  const [allitems, setAllitems] = useState({
    id: 1,
    title: "The title",
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    description: "Voluptatum, placeat. Voluptate atque ducimus delectus",
    category: "jewellery",
  });
  useEffect(() => {
    setAllitems(products);
  }, [products]);
  const [rating] = useState(
    Math.floor(Math.random() * (Max_rating - Min_rating + 1)) + Min_rating
  );
  const [isPrime] = useState(Math.random() > 0.5);
  const dispatch = useDispatch();
  // add item to cart
  const additem = async () => {
    for (let i = 0; i < basket.length; i++) {
      const item = basket[i];
      if (item.id === products.id) {
        return toast()
          .warning("OOPS ! ", "Item is already in basket")
          .with({
            // shape: "pill",
            duration: 4000,
            speed: 1000,
            positionX: "end",
            positionY: "top",
            color: "bg-yellow-400",
            fontColor: "white",
            fontTone: 200,
          })
          .show();
      }
    }
    const itemadded = await dispatch(addToCart(products));
    if (itemadded) {
      toast()
        .success("Great ! ", "Item was added to cart.")
        .with({
          // shape: "pill",
          duration: 4000,
          speed: 1000,
          positionX: "end",
          positionY: "top",
          color: "bg-green-400",
          fontColor: "white",
          fontTone: 200,
        })
        .show();
    } else {
      toast()
        .success("Sorry ! ", "Can't add item.")
        .with({
          // shape: "pill",
          duration: 4000,
          speed: 1000,
          positionX: "end",
          positionY: "top",
          color: "bg-yellow-400",
          fontColor: "black",
          fontTone: 200,
        })
        .show();
    }
  };

  return (
    <div
      data-tilt
      data-tilt-reverse="true"
      className="animate__animated animate__fadeInUp delay-2 wow  productcard shadow-xl	w-full px-5 py-8 flex flex-col h-100 z-20 overflow-hidden bg-white "
    >
      <div className="preview_image relative flex items-center justify-center">
        <div className="productimage flex justify-center ">
          <Image
            className="w-full hover:animate-ping	"
            height={150}
            width={150}
            src={allitems.image}
            objectFit="contain"
            alt="Mountain"
          ></Image>
        </div>
        <Link href={`product/${allitems.id}`}>
          <p className="btn absolute previewbtn py-2 px-5 bg-yellow-500 rounded-lg text-white radius-2">
            Preview
          </p>
        </Link>
      </div>
      <div className="">
        <div className="h-40">
          <div className="font-bold text-sm mb-2">
            {allitems.title.substring(0, 30)}.....
          </div>
          <div className="rating flex items-center h-10">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <StarIcon key={i} className="h-5 text-yellow-500" />
              ))}
          </div>
          <p className="text-gray-700">
            {allitems.description.substring(0, 100)}...
          </p>
        </div>
      </div>
      <div className="price ">
        <span className="font-bold ">&#8377; </span>
        {allitems.price}
      </div>
      <div className="prime h-6">{isPrime && <p>Free Delivery</p>}</div>
      <button
        onClick={additem}
        className="addtobasket w-full py-2  bg-yellow-500 hover:bg-yellow-300"
      >
        Add To Basket
      </button>
    </div>
  );
};

export default Product;
