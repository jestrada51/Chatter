import { useState } from 'react'
import '../css/App.css'
import { useParams } from 'react-router-dom'

function DashboardItem(){

    const { id } = useParams();

    return(

        <>
            <h1>Dashboard item {id}</h1>
        </>

    )

}

export default DashboardItem