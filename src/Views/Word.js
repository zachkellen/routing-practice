import { useParams } from "react-router"

const Word = (props) => {
    const {word} = useParams();

    return (
        <h1>Your word is: {word}</h1>
    )
}

export default Word;