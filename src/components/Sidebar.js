import React, { useContext } from "react";
// import Link
import { Link } from "react-router-dom";

// import icons
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";

// import components
import CartItem from "./CartItem";

// import sidebar context
import { SidebarContext } from "../contexts/SidebarContext";

// import cart context
import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total , itemAmount } = useContext(CartContext);
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">shopping bag ({itemAmount})</div>
        <div
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
          onClick={handleClose}
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[520px] lg:h-[620px] overflow-y-auto overflow-x-hidden border-b">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div className="flex flex-col gap-y-3 py-4 mt-4">
        <div className="flex justify-between items-center w-full">
          {/* total */}
          <div className="uppercase font-semibold">
            <span className="mr-2">total:</span>$ {parseFloat(total).toFixed(2)}
          </div>
          {/* clear cart icon */}
          <div
            onClick={() => clearCart()}
            className="flex justify-center items-center cursor-pointer py-4 bg-red-500 text-white w-12 h-12 text-xl"
          >
            <FiTrash2 />
          </div>
        </div>
        <Link to='/' className="flex justify-center items-center bg-gray-200 text-primary p-4 w-full font-medium">view cart</Link>
        <Link to='/' className="flex justify-center items-center bg-primary text-white p-4 w-full font-medium">check out</Link>
      </div>
    </div>
  );
};

export default Sidebar;
