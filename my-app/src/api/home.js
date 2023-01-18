import { useContext, useState } from "react";
import { ApiContext } from "../apiContext";



const Home = () => {
    const api = useContext(ApiContext);
    const [photo, setPhoto] = useState([])
    api.getPhoto().then((data) => {setPhoto(data.photos)})
    return (
        <div>
            {photo.map((photo) => (
                <div key={photo.id}>
                    <p>{photo.id}</p>
                </div>
            ))}
        </div>
    );
}

export default Home;