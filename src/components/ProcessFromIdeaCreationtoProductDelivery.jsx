import React from "react";

export function ProcessFromIdeaCreationtoProductDelivery() {
  const DeliveryCardEntry1 = [
    "Web",
    "Mobile",
    "Enterprise Mobility",
    "Web Portals",
    "Process Automation",
    "UI/UX",
    "DevOps",
    "IoT",
    "Microsoft SharePoint",
    "Salesforce",
    "Blockchain",
    "Big Data & Analytics",
    "Software Architecture",
  ];
  const DeliveryCardEntry2 = [
    "Healthcare",
    "Insurance",
    "Real Estate",
    "Fintech",
    "EdTech",
    "Mobility & Logistics",
    "Media & Entertainment",
    "Field Force Automation",
    "Retail",
  ]
  const DeliveryCardEntry3 = [
    "JavaScript",
    "Java",
    "DotNet",
    "PHP",
    "Ruby, Rails",
    "Azure",
    "Google Cloud",
    "React",
    "Angular",
    "Node.js",
    "MySQL",
    "mongoDB",
    "Android",
    "iOS",
    "WPF",
    "GraphQL",
    "IBM Watson",
    "React Native",
    "AWS",
    "VueJS",
    ".NET Core",
    "Xamarin",
    "Objective-C",
  ];
  return (
    <div className="pricing__delivery__section">
      <div className="pricing__delivery__section__heading">
        The Best Fit
      </div>
      <div className="pricing__delivery__section__heading__content">
      You can trust us with our deep technological & domain expertise to come up with the best solution for your product.

      </div>
      <div className="pricing__delivery__section__content">
        <div className="pricing__delivery__section__content__card">
          <div className="pricing__delivery__section__content__card__heading">
            Enterprise
          </div>
          <div className="pricing__delivery__section__content__card__content">
            {DeliveryCardEntry1.map((item) => (
              <div
                className="pricing__delivery__section__content__card__para"
                key={JSON.stringify(item)}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="pricing__delivery__section__content__card">
          <div className="pricing__delivery__section__content__card__heading">
            Domain Knowledge
          </div>
          <div className="pricing__delivery__section__content__card__content">
            {DeliveryCardEntry2.map((item) => (
              <div
                className="pricing__delivery__section__content__card__para"
                key={JSON.stringify(item)}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="pricing__delivery__section__content__card">
          <div className="pricing__delivery__section__content__card__heading">
            Technologies We Use
          </div>
          <div className="pricing__delivery__section__content__card__content">
            {DeliveryCardEntry3.map((item) => (
              <div
                className="pricing__delivery__section__content__card__para"
                key={JSON.stringify(item)}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
