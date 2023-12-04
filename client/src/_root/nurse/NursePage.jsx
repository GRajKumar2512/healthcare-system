import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import axios from "axios";

const NursePage = () => {
  const { id } = useContext(UserContext);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (id) {
      const getProfileDetails = async () => {
        const { data } = await axios.get(`/nurse/${id}`);

        setProfile(data);
      };
      getProfileDetails();
    }
  }, [id]);

  return (
    <div className="mt-20 flex gap-5">
      <div className="w-[65%]">
        <h2 className="mb-5 font-bold text-2xl text-gray-800">My Profile:</h2>
        {profile ? (
          Object.entries(profile).map(([key, value]) => (
            <div
              className={`flex gap-4 w-full border border-gray-800 bg-gray-800`}
            >
              <div className="text-end text-white font-semibold p-2 w-full">
                {key}:
              </div>
              <div className="text-start text-white font-semibold p-2 w-full">
                {value}
              </div>
            </div>
          ))
        ) : (
          <p className="text-2xl text-center">Loading...</p>
        )}
      </div>
      <div className="border border-gray-800 w-[35%] flex flex-col">
        <div className="flex-1 p-4">Image</div>
        <div className="p-4">Status</div>
      </div>
    </div>
  );
};

export default NursePage;
