// 'use client';
'use client';
import React, { useEffect, useState } from 'react';
import Image, { StaticImageData } from "next/image";
import styles from "./CardGrid.module.css";
import SingleCard from '../SingleCard/SingleCard';
import CuteEgg from '@/public/images/Cute Egg.png';
import { DisplayCard } from '@/app/models/DisplayCard';

//Start here: https://members.codewithmosh.com/courses/mastering-next-js-13-with-typescript/lectures/49120547
//TODO: Add this: https://www.youtube.com/watch?v=DCRcFf39SYo
export default function CardGrid() {
  const [cards, setCards] = useState<DisplayCard[]>([]);
  
  //This is causing the flipping animation not to play, figure out why
  useEffect(() => {
    //TODO: Set these on the backend?
    //fetch(process.env.CARD_DATA_URL) or something
    const newCards: DisplayCard[] = [
        {
            id: 1,
            src: CuteEgg,
            flipped: false,
            disabled: false
        },
        {
            id: 2,
            src: CuteEgg,
            flipped: false,
            disabled: false
        },
        {
            id: 3,
            src: CuteEgg,
            flipped: false,
            disabled: false
        },
    ];

    setCards(newCards);
  }, []);
  
  const handleChoice = (displayCard: DisplayCard) => {
    console.log("Not implemented")
    const changedCards: DisplayCard[] = cards.map(card => {
        if (card.id === displayCard.id) {
            return {
                id: card.id,
                src: card.src,
                flipped: true,
                disabled: card.disabled
            };
        }
        return card;
    });

    setCards(changedCards);
  }

  return (
    <div className={styles.cardGrid}>
        {cards.map(card => (
            <SingleCard 
                key={card.id} 
                card={card} 
                handleChoice={handleChoice}                
            />
        ))} 
    </div>
  )
}
