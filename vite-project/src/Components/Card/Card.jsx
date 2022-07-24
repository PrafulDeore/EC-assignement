import React, {useEffect, useState} from "react"
import "./card.css"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { sliderData } from "../../Redux/Action/SliderAction";


export const Cards = () => {


    
        const dispatch = useDispatch();
    
    
        useEffect(() => {
            dispatch(sliderData())
        }, [])
    
        const slector = useSelector((store) => store.sliderReducer.payload);
        console.log("slector:", slector)
    

    return <>
    {
        slector ? slector.data.results.map((e) =>(
        
        
        <Link to={`/movie/${e.id}`} style={{textDecoration:"none", color:"white"}}>
            <div className="cards">
                <img className="cards__img" src={`https://image.tmdb.org/t/p/original${e?e.poster_path:""}`} />
                <div className="cards__overlay">
                    <div className="card__title">{e?e.original_title:""}</div>
                    <div className="card__runtime">
                        {e?e.release_date:""}
                        <span className="card__rating">{e?e.vote_average:""}<i className="fas fa-star" /></span>
                    </div>
                    <div className="card__description">{e ? e.overview.slice(0,118)+"..." : ""}</div>
                </div>
            </div>
        </Link>
        )


        ):""
    }
    </>
}
    
