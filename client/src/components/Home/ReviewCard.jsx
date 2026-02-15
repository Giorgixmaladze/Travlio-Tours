import { FaStar } from "react-icons/fa";


const ReviewCard = ({review}) =>{
    return(
        <div className="flex flex-col items-center gap-3">
            <img className="rounded-[50%] w-[80px] h-[80px]" src={review.image} alt="" />
            <h2>{review.reviewer.name}</h2>  
            <p className="text-gray-600">{review.reviewer.position}</p>          
            <span className="flex gap-2">{Array.from({length:review.rating}).map((_,i) => <FaStar key={i} className="text-yellow-500"/>)}</span>
            <p className="text-gray-600 text-center w-10/12">{review.comment}</p>
        </div>
    ) 
}

export default ReviewCard
