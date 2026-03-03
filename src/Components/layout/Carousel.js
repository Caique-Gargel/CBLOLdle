// Componente Carousel modificado para receber produtos
import { useEffect, useRef, useState } from "react";
import styles from "./Carousel.module.css";
export default function Carousel({
  products = [], // Array de objetos { image, link, alt }
  autoPlay = true,
  interval = 5000
}) {
  const [index, setIndex] = useState(0);
  const total = Math.ceil(products.length / 3);
  const timeoutRef = useRef(null);

  function next() {
    setIndex((prev) => (prev + 1) % total);
  }

  function prev() {
    setIndex((prev) => (prev - 1 + total) % total);
  }

  useEffect(() => {
    if (!autoPlay) return;
    timeoutRef.current = setTimeout(next, interval);
    return () => clearTimeout(timeoutRef.current);
  }, [index, autoPlay, interval]);

  const handleProductClick = (link) => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <div className={styles.carousel} id="carrosel">
      <h1>Minha loja amazon</h1>
      <br/>
      <div
        className={styles.track}
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {Array.from({ length: total }, (_, slideIndex) => {
          const group = products.slice(slideIndex * 3, slideIndex * 3 + 3);

          return (
            <div className={styles.slide} key={slideIndex}>
              {group.map((product, i) => (
                <div 
                  className={styles.product} 
                  key={i}
                  onClick={() => handleProductClick(product.link)}
                 
                >
                  <img src={product.image} alt={product.alt || 'Produto'} />
                </div>
              ))}
            </div>
          );
        })}
      </div>

      <button className={styles.prev} onClick={prev}>‹</button>
      <button className={styles.next} onClick={next}>›</button>

      <div className={styles.dots}>
        {Array.from({ length: total }, (_, i) => (
          <span
            key={i}
            className={`${styles.dot} ${i === index ? styles.active : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}