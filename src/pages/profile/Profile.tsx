// Profile.tsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../../store/slices/profileSlice"; // Adjust the import path accordingly
import { toast } from "react-toastify";

const Profile: React.FC = () => {
  const dispatch = useDispatch();
  const { userProfile, loading, error } = useSelector(
    (state: {
      profile: { userProfile: any; loading: boolean; error: string | null };
    }) => state.profile
  );

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // @ts-ignore
      dispatch(fetchProfile());
    }
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    toast.error(error);
    return <div>Error loading profile</div>;
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Profile</h1>
      {userProfile ? (
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold">User Information</h2>
          <p>
            <strong>Name:</strong> {userProfile.name}
          </p>
          <p>
            <strong>Email:</strong> {userProfile.email}
          </p>
          <p>
            <strong>Phone:</strong> {userProfile.phone}
          </p>
          <p>
            <strong>Address:</strong> {userProfile.address}
          </p>
          {/* Add more fields as necessary */}
        </div>
      ) : (
        <div>No user profile found.</div>
      )}
    </div>
  );
};

export default Profile;
