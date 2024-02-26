import { db } from "./Firebase"; 
import FormInput from "./components/FormInput";

const App = () => {
  return (
    <>
      <div className="bg-red-500 px-5 py-1 text-white">Hello React</div>
      <div>
      <div className=" bg-yellow-100 max-w-xl mx-auto m-10 px-10 py-4 rounded">
      <form>
      <FormInput 
      label="Your name"
      name="fullname"
      placeholder="Enter your Name"
      type="type"
      
      
      />
       <FormInput 
      label="Video Title"
      name="videoTitle"
      placeholder="Enter your Video Title"
      type="type"
      
      />
      <FormInput 
      label="Thumbnail"
      name="thumbnail"
      
      type="file"
      
      />
       <FormInput 
      label="Thumbnail"
      name="thumbnail"
      
      type="file"
      
      />
      
      
      
      </form>
      <div/>
      </div>
      </div>
     
      
      
    </>
  );
};

export default App;
