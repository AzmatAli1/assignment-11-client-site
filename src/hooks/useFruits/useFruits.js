import { useEffect, useState } from "react";

const useFruits = () => {
    const [fruits, setFruits] = useState([]);

    useEffect(() => {
        const url = `https://infinite-springs-96070.herokuapp.com/fruits`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFruits(data));
    }, []);

    return [fruits, setFruits];
}
export default useFruits;