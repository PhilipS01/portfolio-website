import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { selfie, git } from "../assets";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {};
  const handleSubmit = (e) => {};

  return (
    <div className="xl:flex-row flex-col-reverse flex gap-10 overflow-hidden w-full">
      <motion.div
        variants={slideIn("left", 0.2, 0.3)}
        className="bg-background_dark rounded-[20px] p-8 w-full"
      >
        <p className={`${styles.subText} text-slate-500`}>Melden Sie sich</p>
        <h3 className={styles.sectionHeadText}>Kontakt</h3>

        <p className="text-white mt-4 flex gap-5">
          <a
            className="cursor-pointer hover:font-medium"
            onClick={() => {
              navigator.clipboard.writeText("philip.si@pm.me");

              const email = document.getElementById("email_link");
              email.children[0].innerHTML = "Kopiert!";
            }}
          >
            <span className="flex align-middle leading-7" id="email_link">
              <span>
                ✉️<span className="ml-1">E-Mail</span>
              </span>
            </span>
          </a>
          <a
            href="tel:+4915146170784"
            className="cursor-pointer hover:font-medium"
          >
            <span className="flex align-middle leading-7">
              <span className="mr-1">☎️</span>Telefon
            </span>
          </a>
          <a
            href="https://gitlab.com/PhilipS01"
            className="cursor-pointer hover:font-medium"
          >
            <span className="flex align-middle leading-7">
              <img src={git} className="h-[25px] mr-1" />
              GitLab
            </span>
          </a>
        </p>

        <img src={selfie} className="absolute top-8 right-8 h-[200px]" />

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Ihr Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Wie heißen Sie?"
              className="bg-retro_secondary py-4 px-6 placeholder:text-white/10 text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Ihre Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Wie lautet Ihre Email?"
              className="bg-retro_secondary py-4 px-6 placeholder:text-white/10 text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Ihre Nachricht</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Was möchten Sie sagen?"
              className="bg-retro_secondary py-4 px-6 placeholder:text-white/10 text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="text-white bg-white/50 hover:bg-blue-500 py-3 px-8 outline-none w-fit font-bold shadow-md hover:shadow-white/20 rounded-lg transition-all"
          >
            {loading ? "Wird gesendet ..." : "Senden"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "kontakt");
