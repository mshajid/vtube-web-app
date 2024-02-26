const FormSelect = ({ name, register,label }) => {
  return (
    <>
    <label className="flex cols mt-4" htmlFor="{name}">{label}</label>
      <select className="text-black mt-1 px-4 py-2 rounded" name={name} {...register}>
        <option value="">-- Select -- </option>
        <option value="Songs">Songs </option>
        <option value="Cooking">Cooking </option>
        <option value="Travels">Travels </option>
        <option value="Technology">Technology</option>
        <option value="Anime">Anime</option>
      </select>
    </>
  );
};

export default FormSelect;
