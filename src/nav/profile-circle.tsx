const ProfileCircle: React.FC = () => {
  const imageUrl = "/assets/userprofile-test.jpg";

  return (
    <div
      className="w-16 h-16 rounded-full overflow-hidden cursor-pointer shadow-lg"
      onClick={() => null}
    >
      <img
        src={imageUrl}
        alt="Current Users Profile Picture"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default ProfileCircle;
