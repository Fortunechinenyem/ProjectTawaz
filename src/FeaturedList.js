import React from "react";

const FeaturedList = () => {
    return(
        <article>
            <div className="card w-75 ms-auto">
            <div className="card-body">
            <h5 className="card-title">Our Menu</h5>
    
            </div>
            <ul className="list-group list-group-flush">
            <li className="list-group-item"><button className="btn bg-warning">+</button><button className="btn bg-warning">-</button>
                Bread & choice Tea with eggs  (boiled or fried)</li>
            <li className="list-group-item"><button className="btn bg-warning">+</button><button className="btn bg-warning">-</button>
                Bread & choice Tea</li>
            <li className="list-group-item"><button className="btn bg-warning">+</button><button className="btn bg-warning">-</button>
                Toasted bread and Tea with sausages</li>
            <li className="list-group-item"><button className="btn bg-warning">+</button><button className="btn bg-warning">-</button>
                Toasted bread & tea with eggs (boiled or fried) and fruits</li>
            <li className="list-group-item"><button className="btn bg-warning">+</button><button className="btn bg-warning">-</button>
                Tea and pancakes</li>
            <li className="list-group-item"><button className="btn bg-warning">+</button><button className="btn bg-warning">-</button>
                Choice pap and akara (Bean cake)</li>
            <li className="list-group-item"><button className="btn bg-warning">+</button><button className="btn bg-warning">-</button>
                Choice pap and moi-moi</li>
            <li className="list-group-item"><button className="btn bg-warning">+</button><button className="btn bg-warning">-</button>
                Meat pies and fresh fruit juice</li>
            <li className="list-group-item"><button className="btn bg-warning">+</button><button className="btn bg-warning">-</button>
                Puff-puff or buns with choice Tea/juice</li>
            <li className="list-group-item"><button className="btn bg-warning">+</button><button className="btn bg-warning">-</button>
                Doughnuts with fresh fruit juice/tea</li>
            <li className="list-group-item"><button className="btn bg-warning">+</button><button className="btn bg-warning">-</button>
                Samosa/spring rolls with tea or fresh juice</li>
            <li className="list-group-item"><button className="btn bg-warning">+</button><button className="btn bg-warning">-</button>
                Chips and egg sauce with tea</li>
            <li className="list-group-item"><button className="btn bg-warning">+</button><button className="btn bg-warning">-</button>

            </li>
            
            </ul>
            <div className="card-body">
            <button><a href="#" className="card-link btn bg-warning">Make An Order</a></button>
    
  </div>
</div>
        </article>
    )

}  

export default FeaturedList;