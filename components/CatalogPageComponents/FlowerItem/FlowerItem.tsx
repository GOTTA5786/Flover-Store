import AddToCartBtn from '@/components/AddToCartBtn/AddToCartBtn'
import { oswaldo } from '@/fonts/fonts'
import Image from 'next/image'
import styles from './FlowerItem.module.css'

export interface IFlower{
  flower_id:number;
  title:string;
  price:number;
  sale:boolean;
  saleprice:number;
  description:string;
  pathtoimg:string;
  color:string;
  brighness:string;
  format:string;
  category:string
      
}
export default function FlowerItem( prop:IFlower) {
  return (
    <div className={styles.cardContainer}>
          {prop.sale && <span className={styles.onSale + ' ' + oswaldo.className}>Sale</span>}
        <div className={styles.imageContainer}>
            
            <Image className={styles.picture}
                alt = 'default'
                src = {`/Items_images/${prop.pathtoimg}.png`}
                fill={true}></Image>
        </div>
        <p className={styles.title + ' ' + oswaldo.className}>{prop.title}</p>
        <div>
            {prop.sale ? <div className={styles.price + ' ' + oswaldo.className}><p className={styles.newPrice}>{prop.saleprice} ₽</p><p className={styles.oldPrice}>{prop.price} ₽</p></div>
            : <p className={styles.newPrice + ' ' + oswaldo.className}>{prop.price} ₽</p>}
        </div>
        <AddToCartBtn/>
    </div>
  )
}
