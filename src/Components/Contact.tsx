import React from "react";
import Element from "react-scroll/modules/components/Element";
import { SlLocationPin, SlPhone, SlShare } from "react-icons/sl";
import { AiOutlineMail } from "react-icons/ai";
import { SiLinkedin, SiGithub } from "react-icons/si";

const Section = Element;

function Address() {
  return (
    <div className="flex items-center w-[250px] h-[100px] md:ml-10">
      <SlLocationPin className="mr-10" />
      <div>
        <h1>My Address</h1>
        <span>Pune</span>
      </div>
    </div>
  );
}
function PhoneNmber() {
  return (
    <div className="flex items-center  w-[250px] h-[100px] md:ml-10">
      <SlPhone className="mr-10" />
      <div>
        <h1>Phone Number</h1>
        <div className="mt-2">
          <span>+918600173694</span>
        </div>
      </div>
    </div>
  );
}
function SocailProfiles() {
  return (
    <div className="flex  items-center  w-[250px] h-[100px] md:ml-10">
      <SlShare className="mr-10" />
      <div>
        <h1>Social Profiles</h1>
        <div className="flex space-x-3 mt-2">
          <a href="https://www.linkedin.com/in/sangram-abdar-522150117/">
            <SiLinkedin />
          </a>
          <a href="https://github.com/sangramabdar">
            <SiGithub />
          </a>
        </div>
      </div>
    </div>
  );
}

function Email() {
  return (
    <div className="flex items-center  w-[250px] h-[100px] md:ml-10">
      <AiOutlineMail />
      <div className="ml-10">
        <h1>Email</h1>
        <div className="mt-2">
          <span className="text-sm">abdarsangram2697@gmail.com</span>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <Section
      className="m-auto flex flex-col justify-start items-center w-[80%] pt-[20px] md:mt-[100px] md:pt-[70px]"
      name="contact"
    >
      <h1 className="font-bold text-2xl border-solid border-b-4 border-b-violet-600">
        Contact
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <Address />
        <SocailProfiles />
        <Email />
        <PhoneNmber />
      </div>
    </Section>
  );
}

export default Contact;
