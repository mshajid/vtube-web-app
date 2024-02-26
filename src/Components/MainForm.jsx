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

  const formSubmit = async (data) => {
    const querySnapshot = await addDoc(collection(db, data.select), data);
    reset();
  };

  return (
    <div className="max-w-4xl mx-auto my-10">
      <div className="text-4xl font-semibold tracking-wider text-white text-center">
        Add Your Favorite Videos Here
      </div>
      <div className="text-center tracking-wide mt-1">
        <span className="text-gray-500 text-center">
          Complete the below form to add your favorite videos with VTube.
        </span>
      </div>
      <form
        className="bg-[#0f0f0f] text-white max-w-3xl mx-auto mt-2 p-5 rounded"
        onSubmit={handleSubmit(formSubmit)}
      >
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
    </div>
  );
};

export default MainForm;
