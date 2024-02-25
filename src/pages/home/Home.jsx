import Card from "../../componants/card/Card.jsx"
import  "./home.css"

export default function Home(){   
     return (
      <div  className="containerPgHome flex flex-col h-screen  items-center justify-center ">
        <Card 
        title="Cosmic Adventure Backpack" 
        details="Embark on an interstellar journey with our Cosmic Adventure Backpack. Designed for the modern explorer, this backpack combines durability, style, and functionality. With multiple compartments and a sleek design, it's perfect for carrying all your essentials while you reach for the stars."
        prix="79.99"
        />
        
        </div> 



)
}