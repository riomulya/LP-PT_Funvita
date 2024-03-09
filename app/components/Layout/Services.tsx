"use client"

import { motion } from 'framer-motion';
import React from 'react'
import CardAction from '../CardAction'

type Service = {
    imgUrl: string,
    title: string,
    description: string
}

const services: Service[] = [
    {
        imgUrl: 'https://img.freepik.com/free-vector/strategic-consulting-concept-illustration_114360-9336.jpg?w=740&t=st=1709999917~exp=1710000517~hmac=00ddb0596d0e5e2955306f9187ac5d9e9cfd37cd255276e1991c72fa02a04601',
        title: 'Konsultan Bisnis',
        description: 'Dapatkan panduan langsung dari para ahli kami untuk meningkatkan kinerja bisnis Anda. Dari strategi pengembangan hingga implementasi praktis, kami siap membantu Anda mencapai tujuan bisnis Anda.'
    },
    {
        imgUrl: 'https://img.freepik.com/free-vector/marketing-consulting-concept-illustration_114360-9027.jpg?w=996&t=st=1709999975~exp=1710000575~hmac=82f39fa6fd3608c0c6d3b03c3dc7a504fa0d3ebba12af95e610c1a046f2a6a11',
        title: 'Training Digital Marketing',
        description: 'Tingkatkan keahlian Anda dalam pemasaran digital dengan pelatihan kami yang terkini. Pelajari strategi efektif untuk mengoptimalkan kampanye online Anda dan mencapai audiens yang lebih besar.'
    },
    {
        imgUrl: 'https://img.freepik.com/free-vector/investor-with-laptop-monitoring-growth-dividends-trader-sitting-stack-money-investing-capital-analyzing-profit-graphs-vector-illustration-finance-stock-trading-investment_74855-8432.jpg?w=1060&t=st=1710000040~exp=1710000640~hmac=826c6c78c6d07890411850003551dc6eca3087c4e2f40ab1d3bce582991f899c',
        title: 'Training Digital Literasi Keuangan',
        description: 'Kuasai keterampilan keuangan digital untuk mengelola keuangan pribadi atau bisnis Anda dengan lebih efektif. Pelajari konsep dasar keuangan serta teknik praktis untuk merencanakan, mengelola, dan mengoptimalkan keuangan Anda.'
    },
    {
        imgUrl: 'https://img.freepik.com/free-vector/isometric-with-people-working-new-brand-strategy-3d-illustration_1284-63994.jpg?w=740&t=st=1710000087~exp=1710000687~hmac=3f171e16dec5ca038be9ea5d009438a6a1bed9503f3764e19a76db8c0b292716',
        title: 'Training Branding Produk',
        description: 'Pelajari cara membangun citra merek yang kuat dan memikat melalui pelatihan khusus kami. Dari identifikasi nilai unik hingga pengembangan strategi pemasaran, kami akan membantu Anda menciptakan brand yang menginspirasi dan dikenang.'
    },
    {
        imgUrl: 'https://img.freepik.com/premium-vector/man-is-giving-speech-simple-flat-design-style_995281-5338.jpg?w=740',
        title: 'Publik Speaking',
        description: 'Tingkatkan keterampilan berbicara di depan umum Anda dengan pelatihan intensif kami. Dengan bimbingan langsung dari instruktur berpengalaman, Anda akan mengembangkan kepercayaan diri dan kemampuan untuk menyampaikan pesan Anda dengan jelas dan meyakinkan.'
    },
    {
        imgUrl: 'https://img.freepik.com/free-vector/hand-drawn-community-spirit-illustration_23-2150194851.jpg?w=996&t=st=1710000195~exp=1710000795~hmac=b3299e6ee1d09537c8373d862c3f8031cf35e01cba9f9e29a9a21a75d274c3bb',
        title: 'Kolaborasi',
        description: 'Jalin kemitraan yang saling menguntungkan dengan kami untuk mencapai tujuan bisnis Anda. Dari proyek kolaboratif hingga peningkatan jaringan, kami menyediakan platform untuk pertukaran ide dan peluang pertumbuhan yang tak terbatas.'
    }
];

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Image from 'next/image';
import { Typography } from '@mui/material';


function LabTabs() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1', bgcolor: 'background.paper' }}>
            <TabContext value={value}>
                {/* <Box sx={{ borderBottom: 1, borderColor: 'divider' }}> */}
                <TabList
                    textColor='secondary'
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile onChange={handleChange}
                    aria-label="lab API tabs example">
                    {services.map((service, index) => (
                        <Tab key={index} label={service.title} value={(index + 1).toString()} />
                    ))
                    }
                    {/* <Tab label="Item One" value="1" />
                        <Tab label="Item Two" value="2" />
                        <Tab label="Item Three" value="3" /> */}
                </TabList>
                {/* </Box> */}
                {services.map((service, index) => (
                    <TabPanel key={index} value={(index + 1).toString()} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            animate={{ y: 100 }}
                            transition={{
                                type: "spring",
                                duration: 2,
                            }}
                            key={index}
                        >
                            <CardAction
                                key={index}
                                imgUrl={service.imgUrl}
                                title={service.title}
                                description={service.description}
                            />
                        </motion.div>
                    </TabPanel>
                ))
                }
            </TabContext>
        </Box>
    );
}


export const Services = () => {

    return (
        // className='px-8 mx-auto w-full md:grid xl:grid-cols-3 md:grid-cols-2 xl:gap-6 sm:grid-rows-1'
        <section id='Services' className=''>
            {/* {services.map((service, index) => (
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    animate={{ y: 100 }}
                    transition={{
                        type: "spring",
                        duration: 2,
                    }}
                    key={index}
                    className=" mx-auto"
                >
                    <CardAction
                        key={index}
                        imgUrl={service.imgUrl}
                        title={service.title}
                        description={service.description}
                    />
                </motion.div>

            ))
            } */}
            <LabTabs />
        </section >
    )
}