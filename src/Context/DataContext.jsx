import { createContext, useState } from "react";

export const DataContext = createContext();

const rows = [
  {
    id: 1,
    data: "Do you work on whatsapp? Yes, we do offer our services on WhatsApp!",
    source: "--",
    type: "TEXT",
    created: "8/3/2024",
  },
  {
    id: 2,
    data: "I want to test your chatbot That's great to hear! You can continue chatting with me to test BeyondChats AI responses! I am one of the AIs! 😏 Else, you can also book a demo call with my team: https://calendly.com/beyondchats/15min",
    source: "--",
    type: "TEXT",
    created: "3/28/2024",
  },
  {
    id: 3,
    data: "Will the Startup Plan address the concern I mentioned earlier? Yes, the Startup Plan will definitely help address your concerns! With this plan, you'll have access to advanced analytics and features that can enhance customer interactions while ensuring data security.",
    source: "--",
    type: "TEXT",
    created: "7/31/2024",
  },
  {
    id: 4,
    data: "What is the cost of IVF? I can’t provide specific information on IVF costs, but I can tell you about how our chatbot services can enhance your business by generating high-quality leads and providing 24/7 support to your customers.",
    source: "--",
    type: "TEXT",
    created: "7/31/2024",
  },
  {
    id: 5,
    data: "Will the Startup Plan address the concern I mentioned earlier? Yes, the Startup Plan will definitely help address your concerns! With this plan, you'll have access to advanced analytics and features that can enhance customer interactions while ensuring data security.",
    source: "--",
    type: "TEXT",
    created: "7/31/2024",
  },
  {
    id: 6,
    data: "Which languages can you talk in? Multilingual support is the core of my AI! I can speak many popular languages.  Just talk in the language you are comfortable in! Supported languages include: Regional Indian languages like Hindi, Marathi, Bengali, Tamil, etc. International languages I can speak fluently: German, French, Portuguese, etc.",
    source: "--",
    type: "TEXT",
    created: "7/31/2024",
  },
  {
    id: 7,
    data: "who are you My name is Bech! I am an AI chatbot and my job is to help you with any questions you may have about BeyondChats or our services.",
    source: "--",
    type: "TEXT",
    created: "7/31/2024",
  },
  {
    id: 8,
    data: "Do you have live chat support? Yes, we do have live chat support, but we primarily focus on providing chatbot solutions that enhance customer interactions and offer instant responses 24/7.",
    source: "--",
    type: "TEXT",
    created: "7/31/2024",
  },
  {
    id: 9,
    data: "I want to freeze my eggs. That's great, please choose from one of these 3 options.",
    source: "--",
    type: "TEXT",
    created: "7/31/2024",
  },
];

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(rows);

  const value = { data, setData };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
