import Element from "react-scroll/modules/components/Element";
import { SlLocationPin, SlPhone, SlShare } from "react-icons/sl";
import { AiOutlineMail } from "react-icons/ai";
import { SiLinkedin, SiGithub } from "react-icons/si";

const Section = Element;

function Address() {
  return (
    <div className="flex gap-8 items-center">
      <SlLocationPin className="min-w-[32px] min-h-[32px] object-cover" />
      <div className="flex flex-col spcae-y-2">
        <span className="text-secondary-2/30">My Address</span>
        <span className="text-secondary-2">Pune</span>
      </div>
    </div>
  );
}

function PhoneNmber() {
  return (
    <div className="flex gap-8 items-center">
      <SlPhone className="min-w-[32px] min-h-[32px] object-cover" />
      <div className="flex flex-col space-y-2">
        <span className="text-secondary-2/30">Phone Number</span>
        <span className="text-secondary-2">+918600173694</span>
      </div>
    </div>
  );
}
function SocailProfiles() {
  return (
    <div className="flex gap-8 items-center">
      <SlShare className="min-w-[32px] min-h-[32px] object-cover" />
      <div className="flex flex-col space-y-2">
        <span className="text-secondary-2/30">Social Profiles</span>
        <div className="flex space-x-3 mt-2">
          <a href="https://www.linkedin.com/in/sangram-abdar-522150117/">
            <SiLinkedin className="w-full h-full object-cover transition-all duration-100 hover:scale-110" />
          </a>
          <a href="https://github.com/sangramabdar">
            <SiGithub className="w-full h-full object-cover transition-all duration-100 hover:scale-110" />
          </a>
        </div>
      </div>
    </div>
  );
}

function Email() {
  return (
    <div className="flex gap-8 items-center">
      <AiOutlineMail className="min-w-[32px] min-h-[32px] object-cover" />
      <div className="flex flex-col space-y-2">
        <span className="text-secondary-2/30">Email</span>
        <a
          className="text-secondary-2"
          href="mailto:abdarsangram2697@gmail.com"
        >
          abdarsangram2697@gmail.com
        </a>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <Section
      className="max-w-7xl mx-auto flex flex-col justify-start items-center px-4 sm:px-8 mt-40 pb-40"
      name="contact"
    >
      <h1 className="font-bold text-2xl border-solid border-b-4 text-tertiary border-b-secondary-1">
        Contact
      </h1>
      <div className="grid overflow-hidden grid-cols-1 gap-12 sm:grid-cols-2 mt-10">
        <Address />
        <SocailProfiles />
        <Email />
        <PhoneNmber />
      </div>
    </Section>
  );
}

export default Contact;
