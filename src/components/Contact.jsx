import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import emailjs from "@emailjs/browser";
import whatsapp from "../images/whatsappdownload.png";
import linkdin from "../images/linkdin-remove.png";
import github from "../images/github-remove-bg.png";

const Contact = () => {
  const formRef = useRef();
  const [form, setform] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setloading] = useState(false);
  const [popup, setPopup] = useState({
    open: false,
    type: "success",
    title: "",
    message: "",
  });

  const showPopup = (type, title, message) => {
    setPopup({ open: true, type, title, message });
  };

  const closePopup = () => {
    setPopup((prev) => ({ ...prev, open: false }));
  };

  const handlechange = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    setloading(true);

    emailjs
      .send(
        "service_zgyt0vk",
        "template_nwfftqb",
        {
          from_name: form.name,
          from_email: form.email,
          from_phone: form.phone,
          message: form.message,
        },
        "eSVoigCz-XbFe0qqW"
      )
      .then(
        () => {
          setloading(false);
          showPopup(
            "success",
            "Message Sent!",
            `Thank you, ${form.name}! I will get back to you as soon as possible.`
          );
          setform({
            name: "",
            phone: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setloading(false);
          console.log(error);
          showPopup(
            "error",
            "Failed to Send",
            "Something went wrong. Please try again or email me directly."
          );
        }
      );
  };

  return (
    <>
      <AnimatePresence>
        {popup.open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
            onClick={closePopup}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.45 }}
              className="bg-tertiary border border-[#915eff]/40 rounded-2xl p-8 max-w-md w-full shadow-2xl shadow-[#915eff]/20"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center mb-5 text-2xl ${
                  popup.type === "success"
                    ? "bg-[#915eff]/20 text-[#915eff]"
                    : "bg-red-500/20 text-red-400"
                }`}
              >
                {popup.type === "success" ? "✓" : "!"}
              </div>
              <h3 className="text-white text-2xl font-bold mb-3">{popup.title}</h3>
              <p className="text-secondary text-[15px] leading-relaxed mb-8">
                {popup.message}
              </p>
              <button
                type="button"
                onClick={closePopup}
                className="w-full bg-[#915eff] hover:bg-[#7d48f5] text-white font-bold py-3 rounded-xl transition-colors"
              >
                OK
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handlesubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handlechange}
                placeholder="What's your name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handlechange}
                placeholder="What's your email?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">
                Your Phone Number
              </span>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handlechange}
                placeholder="What's your Phone Number?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={5}
                name="message"
                value={form.message}
                onChange={handlechange}
                placeholder="What do you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
            >
              {loading ? "Sending..." : "Send"}
            </button>

            <div className="font-sans text-gray-800 dark:text-gray-100">
              <p className="text-sm uppercase tracking-wide font-semibold text-gray-500">
                Write an E-mail
              </p>
              <p className="text-lg font-medium hover:text-blue-500 transition-colors text-white">
                mubasharhanif24@gmail.com
              </p>

              <br />

              <p className="text-sm uppercase tracking-wide font-semibold text-gray-500">
                Call At
              </p>
              <p className="text-lg font-medium text-white">+92 334-9730227</p>

              <div className="mt-6 flex gap-4">
                <a
                  href="https://github.com/Mian-Mubashar"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                  className="group relative"
                >
                  <img
                    src={github}
                    alt="GitHub"
                    className="w-11 h-11 object-cover rounded-full border-2 border-white transition-all duration-300 group-hover:bg-gray-900 p-2"
                  />
                </a>

                <a
                  href="https://www.linkedin.com/in/mubashar-hanif-71b473212/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                  className="group relative"
                >
                  <img
                    src={linkdin}
                    alt="LinkedIn"
                    className="w-11 h-11 object-cover rounded-full border-2 border-white transition-all duration-300"
                  />
                </a>

                <a
                  href="https://wa.me/923349730227"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="WhatsApp"
                  className="group relative"
                >
                  <img
                    src={whatsapp}
                    alt="WhatsApp"
                    className="w-11 h-11 object-cover rounded-full border-2 border-white transition-all duration-300"
                  />
                </a>
              </div>
            </div>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
