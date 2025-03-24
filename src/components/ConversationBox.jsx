import React from "react";

const ConversationBox = ({ title, features }) => {
  return (
    <div className="conversation-section">
      <div className="conversation-container">
        <h2 className="title">{title}</h2>
        <div className="features">
          {features?.map((feature, index) => (
            <div className="feature" key={index}>
              {feature}
            </div>
          ))}
        </div>
        <div className="curve"></div>
      </div>
    </div>
  );
};

export default ConversationBox;
