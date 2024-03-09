"use client"

import { Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import company from "../../public/3d-digital.png"
import { TypeAnimation } from 'react-type-animation';


export const Hero = () => {
    return (
        <section className='my-40' id='hero profile-company'>
            <div className="lg:grid lg:grid-cols-2 mx-8 sm:block">
                <span className='my-auto'>
                    <Typography variant='h3' component="h3" color="darkBlue">
                        <TypeAnimation
                            sequence={[
                                'PT.',
                                1000,
                                'PT. Funvita', //  Continuing previous Text
                                1000,
                                'PT. Funvita Indonesia',
                                1000,
                            ]}
                        // deletionSpeed=""
                        // style={{ fontSize: '2em' }}
                        />
                        {/* PT. Funvita Indonesia */}
                    </Typography>
                    <Typography className='mt-4' variant='h6' component="h6" color="darkslateblue">
                        <TypeAnimation
                            splitter={(str) => str.split(/(?= )/)} // 'Lorem ipsum dolor' -> ['Lorem', ' ipsum', ' dolor']
                            sequence={[
                                'Funvita Indonesia adalah Perusahaan Rintisan yang bergerak dibidang Training dan Development. Perusahaan ini berdiri sejak tahun 2020 dimana disaat itu pandemi COVID - 19 melanda Indonesia. Tidak hanya itu, kami juga memberikan Training untuk skema Digital Marketing dan juga skema keuangan bisnis untuk  perusahaan.Lebih dari 100 perusahaan telah kami kembangkan dan telah bekerjasama dengan kami.',
                                3000,
                                'Funvita Indonesia adalah Perusahaan Rintisan yang bergerak dibidang Training dan Development. Perusahaan ini berdiri sejak tahun 2020 dimana disaat itu pandemi COVID - 19 melanda Indonesia. Tidak hanya itu, kami juga memberikan Training untuk skema Digital Marketing dan juga skema keuangan bisnis untuk  perusahaan.Lebih dari 100 perusahaan telah kami kembangkan dan telah bekerjasama dengan kami.',
                            ]}
                            // speed={{ type: 'keyStrokeDelayInMs', value: 100 }}
                            // omitDeletionAnimation={true}
                            // style={{ fontSize: '1em', display: 'block', minHeight: '200px' }}
                            // repeat={0}
                            deletionSpeed={1}
                            omitDeletionAnimation={false}
                        />
                    </Typography>
                    {/* <Typography className='mt-4' variant='h6' component="h6" color="darkslateblue"> */}
                    {/* </Typography> */}
                </span>
                <Image src={company} priority width={700} height={700} alt="Team With Us" className='my-auto' />
            </div>
        </section >
    )
}
