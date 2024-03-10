import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Image from 'next/image';

interface CardProps {
    imgUrl: string,
    title: string,
    description: string
}

interface propsAccordion {
    tittle1: string,
    description1: string,
    tittle2: string,
    description2: string,
    tittle3: string,
    description3: string,
}


export default function CardAction({ imgUrl, title, description }: CardProps, { tittle1, description1, tittle2, description2, tittle3, description3 }: propsAccordion) {
    return (
        // <PinContainer>
        <Card sx={{ maxWidth: 900, minWidth: 300 }}>
            <CardActionArea className='md:flex'>
                {/* <CardMedia
                    component="img"
                    height="100"
                    // width={500}
                    image={imgUrl}
                    alt={title}
                /> */}
                <Image src={imgUrl} width={400} height={400} priority alt={title} className="sm:mx-auto" />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        // </PinContainer >
    );
}