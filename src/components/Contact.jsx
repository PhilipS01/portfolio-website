import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";
import { selfie, git } from "../assets";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {};
  const handleSubmit = (e) => {};

  return (
    <div className="text-center md:text-left xl:flex-row flex-col-reverse flex overflow-hidden w-full">
      <motion.div className="bg-no-repeat bg-center bg-[url('/src/assets/layered-waves.svg')] bg-cover	 rounded-[20px] p-8 w-[100%] overflow-hidden">
        <div>
          <img
            src={selfie}
            className="relative mb-8 mx-auto md:absolute md:top-[120px] md:right-[120px] h-[200px]"
          />
          <p className={`${styles.subText} text-slate-300`}>Melden Sie sich</p>
          <h3 className={styles.sectionHeadText}>Kontakt</h3>

          <p
            className="
            flex-wrap w-full justify-center md:w-fit
            text-white mt-4 flex gap-5"
          >
            <a
              className="md:shadow-md md:px-2 md:rounded-xl md:py-1 md:hover:scale-110 md:transition-all cursor-pointer"
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
              className="md:shadow-md md:px-2 md:rounded-xl md:py-1 md:hover:scale-110 md:transition-all cursor-pointer"
            >
              <span className="flex align-middle leading-7">
                <span className="mr-1">☎️</span>Telefon
              </span>
            </a>
            <a
              href="https://gitlab.com/PhilipS01"
              target="_blank"
              className="md:shadow-md md:px-2 md:rounded-xl md:py-1 md:hover:scale-110 md:transition-all cursor-pointer"
            >
              <span className="flex align-middle leading-7">
                <img src={git} className="h-[25px] mr-1" />
                GitLab
              </span>
            </a>
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className={`${styles.subText} items-center md:items-start w-full mt-10 flex flex-col gap-8`}
          >
            <label className="flex flex-col w-full">
              <span className="text-white font-medium mb-4">Ihr Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Wie heißen Sie?"
                className="bg-retro_secondary/80 py-4 px-6 placeholder:text-white/10 text-white rounded-lg outlined-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col w-full">
              <span className="text-white font-medium mb-4">Ihre Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Wie lautet Ihre Email?"
                className="bg-retro_secondary/80 py-4 px-6 placeholder:text-white/10 text-white rounded-lg outlined-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col w-full">
              <span className="text-white font-medium mb-4">
                Ihre Nachricht
              </span>
              <textarea
                rows="7"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Was möchten Sie sagen?"
                className="bg-retro_secondary/80 py-4 px-6 placeholder:text-white/10 text-white rounded-lg outlined-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="text-white hover:bg-blue-500 py-3 px-8 outline-none w-fit font-bold shadow-lg hover:shadow-blue-500/50 rounded-lg transition-all border-2 border-white/50 hover:border-white/0"
            >
              {loading ? "Wird gesendet ..." : "Senden"}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "kontakt");
