import { useForm } from "react-hook-form";
import FormInput from "./FormInput";
import SubmitButton from "./SubmitButton";
import FormSelect from "./FormSelect";

import { db } from "../Firebase"; 
import { addDoc, collection } from "firebase/firestore";

const MainForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const formSubmit = async(data) => {
      const querySnapshot = await addDoc(collection(db, data.select), data)
      console.log(querySnapshot)
    reset();
  };



  return (
    <form
      className="bg-[#0f0f0f] text-white max-w-3xl mx-auto mt-10 p-10 rounded"
      onSubmit={handleSubmit(formSubmit)}
    >
      <div>Main Form</div>
      <FormInput
        label={"Enter your Name"}
        name={"enterName"}
        placeholder={"Enter Your Name"}
        register={register("enterName")}
      />
      <FormInput
        label={"Enter  your video title"}
        name={"enterTitle"}
        placeholder={"Enter Your video title"}
        register={register("enterTitle")}
      />
      <FormInput
        name={"enterDuration"}
        label={"Enter the Duration"}
        placeholder={"Enter the Duration"}
        register={register("enterDuration")}
        type="number"
      />
      <FormInput
        name={"enterThumbnail"}
        label={"Enter the Thumbnail URL"}
        placeholder={"Enter your Thumbnail URL"}
        register={register("enterThumbnail")}
      />
      <FormInput
        name={"enterProfile"}
        label={"Enter the Profile URL"}
        placeholder={"Enter your Thumbnail URL"}
        register={register("enterProfile")}
      />

      <FormSelect
        name={"select"}
        label={"Select a Category"}
        register={register("select")}
      />

      <SubmitButton label={"Submit Now"} />
    </form>
  );
};

export default MainForm;
