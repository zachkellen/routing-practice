import { useParams } from "react-router"

const Number = (props) => {

    const {num} = useParams();

    return (
        <h1>{isNaN(num) ? 'Your word is: ' + num : "Your number is: " + num}</h1>
        // Your number is: {isNaN(num) ? 0 : num}
    )
}

export default Number;