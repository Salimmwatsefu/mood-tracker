import React from "react";
import {AiFillCloseSquare}  from 'react-icons/ai'
import { MdCloseFullscreen } from "react-icons/md";
import { GrClose } from "react-icons/gr";

const Drawer = ({ children, isOpen, onClose }) => {
	return (
		<div className='relative'>
			{isOpen && <div className="fixed inset-0 bg-black bg-opacity-60 z-20 backdrop-blur-sm " ></div>}
			<div
				className={`fixed top-0 right-0  md:right-0 h-full w-[350px] md:w-[440px] bg-white text-black transition duration-700 ease-in-out transform z-50 ${
					isOpen ? "translate-x-0" : "translate-x-full"
				}`}
				style={{ boxShadow: `${isOpen ? "rgba(0, 0, 0, 0.4) 0px 30px 30px" : ""}` }}
			>
				<aside className='h-full overflow-y-auto'>
				<button onClick={onClose} className="absolute top-5 right-3 text-orange-600 text-base flex gap-1">
				<p>Close</p>
					<MdCloseFullscreen className="mt-1"/>
					</button>
					
					<main className='bg-transparent p-4  pt-10 text-black'>{children}</main>
				</aside>
			</div>
		</div>
	);
};

export default Drawer;