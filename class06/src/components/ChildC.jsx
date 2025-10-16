import { Data } from '../App'
const ChildC = () => {


    return (
        <Data.Consumer>
            {
                (userName) => (
                    <h1> YOUR FATHER NAME IS {userName}</h1>
                )
            }

        </Data.Consumer>



    )
}

export default ChildC