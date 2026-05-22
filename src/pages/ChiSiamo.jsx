import { useState, useEffect } from 'react'


export default function ChiSiamo() {


    const chiSiamoApi = "https://api.magicthegathering.io/v1/cards"

    const [members, setMembers] = useState([])

    useEffect(() => {

        fetch(chiSiamoApi)
            .then(r => r.json())
            .then(data => {
                // console.log(data);
                setMembers(data.cards);
            })
    }, [])





    return (

        <>

            <div className="p-1 main-wrapper">
                <div className="container-fluid py-1">
                    <h1 className="display-5 fw-bold text-white text-center mb-3">Il NOSTRO TEAM, SEMPRE AL TUO SERVIZIO.</h1>

                    <div className="row d-flex justify-content-center gap-3 left">

                        {members
                            .filter(member => member.imageUrl)
                            .map(member => (


                                <div className="card glass-card" style={{ maxWidth: "540px" }} key={member.id}>
                                    <div className="row g-0">
                                        <div className="col-md-4 p-3">
                                            <img src={member.imageUrl} className="img-fluid rounded-start shadow-lg" alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title team-text">{member.name}</h5>
                                                <p className=" text-body-custom">Ruolo: {member.type}</p>
                                                <p className="team-presentation-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus odit veritatis consectetur facere fugiat beatae, ducimus sunt harum magni aperiam ex dolores tempore, voluptates dolor incidunt ipsum corporis dignissimos?</p>
                                                <p className="card-text fs-6 fst-italic text-body-custom">Contact: email.address@address.gigghy</p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>




                </div>
            </div>

        </>

    )
}