import React, { useEffect } from 'react';

const TokBoxVideoChat = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://tokbox.com/embed/embed/ot-embed.js?embedId=[YOUR EMBED ID]&room=DEFAULT";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <iframe
        src={`https://tokbox.com/embed/embed/ot-embed.js?embedId=[YOUR EMBED ID]&iframe=true&room=DEFAULT`}
        allow="microphone; camera"
        title="TokBox Video Chat"
      ></iframe>
      <div
        id="otEmbedContainer"
        style={{ width: 500, height: 200 }}
      ></div>
    </div>
  );
};

export default TokBoxVideoChat;
