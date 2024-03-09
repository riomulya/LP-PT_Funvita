import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


interface CardProps {
    imgUrl: string,
    title: string,
    description: string
}

export default function CardAction({ imgUrl, title, description }: CardProps) {
    return (
        <Card sx={{ maxWidth: 300, minWidth: 300 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="100"
                    // width={500}
                    image={imgUrl}
                    alt={title}
                />
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
    );
}