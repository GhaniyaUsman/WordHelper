import React, {  useState } from 'react';

const About = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const [mystyle, setMyStyle]= useState({
    color: 'white',
    backgroundColor: 'black'
  })

  const [btntext, setBtnText]= useState("Enable Dark Mode")

  function toggleStyle() {
    if (mystyle.color == 'white') {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white'
      });
      setBtnText("Enable light mode")
    }
    else {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black'
      });
      setBtnText("Enable Dark mode")
    }
  }

  const questions = [
    {
      question: "What is the purpose of this website/app?",
      answer: "This website/app is designed to provide users with a comprehensive platform for [your purpose here]. We aim to [brief explanation]."
    },
    {
      question: "How can I use this website/app?",
      answer: "To use this website/app, you can [instructions here]. It's designed to be user-friendly and intuitive, ensuring you can easily navigate and find the information or services you need."
    },
    {
      question: "Who can benefit from this website/app?",
      answer: "Our platform is beneficial for [target audience]. Whether you're looking for [specific benefits], this website/app is tailored to meet your needs."
    }
  ];

  return (
    <div className="container mx-auto p-6" style={mystyle}>
      <h1 className="text-3xl font-bold mb-4" style={mystyle}>About Us</h1>
      <p className="mb-6">
        Welcome to our website/app! Here, we strive to [brief mission statement or overview]. Our goal is to [goal or mission]. We hope you find our platform useful and engaging.
      </p>
      <div className="accordion border-gray-200 border-2 rounded-lg" style={mystyle}>
        {questions.map((item, index) => (
          <div style={mystyle} key={index} className=" border-b-2 border-gray-200">
            <button
              className="w-full text-left flex justify-between items-center p-4 focus:outline-none" style={mystyle}
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-xl font-semibold">{item.question}</span>
              <span className="text-2xl">
              </span>
            </button>
            {activeIndex === index && (
              <div className="p-4 text-gray-700 bg-gray-50" style={mystyle}>
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      <button onClick={toggleStyle} className="bg-green-500 text-white px-4 py-2 my-2 rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 w-full md:w-auto text-sm mb-2 md:mb-0">
       Dark Mode 
      </button>
    </div>
  );
};

export default About;
