"use client";
import { CardStack } from "../ui/CardStack";
import { cn } from "@/utils/cn";
import { Typography } from "@mui/material";
import { TypeAnimation } from "react-type-animation";

export function Testimonial() {
    return (
        <section id="Customer" className="h-10 md:grid grid-cols-1 w-full my-80">
            <Typography variant='h4' component="h4" color="darkBlue" className="text-center mb-32">
                <TypeAnimation
                    sequence={[
                        'Apa',
                        1000,
                        'Apa Kata', //  Continuing previous Text
                        1000,
                        'Apa Kata Mereka',
                        1000,
                        'Apa Kata Mereka Tentang',
                        1000,
                        'Apa Kata Mereka Tentang Kami?',
                        1000,
                    ]}
                    // deletionSpeed=""
                    // style={{ fontSize: '2em' }}
                    repeat={Infinity}
                />
                {/* PT. Funvita Indonesia */}
            </Typography>
            <CardStack items={CARDS} />
        </section>
    );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <span
            className={cn(
                "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
                className
            )}
        >
            {children}
        </span>
    );
};



const CARDS = [
    {
        id: 0,
        name: "Diana Sutanto",
        designation: "CEO, Sutanto Enterprises",
        content: (
            <p>
                Mereka memberikan panduan praktis untuk <Highlight>meningkatkan kinerja bisnis kami</Highlight>.
            </p>
        ),
    },
    {
        id: 1,
        name: "Ahmad Subagio",
        designation: "Marketing Manager, Subagio Group",
        content: (
            <p>
                Pelatihan digital marketing yang saya ikuti di sini sungguh membuka mata saya terhadap strategi pemasaran terkini.
            </p>
        ),
    },
    {
        id: 2,
        name: "Fitriani Hartono",
        designation: "Owner, Hartono Consulting",
        content: (
            <p>
                Saya sangat puas dengan pelatihan digital literasi <Highlight>keuangan</Highlight> yang diselenggarakan oleh tim ini.
            </p>
        ),
    },
    {
        id: 3,
        name: "Andreas Susanto",
        designation: "Product Manager, Susanto Brands",
        content: (
            <p>
                Pelatihan branding produk yang saya ikuti di sini benar-benar membantu saya memahami cara <Highlight>membangun citra merek</Highlight>.
            </p>
        ),
    },
    {
        id: 4,
        name: "Bambang Soemarsono",
        designation: "Public Speaking Coach",
        content: (
            <p>
                Saya melihat peningkatan yang signifikan dalam <Highlight>keterampilan berbicara</Highlight> di depan umum.
            </p>
        ),
    },
    {
        id: 5,
        name: "Larasati Wijaya",
        designation: "Business Development Manager",
        content: (
            <p>
                Kami telah menjalin kemitraan yang <Highlight>saling menguntungkan</Highlight> dan mendapatkan banyak ide segar untuk pertumbuhan bisnis kami.Terima kasih banyak atas dukungannya!
            </p>
        ),
    },
];
