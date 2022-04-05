import { useEffect, useState } from "react"

const useReviews =() =>{
    const [reviews,setReviews]=useState([])
    useEffect(() =>{
        fetch('https://raw.githubusercontent.com/Meherab0001/reviews.json/main/reviews-data.json')
        .then(res =>res.json())
        .then(data =>setReviews(data))
    },[])

    return [reviews,setReviews]
}

export default useReviews