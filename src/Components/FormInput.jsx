const FormInput = ({ name, placeholder, register, label }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name}>{label}</label>
      <input
        className="w-80 rounded outline-none"
        name={name}
        placeholder={placeholder}
        {...register}
      />
    </div>
  );
};

export default FormInput;
