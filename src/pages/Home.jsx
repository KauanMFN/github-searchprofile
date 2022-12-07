import { useEffect, useState } from "react";
import { ProfileCard } from "../components/ProfileCard";

export const Home = () => {
    const [profiles, setProfiles] = useState([]);
    const [followers, setFollowers] = useState([]);

    const getProfile = async () => {
        const res = await fetch("https://api.github.com/users");
        const data = await res.json();

        setProfiles(data);
        console.log(data);
    };

    useEffect(() => {
        getProfile();
    }, []);

    return (
        <div className="text-black flex flex-wrap gap-3 justify-center mt-5">
            {profiles.length == 0 && <h1>Carregando...</h1>}

            {profiles.length > 0 &&
                profiles.map((profile, index) => (
                    <>
                        <ProfileCard
                            avatar={profile.avatar_url}
                            user={profile.login}
                            id={profile.id}
                            key={index}
                        />
                    </>
                ))}
        </div>
    );
};
