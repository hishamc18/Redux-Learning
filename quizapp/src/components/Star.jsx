import React, { useState } from "react";

function Star() {
    const [rating, setRating] = useState();

    const handleRating = (value) => {
        setRating(value);
    };

    return (
        <div>
            {[1, 2, 3, 4, 5].map((star) => (
                <span
                    key={star}
                    onClick={() => {handleRating(star)}}
                    style={{ padding: "15px", fontSize: "10em", color: star <= rating ? "gold" : "gray" }}
                >
                    {" "}
                    *
                </span>
            ))}
        </div>
    );
}

export default Star;
