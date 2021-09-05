import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  SearchIcon,
  MenuIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/client";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "tailwind-toast";
// import { addToCart, removeFromCart } from "../../../store/index";

const Header = () => {
  const router = useRouter();
  const [session, loading] = useSession();
  const basket = useSelector((state) => state.basket);
  const pushtoorderpage = () => {
    if (!session) {
      toast()
        .warning("OOPS !", "Need to login to see orders")
        .with({
          shape: "pill",
          duration: 4000,
          speed: 1000,
          positionX: "center",
          positionY: "top",
          color: "bg-red-400",
          fontColor: "black",
          fontTone: 200,
        })
        .show();
    } else {
      router.push(`/orders/${session.user.email}`);
    }
  };
  return (
    <header className="header fixed top-0 z-30 w-full">
      {/* header top  */}
      <div className="header_top flex flex-grow py-3 sm:flex-grow-0 items-center h-14	bg-gray-900">
        <Image
          src="https://links.papareact.com/f90"
          width={150}
          top={16}
          height={40}
          alt="Image"
          objectFit="contain"
          onClick={() => router.push("/")}
          className="cursor-pointer header_logo_image flex-1"
        />
        <div className="hidden sm:flex header_top_search flex-auto bg-yellow-400 hover:bg-yellow-500  rounded-xl	">
          <input
            type="search"
            name=""
            className="rounded-l-lg px-2 w-6 flex-grow focus:outline-none "
            id=""
          />
          <SearchIcon className="h-9 p-2 cursor-pointer" />
        </div>
        <div className="header_top_info flex-1 flex text-white justify-between space-x-6 px-5 whitespace-nowrap text-xs">
          <div
            onClick={!session ? signIn : signOut}
            className="header_top_userinfo flex flex-col	items-center cursor-pointer md:text-xs "
          >
            <p className="header_top_userinfo_name">
              Hello, {!session ? "User" : session.user.name}{" "}
            </p>
            <p className="header_top_userinfo_accountdetail font-extrabold	">
              Account & Details
            </p>
          </div>
          <div
            onClick={pushtoorderpage}
            className="header_top_return flex flex-col	items-center cursor-pointer md:text-xs "
          >
            <p className="header_top_return_text">Return</p>
            <p className="header_top_return_order font-extrabold">& Orders</p>
          </div>
          <div
            onClick={() => router.push("/basket")}
            className="header_top_basket relative flex flex-row	items-center cursor-pointer md:text-xs"
          >
            <span className="absolute top-0 right-0 md:right-10 bg-yellow-400 text-center rounded-full h-4 w-4 font-bold">
              {basket.length}
            </span>
            <ShoppingCartIcon className="header_top_basket_shopping_icon h-5 md:h-10" />
            <p className="header_top_basket_text font-extrabold hidden md:inline">
              Basket
            </p>
          </div>
        </div>
      </div>
      {/* header bottom */}
      <div className="header_bottom text-white text-center flex flex-start p-2 whitespace-nowrap  bg-gray-800">
        <MenuIcon className="h-4 mr-6" />
        <p className="text-xs mr-2 cursor-pointer hover:underline">All</p>
        <p className="text-xs mr-2 cursor-pointer hover:underline">
          Prime Video
        </p>
        <p className="text-xs mr-2 cursor-pointer hover:underline">
          Amazon Business
        </p>
        <p className="text-xs mr-2 cursor-pointer hover:underline">
          Today Deal
        </p>
        <p className="text-xs mr-2 cursor-pointer hover:underline">
          Electronics
        </p>
      </div>
    </header>
  );
};

export default Header;
