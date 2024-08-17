/** @format */
"use client";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsDarkMode, setIsSideBarCollapsed } from "@/state";
import { Bell, Menu, Moon, Settings, SidebarClose, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const isSideBarCollapsed = useAppSelector(
    (state) => state.global.isSideBarCollapsed,
  );
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  const handle_toggleSideBar = () => {
    dispatch(setIsSideBarCollapsed(!isSideBarCollapsed));
  };

  const handle_toggleDarkMode = () => {
    dispatch(setIsDarkMode(!isDarkMode));
  };
  return (
    <div className={`flex justify-between items-center w-full mb-7`}>
      {/* Left Side */}
      <div className='flex justify-between items-center gap-5'>
        <button
          className='px-3 py-3 bg-slate-200/80 rounded-full hover:bg-blue-100'
          onClick={handle_toggleSideBar}>
          {isSideBarCollapsed ? (
            <Menu className='w-4 h-4' />
          ) : (
            <SidebarClose
              className='text-gray-500'
              size={20}
            />
          )}
        </button>
        <div className='relative'>
          <input
            type='search'
            placeholder='Search Products'
            className='pl-10 pr-4 py-2 w-52 md:w-80 border border-gray-300 bg-white rounded-lg focus:outline-none focus:border-blue-500'
          />
          <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
            <Bell
              className='text-gray-500'
              size={20}
            />
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className={`flex justify-between items-center gap-5`}>
        <div className='hidden md:flex justify-between items-center gap-5'>
          <div>
            <button onClick={handle_toggleDarkMode}>
              {isDarkMode ? (
                <Sun
                  className='text-gray-500 cursor-pointer'
                  size={24}
                />
              ) : (
                <Moon
                  className='text-gray-500 cursor-pointer'
                  size={24}
                />
              )}
            </button>
          </div>
          <div className='relative'>
            <Bell
              className='cursor-pointer text-gray-500'
              size={24}
            />
            <span className='absolute -top-2 -right-2 inline-flex justify-center items-center px-[0.4rem] py-1 text-xs font-semibold leading-none text-red-100 bg-red-400 rounded-full'>
              5
            </span>
          </div>
          <hr className='w-0 h-7 border border-solid border-l border-gray-300 mx-3' />
          <div className='flex items-center gap-3 cursor-pointer'>
            <Image
              src={
                "https://s3-mminventorymanagement.s3.ap-northeast-1.amazonaws.com/userIcon.jpeg"
              }
              alt='profile'
              width={50}
              height={50}
              className='object-cover rounded-full h-full'
            />
            <span className='font-semibold'>name</span>
          </div>
        </div>
        <Link href={"/settings"}>
          <Settings
            className='cursor-pointer text-gray-500'
            size={24}
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
