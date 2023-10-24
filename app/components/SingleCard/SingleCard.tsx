import Image, { StaticImageData } from "next/image";
import styles from './SingleCard.module.css';
import Cover from '@/public/images/cover.png';

interface Props {
    card:{
            id: number,
            src: StaticImageData
            flipped: boolean,
            disabled: boolean
         },
    handleChoice: Function
}

const SingleCard = ({card, handleChoice}: Props) => {
    const handleClick = () => {
        if(!card.disabled)
            handleChoice(card)
    }

  return (
    <div className={styles.card}>
        <div className={card.flipped ? styles.flipped: ""}>
            <Image className={styles.front} src={card.src} alt="card front" />
            <Image 
                className={styles.back}
                src={Cover}
                // onClick={handleClick} 
                alt="card back" />
        </div>
    </div>
  )
}

export default SingleCard