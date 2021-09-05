import React from "react";
import Image from "next/image";
const OrderItem = ({ data }) => {
  return (
    <div className="item bg-white rounded-xl mt-5 ">
      <div className="item_top h-16 py-2 rounded-t-md text-sm px-5 bg-gray-100 flex flex-row items-center ">
        <div
          className="date flex flex-col justify-center"
          style={{ flexBasis: "20%" }}
        >
          <span>Order Placed</span>
          <span className="date_text">22 Aug 2021</span>
        </div>
        <div
          className="amount flex flex-col justify-center items-center"
          style={{ flexBasis: "30%" }}
        >
          <span>Total Amount</span>
          <span>
            Rs. {data === undefined ? "0" : data.amount} +{" "}
            {data === undefined ? "0" : data.amount_shipping}(Delivery Charge)
          </span>
        </div>
        <div
          className="itemid flex flex-col justify-center items-center "
          style={{ flexBasis: "50%" }}
        >
          <span>{data === undefined ? "0" : data.orderid}</span>
          <span className="itemcount text-xl text-blue-800 font-bold">
            {data === undefined ? "0" : data.images.length}{" "}
            {data === undefined
              ? "0"
              : data.images.length <= 1
              ? "Item"
              : "Items"}
          </span>
        </div>
      </div>
      <div className="orderimagebody pl-3 flex flex-row my-5 w-full">
        {data === undefined
          ? ""
          : data.images.map((url, index) => {
              return (
                <Image
                  key={index}
                  src={url}
                  alt=""
                  width={50}
                  height={150}
                  objectFit="contain"
                />
              );
            })}
      </div>
    </div>
  );
};

export default OrderItem;
