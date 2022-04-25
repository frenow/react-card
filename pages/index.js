import React, { useEffect, useState } from "react";
import axios from 'axios';
import styles from '../styles/Home.module.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function Home() {
  const [card, setCard] = useState([]);

  useEffect(() => {
    axios.get('https://api.adviceslip.com/advice').then((response) => {
      setCard(response.data.slip.advice);
    });
  }, []);

  return (
    <>
    <div className={styles.container}>
      <main className={styles.main}>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image="https://picsum.photos/200/300"
        alt="picsum"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {card}
        </Typography>
      </CardContent>

    </Card>
      </main>
    </div>
    </>
  )
}
