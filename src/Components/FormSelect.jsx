const FormSelect = ({ name, register, label, error }) => {
  return (
    <div className="relative">
      <label className="flex cols mt-4" htmlFor="{name}">
        {label}
      </label>
      <select
        className="text-black mt-1 px-4 py-2 rounded w-full outline-none"
        name={name}
        {...register}
      >
        <option value="">-- Select -- </option>
        <option value="Songs">Songs </option>
        <option value="Cooking">Cooking </option>
        <option value="Travels">Travels </option>
        <option value="Technology">Technology</option>
        <option value="Anime">Anime</option>
      </select>
      {error && (
        <small className="absolute left-1 bottom-[-18px] text-xs font-semibold text-red-800 ">
          {error.message}
        </small>
      )}
    </div>
  );
};

export default FormSelect;
