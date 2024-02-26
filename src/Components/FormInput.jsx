const FormInput = ({ type="text",name, placeholder, register, label, }) => {
  return (
    <div className="flex flex-col ">
      <label className="mt-4 "htmlFor={name}>{label}</label>
      <input
        className="w-80 rounded outline-none px-4 py-2 mt-1 text-black "
        name={name}
        type={type}
        placeholder={placeholder}
        {...register}
      />
    </div>
  );
};

export default FormInput;
