const SubmitButton = ({ label }) => {
  return (
    <>
      <button className="flex cols mt-4 bg-white text-black p-2 rounded hover:bg-[#003566] hover:text-white transition-all cursor-pointer">
        {label}
      </button>
    </>
  );
};

export default SubmitButton;
