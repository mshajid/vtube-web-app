const SubmitButton = ({ label }) => {
  return (
    <>
      <button className="flex cols mt-4 bg-white text-black p-2 rounded hover:bg-gray-300 cursor-pointer">
        {label}
      </button>
    </>
  );
};

export default SubmitButton;
