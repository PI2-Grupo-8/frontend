import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const VehicleCard = ({ vehicle }) =>  {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {vehicle.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {vehicle.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {vehicle.updatedAt}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default VehicleCard;
