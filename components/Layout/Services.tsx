"use client"

import { motion } from 'framer-motion';
import React from 'react'
import CardAction from '../CardAction'
import { Box, Typography } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';


type Service = {
    imgUrl: string,
    title: string,
    description: string
}

const services = [
    {
        imgUrl: 'https://img.freepik.com/free-vector/strategic-consulting-concept-illustration_114360-9336.jpg?w=740&t=st=1709999917~exp=1710000517~hmac=00ddb0596d0e5e2955306f9187ac5d9e9cfd37cd255276e1991c72fa02a04601',
        title: 'Konsultan Bisnis',
        description: 'Dapatkan panduan langsung dari para ahli kami untuk meningkatkan kinerja bisnis Anda. Dari strategi pengembangan hingga implementasi praktis, kami siap membantu Anda mencapai tujuan bisnis Anda.',
        benefits: [
            {
                title: 'Konsultasi Langsung dengan Ahli',
                description: 'Dapatkan akses langsung kepada para ahli bisnis kami untuk konsultasi yang spesifik terkait dengan kebutuhan bisnis Anda.'
            },
            {
                title: 'Pendekatan Praktis',
                description: 'Dengan pendekatan praktis, kami membantu Anda menerapkan strategi bisnis yang tepat untuk menghasilkan hasil yang nyata dan terukur.'
            },
            {
                title: 'Pemecahan Masalah yang Efektif',
                description: 'Kami membantu Anda mengidentifikasi masalah bisnis yang mendasar dan menyediakan solusi yang efektif untuk mengatasinya.'
            }
        ]
    },
    {
        imgUrl: 'https://img.freepik.com/free-vector/marketing-consulting-concept-illustration_114360-9027.jpg?w=996&t=st=1709999975~exp=1710000575~hmac=82f39fa6fd3608c0c6d3b03c3dc7a504fa0d3ebba12af95e610c1a046f2a6a11',
        title: 'Training Digital Marketing',
        description: 'Tingkatkan keahlian Anda dalam pemasaran digital dengan pelatihan kami yang terkini. Pelajari strategi efektif untuk mengoptimalkan kampanye online Anda dan mencapai audiens yang lebih besar.',
        benefits: [
            {
                title: 'Pemahaman Mendalam tentang Digital Marketing',
                description: 'Pelajari strategi dan taktik terkini dalam pemasaran digital untuk menghasilkan hasil yang optimal bagi bisnis Anda.'
            },
            {
                title: 'Penerapan Praktis',
                description: 'Dengan sesi pelatihan yang interaktif, Anda akan mempraktekkan langsung strategi pemasaran digital dalam skenario dunia nyata.'
            },
            {
                title: 'Meningkatkan Visibilitas Online',
                description: 'Dapatkan pengetahuan yang Anda butuhkan untuk meningkatkan visibilitas dan kehadiran online bisnis Anda.'
            }
        ]
    },
    {
        imgUrl: 'https://img.freepik.com/free-vector/investor-with-laptop-monitoring-growth-dividends-trader-sitting-stack-money-investing-capital-analyzing-profit-graphs-vector-illustration-finance-stock-trading-investment_74855-8432.jpg?w=1060&t=st=1710000040~exp=1710000640~hmac=826c6c78c6d07890411850003551dc6eca3087c4e2f40ab1d3bce582991f899c',
        title: 'Training Digital Literasi Keuangan',
        description: 'Kuasai keterampilan keuangan digital untuk mengelola keuangan pribadi atau bisnis Anda dengan lebih efektif. Pelajari konsep dasar keuangan serta teknik praktis untuk merencanakan, mengelola, dan mengoptimalkan keuangan Anda.',
        benefits: [
            {
                title: 'Pemahaman Dasar Keuangan yang Kuat',
                description: 'Pelajari konsep dasar keuangan yang kuat untuk membantu Anda membuat keputusan keuangan yang bijaksana dan efektif.'
            },
            {
                title: 'Penerapan Konsep Keuangan dalam Kehidupan Nyata',
                description: 'Dengan latihan dan studi kasus, Anda akan mempraktekkan konsep keuangan dalam situasi kehidupan nyata.'
            },
            {
                title: 'Meningkatkan Kesejahteraan Finansial',
                description: 'Dapatkan alat dan strategi yang Anda butuhkan untuk mengelola keuangan pribadi atau bisnis Anda dengan lebih baik.'
            }
        ]
    },
    {
        imgUrl: 'https://img.freepik.com/free-vector/isometric-with-people-working-new-brand-strategy-3d-illustration_1284-63994.jpg?w=740&t=st=1710000087~exp=1710000687~hmac=3f171e16dec5ca038be9ea5d009438a6a1bed9503f3764e19a76db8c0b292716',
        title: 'Training Branding Produk',
        description: 'Pelajari cara membangun citra merek yang kuat dan memikat melalui pelatihan khusus kami. Dari identifikasi nilai unik hingga pengembangan strategi pemasaran, kami akan membantu Anda menciptakan brand yang menginspirasi dan dikenang.',
        benefits: [
            {
                title: 'Membangun Citra Merek yang Kuat',
                description: 'Pelajari teknik-teknik dan strategi-strategi yang diperlukan untuk membangun citra merek yang kuat dan meyakinkan.'
            },
            {
                title: 'Meningkatkan Daya Tarik Produk',
                description: 'Dengan memahami branding produk, Anda dapat meningkatkan daya tarik produk Anda di pasar dan meningkatkan penjualan.'
            },
            {
                title: 'Dikenang dan Menginspirasi',
                description: 'Dengan menciptakan merek yang menginspirasi dan dikenang, Anda dapat membedakan produk Anda dari pesaing dan menciptakan pengalaman yang berkesan bagi pelanggan.'
            }
        ]
    },
    {
        imgUrl: 'https://img.freepik.com/premium-vector/man-is-giving-speech-simple-flat-design-style_995281-5338.jpg?w=740',
        title: 'Publik Speaking',
        description: 'Tingkatkan keterampilan berbicara di depan umum Anda dengan pelatihan intensif kami. Dengan bimbingan langsung dari instruktur berpengalaman, Anda akan mengembangkan kepercayaan diri dan kemampuan untuk menyampaikan pesan Anda dengan jelas dan meyakinkan.',
        benefits: [
            {
                title: 'Peningkatan Keterampilan Berbicara di Depan Umum',
                description: 'Dengan pelatihan intensif, Anda akan meningkatkan keterampilan berbicara Anda di depan umum dan meningkatkan kepercayaan diri Anda.'
            },
            {
                title: 'Pengaruh yang Kuat',
                description: 'Dengan mempelajari teknik-teknik berbicara yang efektif, Anda dapat meningkatkan pengaruh Anda di berbagai situasi dan mencapai tujuan komunikasi Anda.'
            },
            {
                title: 'Koneksi yang Lebih Baik',
                description: 'Dengan mengembangkan kemampuan untuk menyampaikan pesan Anda dengan jelas dan meyakinkan, Anda dapat membangun koneksi yang lebih baik dengan audiens Anda.'
            }
        ]
    },
    {
        imgUrl: 'https://img.freepik.com/free-vector/hand-drawn-community-spirit-illustration_23-2150194851.jpg?w=996&t=st=1710000195~exp=1710000795~hmac=b3299e6ee1d09537c8373d862c3f8031cf35e01cba9f9e29a9a21a75d274c3bb',
        title: 'Kolaborasi',
        description: 'Jalin kemitraan yang saling menguntungkan dengan kami untuk mencapai tujuan bisnis Anda. Dari proyek kolaboratif hingga peningkatan jaringan, kami menyediakan platform untuk pertukaran ide dan peluang pertumbuhan yang tak terbatas.',
        benefits: [
            {
                title: 'Kemitraan yang Saling Menguntungkan',
                description: 'Bergabung dengan kami untuk menjalin kemitraan yang saling menguntungkan dan mencapai tujuan bisnis Anda bersama-sama.'
            },
            {
                title: 'Pertukaran Ide',
                description: 'Dengan berkolaborasi dengan berbagai pihak, Anda dapat memperluas wawasan dan mendapatkan perspektif baru yang dapat meningkatkan inovasi dan pertumbuhan bisnis Anda.'
            },
            {
                title: 'Peningkatan Jaringan',
                description: 'Dengan mengikuti proyek kolaboratif dan berpartisipasi dalam acara networking, Anda dapat memperluas jaringan profesional Anda dan meningkatkan peluang bisnis.'
            }
        ]
    }
];

export const Services = () => {
    return (
        <section id='Services' className='px-8 mx-auto w-full md:grid sm:grid-rows-1 justify-center' >
            <Typography variant='h2' component="h1" className='sm:mx-auto text-center' color="darkblue">
                <TypeAnimation
                    sequence={[
                        'Layanan Kami',
                        1000,
                        'Konsultan Bisnis', //  Continuing previous Text
                        1000,
                        'Training Digital Marketing',
                        1000,
                        'Training Digital Literasi Keuangan',
                        1000,
                        'Training Digital Branding Produk',
                        1000,
                        'Public Speaking',
                        1000,
                        'Kolaborasi',
                        1000,
                    ]}
                    repeat={Infinity}
                />
            </Typography>
            {services.map((service, index) => (
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    animate={{ y: 100 }}
                    transition={{
                        type: "spring",
                        duration: 2,
                    }}
                    key={index}
                    className="mt-5 justify-center"
                >
                    <CardAction
                        key={index}
                        imgUrl={service.imgUrl}
                        title={service.title}
                        description={service.description}
                    />
                </motion.div>
            ))
            }
        </section>
    )
}