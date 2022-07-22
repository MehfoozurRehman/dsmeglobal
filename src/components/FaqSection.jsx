import React from "react";

export default function FaqSection() {
  const [isOpen, setIsOpen] = React.useState(false);
  const faqData = [
    {
      label: "Does the workshop commit me to development?",
      description:
        "We provide Agile Discovery Workshop as an independent service. Although it’s a crucial first step for successful development, it doesn’t bind you to enter into development with us. However, we are confident that our great value addition during the workshop will compel you to take the development forward with us.",
    },
    {
      label: "Why do you charge for the workshop?",
      description:
        "We charge a minimal fee for the workshop based on the average costs that we typically incur during the extensive process. Usually, 8-10 people are working behind the scenes to assess the feasibility of your idea. The only benefit we get from this is the ability to better understand your needs and deliver a desirable end product.",
    },
    {
      label: "Who is part of the workshop?",
      description:
        "DSME Global Links has a team of Product strategists/Discovery leads, UI/UX experts, Solution Architects, and Engineers working closely with your top management, IT personnel, and end-users.",
    },
    {
      label: "I know everything I need to know about my idea, can I skip ADW?",
      description:
        "As tempting as it may sound to you, it is usually not the wise thing to do. ADW allows for a deeper understanding of your product idea, what you tend to achieve with it, and its technical feasibility It’s the cornerstone of a successful collaboration between you and your technical partner for the duration of the project. By skipping this crucial step you might be setting your project up for failure from the very start.",
    },
    {
      label: "Why should I opt for the workshop?",
      description:
        "Conducting a comprehensive workshop is paramount to successful product development and delivery because mostly the client is uncertain of what he expects the finished product to accomplish. Laying down key success parameters and indicators early on eliminate the risk of failure and ultimately saves both time and money.",
    },
  ];
  return (
    <div className="faq__section">
      <div className="faq__section__content">
        <div className="faq__section__content__heading">
          Frequently Asked <span>Questions</span>
        </div>
        {faqData.map((faq, index) => (
          <FaqSectionEntry
            key={index}
            index={index}
            data={faq}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        ))}
      </div>
    </div>
  );
}

function FaqSectionEntry({ data, index, isOpen, setIsOpen }) {
  return (
    <div className="faq__section__content__entry">
      <button
        onClick={() => {
          setIsOpen(index);
        }}
        style={isOpen === index ? { backgroundColor: "#0d6e4b" } : null}
        className="faq__section__content__entry__heading"
      >
        {data.label}
      </button>
      {isOpen === index ? (
        <div className="faq__section__content__entry__info">
          {data.description}
        </div>
      ) : null}
    </div>
  );
}
