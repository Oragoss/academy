import Image, { StaticImageData } from "next/image";
import styles from './SingleCard.module.css';
import Cover from '@/public/images/cover.png';
import { DisplayCard } from "@/app/models/DisplayCard";

interface Props {
    card: DisplayCard,
    handleChoice: Function
}

const SingleCard = ({card, handleChoice}: Props) => {
    const handleClick = () => {
        if(!card.disabled)
            handleChoice(card)
        console.log(`${card.id} was clicked`)
    }

  return (
    <div className={styles.card}>
        <div className={card.flipped ? styles.flipped: ""}>
            <Image className={styles.front} src={card.src} alt="card front" />
            <Image 
                className={styles.back}
                src={Cover}
                onClick={handleClick} 
                alt="card back" />
        </div>
    </div>
  )
}

export default SingleCard