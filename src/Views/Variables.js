import { useParams } from "react-router"

const Variables = (props) => {
    const {word, font, background} = useParams();

    // let myStyle = {
    //     color: {font};
    //     backgroundColor: {background}
    // }
    return(
        <h1 style={{color: font, backgroundColor: background}}>Your word is: {word}</h1>
    )
}

export default Variables;