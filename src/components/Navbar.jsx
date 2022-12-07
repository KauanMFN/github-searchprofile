import { useState } from "react";
import { AiFillGithub, AiOutlineSearch } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
    const [searchProfile, setSearchProfile] = useState("");
    const navigate = useNavigate();

    const handleSearchProfile = (e) => {
        e.preventDefault();

        if (!searchProfile) return;

        navigate(`/users/${searchProfile}`);
        setSearchProfile("");
    };

    return (
        <div className="px-10 py-3 bg-slate-600 text-white flex justify-between">
            <h2 className="font-semibold ">
                <Link to="/" className="flex items-center gap-1 text-xl">
                    <AiFillGithub /> GH Search
                </Link>
            </h2>

            <form
                className="flex items-center gap-2"
                onSubmit={handleSearchProfile}
            >
                <input
                    type="text"
                    placeholder="Pesquise aqui..."
                    className="px-2 py-1 rounded-full text-black outline-none focus:outline-slate-400 w-60"
                    onChange={(e) =>
                        setSearchProfile(e.target.value.split(" ").join(""))
                    }
                    value={searchProfile}
                />
                <button className="">
                    <AiOutlineSearch className="text-2xl" />
                </button>
            </form>
        </div>
    );
};
