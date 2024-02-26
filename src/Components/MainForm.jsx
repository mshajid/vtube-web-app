import { useForm } from "react-hook-form";
import FormInput from "./FormInput";
import SubmitButton from "./SubmitButton";
import FormSelect from "./FormSelect";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { db } from "../Firebase";
import { addDoc, collection } from "firebase/firestore";

const formSchema = z.object({
  enterName: z
    .string()
    .min(3, { message: "Name must be at least 3 characters" })
    .max(20, { message: "Name must be at most 20 characters" }),
  enterTitle: z
    .string()
    .min(10, { message: "Title must be at least 10 characters" })
    .max(100, { message: "Title must be at most 20 characters" }),
  enterThumbnail: z.string(),
  enterDuration: z.string(),
  enterProfile: z.string(),

  select: z.string(),
});

const MainForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(formSchema) });

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
          error={errors.enterName}
        />
        <FormInput
          label={"Enter  your video title"}
          name={"enterTitle"}
          placeholder={"Enter Your video title"}
          register={register("enterTitle")}
          error={errors.enterTitle}
        />
        <FormInput
          name={"enterDuration"}
          label={"Enter the Duration"}
          placeholder={"Enter the Duration"}
          register={register("enterDuration")}
          type="number"
          error={errors.enterDuration}
        />
        <FormInput
          name={"enterThumbnail"}
          label={"Enter the Thumbnail URL"}
          placeholder={"Enter your Thumbnail URL"}
          register={register("enterThumbnail")}
          error={errors.enterThumbnail}
        />
        <FormInput
          name={"enterProfile"}
          label={"Enter the Profile URL"}
          placeholder={"Enter your Thumbnail URL"}
          register={register("enterProfile")}
          error={errors.enterProfile}
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
