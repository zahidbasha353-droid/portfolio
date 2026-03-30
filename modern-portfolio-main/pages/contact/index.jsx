import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

import { fadeIn } from "../../variants";
import { useState } from "react";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then((res) => {
        if (res.status === 200) {
          alert("Thank you. I will get back to you ASAP.");
        } else {
          console.log(res);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let's Grow Your Real Estate <span className="text-accent">Business.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-center mb-8 text-white/70"
          >
            Available for Dubai / UAE Digital Marketing Opportunities
          </motion.p>

          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            onSubmit={handleSubmit}
            autoComplete="off"
            autoCapitalize="off"
            name="contact"
          >
            {/* input group */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-x-6 w-full">
              <input type="hidden" name="form-name" value="contact" />

              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input"
                disabled={isLoading}
                aria-disabled={isLoading}
                aria-label="Full name"
                required
                aria-required
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                className="input"
                disabled={isLoading}
                aria-disabled={isLoading}
                aria-label="Email address"
                required
                aria-required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="input"
              disabled={isLoading}
              aria-disabled={isLoading}
              required
              aria-required
            />
            <textarea
              name="message"
              placeholder="Message..."
              className="textarea"
              disabled={isLoading}
              aria-disabled={isLoading}
              required
              aria-required
            />
            <div className="flex gap-x-4 flex-wrap">
              <button
                type="submit"
                className="btn rounded-full border border-white/50 w-full sm:w-auto sm:max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent active:scale-95 group"
                disabled={isLoading}
                aria-disabled={isLoading}
              >
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                  Send Message
                </span>

                <BsArrowRight
                  className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                  aria-hidden
                />
              </button>
              <a
                href="https://wa.me/917550177369?text=Hi%20Zahid%2C%20I%27m%20interested%20in%20your%20digital%20marketing%20services"
                target="_blank"
                rel="noreferrer noopener"
                className="btn rounded-full border border-white/50 w-full sm:w-auto sm:max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent active:scale-95 group"
              >
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                  WhatsApp
                </span>

                <BsArrowRight
                  className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                  aria-hidden
                />
              </a>
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
