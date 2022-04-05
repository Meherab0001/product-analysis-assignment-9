import { useEffect, useState } from "react"

const useReviews =() =>{
    const [reviews,setReviews]=useState([])
    useEffect(() =>{
        fetch('https://raw.githubusercontent.com/Meherab0001/reviews.json/acd79a0565909c83691e5a6b9a6e64f9768a46cd/reviews-data.json')
        .then(res =>res.json())
        .then(data =>setReviews(data))
    },[])

    return [reviews,setReviews]
}

export default useReviews