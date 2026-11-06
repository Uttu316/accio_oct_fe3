import { createContext, useRef, useState } from "react";

export const ChatContext = createContext();

const GEMINI_KEY = "";
const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const listRef = useRef();

  const [status, setStatus] = useState("");

  const onType = (e) => {
    setInput(e.target.value);
  };
  const onSend = () => {
    const newMessage = {
      id: parseInt(Math.random() * 1000000),
      text: input,
      sender: "Me",
      timestamp: Date.now(),
      isBot: false,
    };
    setMessages((chats) => [...chats, newMessage]); // append the new message in array
    setTimeout(
      () => (listRef.current.scrollTop = listRef.current.scrollHeight),
      100,
    ); //delay because of async state update
    setInput(""); //reset the input
    sendAI(newMessage.text);
  };
  const saveAImessage = (text) => {
    const newMessage = {
      id: parseInt(Math.random() * 1000000),
      text: text,
      sender: "Support",
      timestamp: Date.now(),
      isBot: true,
    };
    setMessages((chats) => [...chats, newMessage]); // append the new message in array
    setTimeout(
      () => (listRef.current.scrollTop = listRef.current.scrollHeight),
      100,
    ); //delay because of async state update
  };

  const sendAI = async (text) => {
    try {
      setStatus("loading");
      const res = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/interactions",
        {
          method: "POST",
          headers: {
            "x-goog-api-key": GEMINI_KEY,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "gemini-3.5-flash-lite",
            input: text,
          }),
        },
      );
      if (res.status >= 200 && res.status < 400) {
        const data = await res.json();
        const aiMessage = data.steps[1].content[0].text;
        saveAImessage(aiMessage);
        setStatus("");
        return;
      }
      throw res;
    } catch (e) {
      console.error(e);
      setStatus("error");
    }
  };
  return (
    <ChatContext value={{ listRef, onType, input, onSend, messages, status }}>
      {children}
    </ChatContext>
  );
};
export default ChatProvider;
