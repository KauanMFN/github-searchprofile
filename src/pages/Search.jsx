import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { SingleProfileCard } from "../components/SingleProfileCard";

export const Search = () => {
    const [profiles, setProfiles] = useState([]);
    const { id } = useParams();

    // const query = searchParams.get("id");

    const getProfile = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        setProfiles([data]);
        console.log(profiles);
    };

    useEffect(() => {
        const url = `https://api.github.com/users/${id}`;

        getProfile(url);
    }, [id]);

    console.log(id);

    return (
        <div className="flex flex-col items-center mt-5">
            <h1 className="text-center text-slate-600 font-bold text-xl">
                Resultado para: <br />
                <span className="font-normal italic">{id}</span>
            </h1>

            <div className="flex gap-2 mt-5">
                {profiles.length == 0 && (
                    <h1 className="text-red-500 opacity-50">Carregando...</h1>
                )}

                {profiles.length > 0 &&
                    profiles.map((profile, index) => (
                        <SingleProfileCard
                            avatar={profile.avatar_url}
                            user={profile.login}
                            name={profile.name}
                            followers={profile.followers}
                            id={profile.id}
                            key={index}
                        />
                    ))}
            </div>

            {/* <p>Final</p> */}
        </div>
    );
};
