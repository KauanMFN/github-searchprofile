import { useEffect, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
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
        <div className="text-black mt-5 px-5">
            <h2 className="flex items-center justify-center text-xl font-semibold text-slate-600">
                Primeiros Perfis do Github
                <AiFillGithub className="ml-1 text-2xl" />
            </h2>

            <div className="flex flex-wrap gap-3 justify-center mt-5">
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
        </div>
    );
};
