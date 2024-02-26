import { useForm } from "react-hook-form";
import FormInput from "./FormInput";
import SubmitButton from "./SubmitButton";
import FormSelect from "./FormSelect";

const MainForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const formSubmit = (data) => {
    console.log(data);
    reset()
  };

  return (
    <form onSubmit={handleSubmit(formSubmit)}>
      <div>Main Form</div>
      <FormInput
        name={"enterName"}
        placeholder={"Enter Your Name"}
        register={register("enterName")}
      />
      <FormSelect name={"select"} register={register("select")}/>
      <SubmitButton label={"Submit Now"} />
    </form>
  );
};

export default MainForm;
