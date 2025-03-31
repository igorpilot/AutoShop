import * as React from 'react';
import Card, {CardProps} from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

type SaleCardProps ={
    image:string,
    alt: string,
    head: string,
    description:string,
    button: string,
    price: any
}
export default function SaleCard(props: SaleCardProps) {
    return (
        <Card sx={{ maxWidth: 345, padding: '5px', margin: '5px' }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={props.image}
                    alt={props.alt}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.head}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {props.description}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {props.price} $
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    {props.button}
                </Button>
            </CardActions>
        </Card>
    );
}