"use client"

import { Box, Button, Modal, Snackbar, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import company from "../../public/3d-digital.png"
import { TypeAnimation } from 'react-type-animation';
import { SlideTransition } from '../ui/SnackBar'
// import { TextGenerateEffect } from '../ui/TextGenerateEffect'

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
};

export const Hero = () => {
    const [open, setOpen] = React.useState(false);
    const [openMessage, setOpenMessage] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleCloseMessage = () => setOpenMessage(false)
    const handleOpenMessage = () => setOpenMessage(true)

    const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleClose()
        handleOpenMessage()
    }

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
                    {/* <TextGenerateEffect words='Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tenetur voluptates quos asperiores et laborum rem incidunt ab quibusdam consectetur accusantium laboriosam repudiandae facere consequatur blanditiis ratione hic, in ullam cumque amet voluptas culpa quia eos. Debitis eveniet aspernatur laboriosam, nostrum fugit inventore dolore omnis quaerat quos sed officiis ex eaque sequi vitae dignissimos neque iusto quo doloremque aperiam! Natus saepe odit sint ad necessitatibus. Fugiat odit facere reprehenderit iste, at adipisci natus quibusdam dolores perspiciatis aut maiores! Repellendus molestiae, nostrum natus et, ab enim placeat architecto reprehenderit nesciunt dolor quibusdam similique, numquam impedit voluptatibus dolores nemo laboriosam in. Minima?' className='color' /> */}
                    <Button onClick={handleOpen} variant='contained' className=' animate-pulse mt-10' sx={{ fontSize: "1em", color: "darkblue" }} >Hubungi Kami</Button>
                </span>
                <Image src={company} priority width={700} height={700} alt="Team With Us" className='my-auto' />
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="w-full max-w-xs mx-auto">
                        <form onSubmit={handleForm} className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none"
                                    id="name"
                                    type="text"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none"
                                    id="email"
                                    type="email"
                                    placeholder="Your Email"
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="message">
                                    Message
                                </label>
                                <textarea
                                    className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none"
                                    id="message"
                                    placeholder="Your Message"
                                ></textarea>
                            </div>
                            <div className="flex items-center justify-between">
                                <button
                                    className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none"
                                    type="submit"
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </Box>
            </Modal >
            <Snackbar
                open={openMessage}
                onClose={handleCloseMessage}
                TransitionComponent={SlideTransition}
                message="Terima Kasih! Harap Tunggu Pesan dibalas!"
                autoHideDuration={1200}
            />
        </section >
    )
}
