import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { sliderData } from "../../Redux/Action/SliderAction"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import "./Slider.css"
import { Cards } from "../Card/Card";


export const Sliderr = () => {
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(sliderData())
    }, [])

    const slector = useSelector((store) => store.sliderReducer.payload);
    // console.log("slector:", slector)
    const search = useSelector((store) => store.navabarSearch_Reducer.payload);
    console.log("search:", search)

    return (

        <div className="mainOuterDiv" >
            <div className="searchList">
                {
                    search? search.data.results.map((e)=>(
                        <Link style={{ textDecoration: "none", color: "white" }} to={`/movie/${e.id}`} >
                         <div className="searchDiv" >
                                    <img style={{ width:"25%",height:"98%" }}  src={`https://image.tmdb.org/t/p/original${e && e.backdrop_path}`} />
                                    <div className="search_title">{e.original_title}</div>
                                </div>
                        </Link>
                    )
                    
                    ):""
                }       </div>

            <div className="poster"
                style={{ border: "0px solid red", top: "0", opacity: "0.8" }}>
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                    axis={"horizontal"}
                    swipeable={true}
                    useKeyboardArrows={true}



                >
                    {
                        slector ? slector.data.results.map((e) => (
                            <Link style={{ textDecoration: "none", color: "white" }} to={`/movie/${e.id}`} >
                                <div className="posterImage">
                                    <img src={`https://image.tmdb.org/t/p/original${e && e.backdrop_path}`} />
                                </div>
                                <div className="posterImage__overlay">
                                    <div className="posterImage__title">{e ? e.original_title : ""}</div>
                                    <div className="posterImage__runtime">
                                        {e ? e.release_date : ""}
                                        <span className="posterImage__rating">
                                            {e ? e.vote_average : ""}
                                            <i className="fas fa-star" />{" "}
                                        </span>
                                    </div>
                                    <div className="posterImage__description">{e ? e.overview : ""}</div>
                                </div>
                            </Link>
                        )






                        ) : ""
                    }
                </Carousel>
            </div>
            <Cards />





        </div>
    )
}

