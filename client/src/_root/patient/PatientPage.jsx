import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import axios from "axios";

const PatientPage = () => {
  const { id } = useContext(UserContext);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (id) {
      const getProfileDetails = async () => {
        const { data } = await axios.get(`/patient/${id}`);

        setProfile(data);
      };
      getProfileDetails();
    }
  }, [id]);

  return (
    <div className="mt-20 lg:w-[60%] md:w-[90%] mx-auto">
      <h2 className="mb-5 font-bold text-2xl text-gray-800">My Profile:</h2>
      {profile ? (
        Object.entries(profile).map(([key, value]) => (
          <div className={`flex gap-4 w-full border bg-gray-200`}>
            <div className="text-end text-gray-800 font-semibold p-2 w-full">
              {key}:
            </div>
            <div className="text-start text-gray-800 font-semibold p-2 w-full">
              {value}
            </div>
          </div>
        ))
      ) : (
        <p className="text-2xl text-center">No Data</p>
      )}
    </div>
  );
};

export default PatientPage;
