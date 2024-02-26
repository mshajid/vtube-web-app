const FormInput = ({ type = "text", placeholder, name, label }) => {
  return (
    <>
      
        
        <label>{label}</label>

        
        
        <input type={type} className="outline-none px-4 py-2 rounded w-full mt-2" placeholder={placeholder} name={name}/>
        
      
    </>
  );
};

export default FormInput;