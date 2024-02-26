const FormSelect = ({ name, register }) => {
  return (
    <>
      <select name={name} {...register}>
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
