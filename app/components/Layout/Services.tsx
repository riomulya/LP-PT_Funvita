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
        imgUrl: '../../public/3d-team.png',
        title: 'Konsultan Bisnis',
        description: 'Dapatkan panduan langsung dari para ahli kami untuk meningkatkan kinerja bisnis Anda. Dari strategi pengembangan hingga implementasi praktis, kami siap membantu Anda mencapai tujuan bisnis Anda.'
    },
    {
        imgUrl: 'url_gambar_training_digital_marketing',
        title: 'Training Digital Marketing',
        description: 'Tingkatkan keahlian Anda dalam pemasaran digital dengan pelatihan kami yang terkini. Pelajari strategi efektif untuk mengoptimalkan kampanye online Anda dan mencapai audiens yang lebih besar.'
    },
    {
        imgUrl: 'url_gambar_training_digital_literasi_keuangan',
        title: 'Training Digital Literasi Keuangan',
        description: 'Kuasai keterampilan keuangan digital untuk mengelola keuangan pribadi atau bisnis Anda dengan lebih efektif. Pelajari konsep dasar keuangan serta teknik praktis untuk merencanakan, mengelola, dan mengoptimalkan keuangan Anda.'
    },
    {
        imgUrl: 'url_gambar_training_branding_produk',
        title: 'Training Branding Produk',
        description: 'Pelajari cara membangun citra merek yang kuat dan memikat melalui pelatihan khusus kami. Dari identifikasi nilai unik hingga pengembangan strategi pemasaran, kami akan membantu Anda menciptakan brand yang menginspirasi dan dikenang.'
    },
    {
        imgUrl: 'url_gambar_publik_speaking',
        title: 'Publik Speaking',
        description: 'Tingkatkan keterampilan berbicara di depan umum Anda dengan pelatihan intensif kami. Dengan bimbingan langsung dari instruktur berpengalaman, Anda akan mengembangkan kepercayaan diri dan kemampuan untuk menyampaikan pesan Anda dengan jelas dan meyakinkan.'
    },
    {
        imgUrl: 'url_gambar_kolaborasi',
        title: 'Kolaborasi',
        description: 'Jalin kemitraan yang saling menguntungkan dengan kami untuk mencapai tujuan bisnis Anda. Dari proyek kolaboratif hingga peningkatan jaringan, kami menyediakan platform untuk pertukaran ide dan peluang pertumbuhan yang tak terbatas.'
    }
];



export const Services = () => {

    return (
        <section id='Services' className='px-8 mx-auto w-full md:grid xl:grid-cols-3 md:grid-cols-2 xl:gap-6 sm:grid-rows-1 justify-center'>
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
                    className="my-3 xl:m-0 mx-auto"
                >
                    <CardAction
                        key={index}
                        imgUrl="../../../public/3d-team.png"
                        title={service.title}
                        description={service.description}
                    />
                </motion.div>

            ))
            }
        </section >
    )
}
