import { useForm } from "react-hook-form";
import FormInput from "./FormInput";
import SubmitButton from "./SubmitButton";
import FormSelect from "./FormSelect";
const MainForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const formSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form className="bg-red-200 m-10 p-10 rounded" onSubmit={handleSubmit(formSubmit)}>
      <div >Main Form</div>
      <FormInput
      label={"Enter your Name"}

        name={"enterName"}
        placeholder={"Enter Your Name"}
        register={register("enterName")}
      />
      <FormInput
            label={"Enter"}

        name={"enterName"}
        placeholder={"Enter Your Name"}
        register={register("enterName")}
      />
      <FormInput
        name={"enterName"}
        label={"Enter Your Name Pls?"}
        placeholder={"Enter Your Name"}
        register={register("enterName")}
      />
      <FormSelect name={"select"} register={register("select")} />
      
      <SubmitButton label={"Submit Now"} />
    </form>
  );
};

export default MainForm;
