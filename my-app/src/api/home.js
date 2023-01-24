import { useContext, useState } from "react";
import { ApiContext } from "../apiContext";



const Home = () => {
    const api = useContext(ApiContext);
    const [player, setPlayer] = useState([])
    api.getPlayer().then((data) => {setPlayer(data.players)})
    return (
        <div>
            {player.map((player) => (
                <div key={player.tag}>
                    <p>{player.tag}</p>
                </div>
            ))}
        </div>
        
    );
}

export default Home;