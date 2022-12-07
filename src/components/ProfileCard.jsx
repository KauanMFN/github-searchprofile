import React from "react";

export const ProfileCard = ({ user, avatar, id }) => {
    return (
        <div className="flex flex-col items-center justify-between gap-3 p-5 bg-slate-600 rounded-xl shadow-md shadow-gray-500 w-fit text-white hover:scale-[103%] transition duration-200">
            <img
                src={avatar}
                alt=""
                className="w-40 h-40 rounded-full border-4 border-white"
            />
            <h2 className="text-white font-semibold">{user}</h2>
            <p className="font-regular text-center pb-3 mb-2 border border-t-0 border-l-0 border-r-0 border-white border-opacity-20">
                Conta número: <br />
                {id}
            </p>

            <a
                href={`https://github.com/${user}`}
                target="_blanck"
                className="w-full"
            >
                <button className="w-full border-2 border-white py-1 rounded-full hover:bg-white hover:text-slate-600 transition duration-300 font-semibold">
                    Ver perfil
                </button>
            </a>
        </div>
    );
};
