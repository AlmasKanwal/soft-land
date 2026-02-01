import React from 'react'
import Pic1 from "../../assets/about2a.png";
import Pic2 from "../../assets/about2b.png";
import Pic3 from "../../assets/about2c.png";
import "./card2.css"


const Card2 = () => {
        const cards = [
        {
            id: 1,
            img: Pic1,
            icon: "bi bi-buildings",
            title: "Explore Your Team",
            desc: "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },

        {
            id: 2,
            img: Pic2,
            icon: "bi bi-clipboard-pulse",
            title: "Digital Whiteboard",
            desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        },

        {
            id: 3,
            img: Pic3,
            icon: "bi bi-command",
            title: "Design To Development",
            desc: "Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
        }
    ]
    return (
        <div className="about-2 d-flex gap-4">
            {cards.map(card => (
                <div className="card" key={card.id}>
                    <img
                        src={card.img}
                        className="card-img-top"
                        alt={card.title}
                    />
                    <div className="card-body about-body">
                        <span className='iconCont'><i className={card.icon}></i></span>
                        <h5 className="card-title">{card.title}</h5>
                        <p className="card-text">{card.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Card2