/** @format */
"use client";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSideBarCollapsed } from "@/state";
import {
  Boxes,
  DollarSign,
  LayoutDashboard,
  ListCheck,
  LucideIcon,
  Menu,
  SidebarClose,
  SlidersHorizontal,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SideBarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isCollapsed: boolean;
}

const SideBarLinks = ({
  href,
  icon: Icon,
  label,
  isCollapsed,
}: SideBarLinkProps) => {
  const pathname = usePathname();
  const isActive =
    pathname === href || (pathname === "/" && href === "/dashboard");

  return (
    <Link href={href}>
      <div
        className={`flex items-center cursor-pointer ${
          isCollapsed ? "justify-center py-4" : "justify-start px-8 py-4"
        } hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors ${
          isActive ? "bg-blue-200 text-white" : ""
        }`}>
        <Icon className='w-6 h-6 !text-gray-700' />
        <span
          className={`${
            isCollapsed ? "hidden" : "block"
          } capitalize font-medium text-gray-700`}>
          {label}
        </span>
      </div>
    </Link>
  );
};
const Sidebar = () => {
  const dispatch = useAppDispatch();
  const isSideBarCollapsed = useAppSelector(
    (state) => state.global.isSideBarCollapsed,
  );

  const handle_toggleSideBar = () => {
    dispatch(setIsSideBarCollapsed(!isSideBarCollapsed));
  };

  const sideBarClassName = `fixed flex flex-col ${
    isSideBarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"
  } bg-white transition-all duration-200 overflow-hidden h-full shadow-xl z-40`;

  return (
    <div className={sideBarClassName}>
      {/* Top Logo */}
      <div
        className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${
          isSideBarCollapsed ? "px-5" : "px-1 md:px-4"
        }`}>
        <Image
          src={
            "https://s3-mminventorymanagement.s3.ap-northeast-1.amazonaws.com/logo1.png"
          }
          alt='profile'
          width={27}
          height={27}
          className='object-cover rounded h-full'
        />
        <h1
          className={`${
            isSideBarCollapsed ? "hidden" : "block"
          } font-extrabold text-2xl`}>
          MM-Ecomerce
        </h1>
        <button
          className='md:hidden px-3 py-3 bg-slate-200/80 rounded-full hover:bg-blue-100'
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
      </div>
      {/* Links */}
      <div className='flex-grow mt-8'>
        {/* links here */}
        <SideBarLinks
          href='/dashboard'
          icon={LayoutDashboard}
          label='dashboard'
          isCollapsed={isSideBarCollapsed}
        />
        <SideBarLinks
          href='/inventory'
          icon={ListCheck}
          label='inventory'
          isCollapsed={isSideBarCollapsed}
        />
        <SideBarLinks
          href='/products'
          icon={Boxes}
          label='products'
          isCollapsed={isSideBarCollapsed}
        />
        <SideBarLinks
          href='/users'
          icon={User}
          label='users'
          isCollapsed={isSideBarCollapsed}
        />
        <SideBarLinks
          href='/settings'
          icon={SlidersHorizontal}
          label='settings'
          isCollapsed={isSideBarCollapsed}
        />
        <SideBarLinks
          href='/expenses'
          icon={DollarSign}
          label='expenses'
          isCollapsed={isSideBarCollapsed}
        />
      </div>
      {/* Footer */}
      <div className={`${isSideBarCollapsed ? "hidden" : "block"} mb-10`}>
        <p className='text-center text-xs text-gray-500'>
          &copy; 2024 MM-Ecommerce Group
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
