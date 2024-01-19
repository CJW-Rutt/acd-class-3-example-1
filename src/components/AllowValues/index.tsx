import { useState } from "react"

export default function AllowValues() {
    
    const[pill, setPill] = useState<"red" | "blue">();

    return(
        <>
            <button onClick={() => setPill("red")}>Red pill</button>
            <button onClick={() => setPill("blue")}>Blue pill</button>
            {/* <button onClick={() => setPill("purple")}>Purple pill</button> */}
            <span>You chose the {pill} pill!</span>
        </>
    )
}