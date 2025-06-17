import './App.css'
import { ProductCard } from './components/ProductCard';


const mockProduct = {
    title: "Шоколад молочный",
    origin: "Россия",
    price: 34900,
    currency: "RUB",
    imageUrl: "https://img.vkusvill.ru/pim/images/site_LargeWebP/5fcadf9e-dce7-4f1b-bfba-4a4bd7a085e8.webp?1706405390.497"
  };

function App() {


  return (
    <>
<ProductCard {...mockProduct}/>
    </>
  )
}

export default App
