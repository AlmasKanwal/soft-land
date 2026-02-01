import React from 'react'
import "./card1.css"

const Cards1 = () => {
    const cards = [
        {
            id: 1,
            icon: "bi bi-buildings",
            title: "Eius provident",
            desc: "Magni repellendus vel ullam hic officia accusantium ipsa dolor omnis dolor voluptatem"
        },

        {
            id: 2,
            icon: "bi bi-clipboard-pulse",
            title: "Rerum aperiam",
            desc: "Autem saepe animi et aut aspernatur culpa facere. Rerum saepe rerum voluptates quia"
        },

        {
            id: 3,
            icon: "bi bi-command",
            title: "Veniam omnis",
            desc: "Omnis perferendis molestias culpa sed. Recusandae quas possimus. Quod consequatur corrupti"
        },
        {
            id: 4,
            icon: "bi bi-graph-up-arrow",
            title: "Delares sapiente",
            desc: "Sint et dolor voluptas minus possimus nostrum. Reiciendis commodi eligendi omnis quideme lorenda"
        }
    ]
    return (
        <>
            <div className="cardsContainer">
                {
                    cards?.map((card, i) => (
                        <div className="card" key={i + card.id}>
                            <div className="card-body">
                                <span className='iconCont'><i className={card.icon}></i></span>
                                <h5 className="card-title">{card.title}</h5>
                                <p className="card-text">{card.desc}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Cards1