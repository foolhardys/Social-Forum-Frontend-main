import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import SmallLoader from "../Components/SmallLoader";
import toast from "react-hot-toast";
import { Questions } from "../Utils/Constant";
import Question from "../Components/Faq/Question";

const CareersContact = () => {
  const form = useRef();
  const [requestLoader, setRequestLoader] = useState(false);
  const [selectedDiv, setSelectedDiv] = useState(null);
  const handleDivClick = (index) => {
    setSelectedDiv(selectedDiv === index ? null : index);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setRequestLoader(true);

    emailjs
      .sendForm("service_chhlto9", "template_ur7fqqb", form.current, {
        publicKey: "6G3bip3AbmyowHBk9",
      })
      .then(
        (response) => {
          // console.log('SUCCESS!', response.status, response.text);
          toast.success(`${response.text} , Form submitted successfully`);
          setRequestLoader(false);
        },
        (error) => {
          // console.log('FAILED...', error.text);
          toast.error(error.text);
          setRequestLoader(false);
        }
      );
  };

  return (
    <section className="bg-gradient-to-br from-purple-100 to-orange-200 min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 gap-16">
      <div className="max-w-4xl w-full space-y-8 bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="bg-purple-600 text-white md:w-1/2 p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              Become A Teacher!
            </h2>
            <p className="text-lg mb-8">
              Reach out to us using the form. Drop an E-mail, call or message.
              We will get in touch with you in the next 24 - 48 Hours.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <svg
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:socialteacherstg@gmail.com"
                  className="hover:underline font-bold"
                >
                  dronalearningdata@gmail.com
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center">
                  <svg
                    className="h-6 w-6 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="hover:underline font-bold">+91 7019835235</span>
                </div>

                <div className="flex items-center">
                  <svg
                    className="h-6 w-6 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="hover:underline font-bold">+91 8088048571</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="h-6 w-6 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="hover:underline font-bold">+91 8884466899</span>
                </div>
              </div>
            </div>
          </div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="md:w-1/2 p-8 md:p-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Get in touch
            </h1>
            <p className="text-gray-600 mb-8">You can reach us anytime</p>
            <div className="space-y-4">
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
                placeholder="Your full Name"
              />
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
                placeholder="Your Email"
              />
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
                placeholder="Phone Number"
              />
              <input
                type="text"
                id="qualification"
                name="qualification"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
                placeholder="Your highest qualification"
              />
              <input
                type="number"
                id="class"
                name="class"
                min={1}
                max={12}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
                placeholder="Which grade you would like to teach?"
              />
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
                placeholder="Which subject are you interested to teach?"
              />
              <textarea
                id="message"
                required
                name="message"
                placeholder="How can we help you?"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 h-28 resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 transition duration-200 flex items-center justify-center"
              >
                {requestLoader ? <SmallLoader /> : "Submit form"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="max-w-3xl w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
          Frequently Asked Questions
        </h1>
        <div className="space-y-6">
          {Questions.map((item, index) => (
            <Question
              key={item.id}
              isSelected={selectedDiv === index}
              onClick={() => handleDivClick(index)}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareersContact;
