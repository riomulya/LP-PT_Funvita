"use client"

import React from 'react';
import Image from 'next/image';
import logo from "../../public/logo-blue.jpg"
import { AppBar, Typography } from '@mui/material';
import HideOnScroll from '../HideOnScroll';
import { motion } from "framer-motion";

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};


export default function Navbar() {
    return (
        <HideOnScroll >
            <AppBar className='mb-40'>
                <nav
                    className="flex flex-wrap items-center justify-between w-full md:py-0 px-4 text-lg text-gray-700 bg-white"
                >
                    <div>
                        <a href="#">
                            <motion.ul
                                variants={container}
                                initial="hidden"
                                animate="visible"
                                className='container'>
                                <motion.li variants={item}>
                                    <Image src={logo} alt="Funvita Indonesia" width={100} height={50} />
                                </motion.li>
                            </motion.ul>
                        </a>
                    </div>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="menu-button"
                        className="h-6 w-6 cursor-pointer md:hidden block"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>

                    <div className="hidden w-full md:flex md:items-center md:w-auto" id="menu">
                        <motion.ul
                            variants={container}
                            initial="hidden"
                            animate="visible"
                            className="container mr-12 pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0"
                        >
                            {["Services", "Pricing", "Customer", "Blog", "Contact"].map((index) => (
                                <motion.li key={index} className="item" variants={item} >
                                    <a className="md:p-4 py-2 block hover:text-purple-400" href={`#${index}`}
                                    >{index}</a>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </div>
                </nav>
            </AppBar >
        </HideOnScroll>
    );
}