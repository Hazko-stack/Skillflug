"use client"; // Add this line to make the component a client component

import { useState } from "react";

export default function AI() {
  const [isLoading, setIsLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!userMessage.trim()) return; // Don't send empty messages
    try {
      setIsLoading(true);
      const res = await fetch("/api/groq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: userMessage }),
      });
      const data = await res.json();
      setAiResponse(data.content);
      setUserMessage(""); // Clear input after sending
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen px-4 sm:px-0 bg-cover bg-center bg-[url('/images/space.png')]">
      <div className="flex flex-col justify-between w-full max-w-2xl h-full shadow-lg overflow-hidden mt-0 sm:w-full lg:w-full bg-gray-800 text-white rounded-lg">
        {/* Chat Header */}
        <div className="p-4 bg-violet-700 text-white text-xl font-semibold">
          <span>Chat with KAORI AI</span>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-6 space-y-6 overflow-y-auto max-h-[70vh] min-h-[300px] flex flex-col justify-start">
          {aiResponse ? (
            <div className="flex justify-start">
              <div className="bg-gray-700 text-white p-3 rounded-lg max-w-[70%] shadow-md">
                {aiResponse}
              </div>
            </div>
          ) : (
            <div className="text-gray-400 text-center">Waiting for your input...</div>
          )}
        </div>

        {/* Input Area */}
        <form
          onSubmit={handleSubmit}
          className="flex items-center p-4 border-t bg-gray-700"
        >
          <input
            type="text"
            id="content"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            placeholder="Ask me something..."
            className="border border-gray-600 bg-gray-800 text-white rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-violet-400"
          />
          <button
            type="submit"
            disabled={isLoading || !userMessage}
            className={`ml-2 text-white px-6 py-3 rounded-lg ${
              isLoading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-violet-700 hover:bg-violet-800"
            }`}
          >
            {isLoading ? "Loading..." : "Send"}
          </button>
        </form>
      </div>
    </main>
  );
}
