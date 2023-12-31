import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import "./style.css";
const Rating = ({ rating, onClick, style }) => {
    return (
        <>
            {[...Array(5)].map((_, i) => (
                <span key={i} onClick={() => onClick(i+1)} style={style}>
                    {rating > i ? (
                        <AiFillStar  fontSize="15px" />
                    ) : (
                        <AiOutlineStar  fontSize="15px" />
                    )}
                </span>
            ))}
        </>
    );
};

export default Rating;