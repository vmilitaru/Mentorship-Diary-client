import React from "react";
import {
  AiOutlineHome,
  AiOutlineForm,
  AiOutlineHistory,
  AiOutlineContacts,
} from "react-icons/ai";
import { RiLogoutBoxLine } from "react-icons/ri";


export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiOutlineHome />,
    class: "nav-text",
  },
  {
    title: "Weekly Form",
    path: "/InputForm",
    icon: <AiOutlineForm />,
    class: "nav-text",
  },
  {
    title: "Achievement History",
    path: "/History",
    icon: <AiOutlineHistory />,
    class: "nav-text",
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <AiOutlineContacts />,
    class: "nav-text",
  },
  {
    title: "Log Out",
    path: "/logout",
    icon: <RiLogoutBoxLine />,
    class: "nav-text",
  },
];
