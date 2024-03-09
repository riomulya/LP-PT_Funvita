import { Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import company from "../../../public/3d-digital.png"

export const Hero = () => {
    return (
        <section className='mt-32 hero'>
            <div className="lg:grid lg:grid-cols-2 mx-8 sm:block">
                <span className='my-auto'>
                    <Typography variant='h3' component="h3" color="darkBlue">
                        PT. Funvita Indonesia Investama
                    </Typography>
                    <Typography variant='h6' component="h6" color="darkslateblue">
                        Funvita Indonesia Perusahaan yang bergerak dalam bidang Training untuk pengembangan Kapasitas usaha meliputi Manajemen, Keuangan dan Pemasaran. Namun, tidak hanya itu kami juga mempunyai agency dalam Branding Produk, Perusahaan, Pembuatan Website dan Aplikasi.
                    </Typography>
                </span>
                <Image src={company} priority width={700} height={700} alt="Team With Us" className='justify-self-center' />
            </div>
        </section>
    )
}
