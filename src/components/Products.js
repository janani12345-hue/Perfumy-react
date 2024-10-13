import one from "../assets/image/perfumeimg1.png";
import two from "../assets/image/perfumeimg2.png";
import three from "../assets/image/perfumeimg3.png";
function Products(){
    return(
      <main className="products">
      <div class="products__img1" alt="imag1">
          <img src={one}></img>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim maximeLorem ipsum dolor sit, amet consectetur adipisicing elit. Enim maxime  </p>
      </div>
      <div className="products__img1" alt="image2">
          <img src={two}></img>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim maximeLorem ipsum dolor sit, amet consectetur adipisicing elit. Enim maxime  </p>
          
      </div>
      <div className="products__img1" alt="image2">
          <img src={three}></img>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim maximeLorem ipsum dolor sit, amet consectetur adipisicing elit. Enim maxime  </p>
          
          
      </div>
  
  </main>
    )
  
  }
export default Products