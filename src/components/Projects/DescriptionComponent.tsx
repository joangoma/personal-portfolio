import React from 'react';

interface DescriptionProps {
  title: string;
  description: string;
}

const ParsedParagraph: React.FC<{ text: string }> = ({ text }) => {
  // Split text by the pattern [text](url)
  const parsedText = text.split(/(\[.*?\]\(.*?\))/).map((part, index) => {
    const linkMatch = part.match(/\[(.*?)\]\((.*?)\)/);
    if (linkMatch) {
      return (
        <a
          key={index}
          href={linkMatch[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          {linkMatch[1]}
        </a>
      );
    }
    return part;
  });

  return <>{parsedText}</>;
};

const DescriptionComponent: React.FC<DescriptionProps> = ({ title, description }) => {
  return (
    <div className="ml-4">
      <h3 className="text-center md:text-left lg:text-left text-lg font-semibold text-gray-800">{title}</h3>
      {description.split('\n').map((paragraph, index) => (
        <p key={index} className="text-gray-600 mt-2 text-justify">
          <ParsedParagraph text={paragraph} />
        </p>
      ))}
    </div>
  );
};

export default DescriptionComponent;