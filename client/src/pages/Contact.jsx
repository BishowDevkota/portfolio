import React from "react";
// import ActionButton from "./ActionButton";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import ActionButton from "../components/ActionButton";

const Contact = () => {
  return (
    <div className="py-20">
      <div className="flex flex-col lg:w-[600px]  max-lg:w-[600px] max-md:w-[480px] max-sm:w-[380px]  items-center justify-center mx-auto">
        <span className="text-[--green] text-sm mb-5">CONTACT FORM</span>
        <div className="text-center">
          <p className="max-md:text-3xl text-4xl text-white font-bold mb-12">
            HAVE A PROJECT IN MIND? LET'S TALK{" "}
            <span className="text-[--green]"> CONTACT ME !</span>
          </p>
        </div>
        <div className="flex flex-wrap flex-col items-center justify-center gap-5">
          <input
            type="email"
            name=""
            id=""
            className="p-4 bg-[--inputBg] rounded-md placeholder:text-[--placeholder] h-14 text-white w-96"
            placeholder="Enter Your Email.."
          />
          <textarea
            name="message"
            id="message"
            className="p-4 bg-[--inputBg] rounded-md placeholder:text-[--placeholder] h-32 w-96 text-white"
            placeholder="Tell me about your project..."
            required
          />

          <ActionButton text="Send Mail" IconComponent={HiOutlineChatAlt2} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
