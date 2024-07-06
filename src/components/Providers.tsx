"use client";
import React, { PropsWithChildren } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Providers({ children }: PropsWithChildren) {
  return (
    <>
      <ToastContainer />
      {children}
    </>
  );
}
