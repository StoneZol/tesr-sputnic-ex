import styles from './ProducrCard.module.css'
import { memo } from 'react';
import type { ProductCardProps } from './ProductCard.types';

const usd = 78.50
const eur = 90.78
const allowedCurrency = ['RUB', 'USD', 'EUR']

const ProductCard = (props: ProductCardProps) => {

    if (!props) return <>...</>

    const convertCurrency = (price: number, currency: string): number => {
        const rubAmount = price / 100;

        switch (currency) {
            case 'USD':
                return +(rubAmount / usd).toFixed(2);
            case 'EUR':
                return +(rubAmount / eur).toFixed(2);
            default:
                return +rubAmount.toFixed(2);
        }
    };

    const formattedPrice = new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: allowedCurrency.includes(props.currency) ? props.currency : 'RUB',
        minimumFractionDigits: 2
    }).format(convertCurrency(props.price, props.currency));

    return (
        <article className={styles.article}>
            <figure className={styles.figure}>
                <img className={styles.img} src={props.imageUrl} alt={props.title} />
                <figcaption className={styles.figcaption}>{props.origin}</figcaption>
            </figure>
            <header className={styles.header}>
                <h2 className={styles.h2}>{props.title}</h2>
                <p className={styles.p}><strong>{formattedPrice}</strong></p>
            </header>
        </article>
    );
}

export default memo(ProductCard);
