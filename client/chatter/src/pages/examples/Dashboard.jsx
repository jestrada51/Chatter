import { useState } from 'react'
import '../css/App.css'
import { Link } from "react-router-dom"

function Dashboard(){


    const dashboardItems = [
        {id:1, title: "My Profile",},
        {id:2, title: "My Project"},
        {id:3, title: "My Teams"}
    ]


    return(

        <>
            <h1>Dashboard page</h1>
            <ul>
                {dashboardItems.map((item) => (
                    <li key={item.id}>
                        <Link to={`/dashboard/${item.id}`}>
                            <p>{item.title}</p>
                        </Link>
                    </li>
                ))}
            </ul>

        </>
    )

}

export default Dashboard