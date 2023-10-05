import { NavLink } from "react-router-dom";


const Home = () => {

    const bottn = <>
   <button className="btn btn-secondary"> <NavLink to="/job">Buy now</NavLink></button>
    </>
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="card w-78 bg-base-100 shadow-xl">
  <figure><img src="https://i.ibb.co/8xpy8fk/mike-von-t-C7-G9e-Tr-ORQ-unsplash.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
   {bottn}
    </div>
  </div>
</div>
          
        <div className="card w-78 bg-base-100 shadow-xl">
  <figure><img src="https://i.ibb.co/8xpy8fk/mike-von-t-C7-G9e-Tr-ORQ-unsplash.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
    {bottn}
    </div>
  </div>
</div>
          
        <div className="card w-78 bg-base-100 shadow-xl">
  <figure><img src="https://i.ibb.co/8xpy8fk/mike-von-t-C7-G9e-Tr-ORQ-unsplash.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
    {bottn}
    </div>
  </div>
</div>
          
        </div>
    );
};

export default Home;