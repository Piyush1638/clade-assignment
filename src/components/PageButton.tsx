interface PageButtonProps {
  text: string;
  buttonClicked: string;
  onButtonClicked: (text: string) => void;
}

const PageButton: React.FC<PageButtonProps> = ({
  text,
  buttonClicked,
  onButtonClicked,
}) => (
  <button
    className={`text-[#888888] h-[4.188rem] text-xl ${
      buttonClicked === text
        ? "border-b-[3px] border-[#DC4A2D] text-[#DC4A2D] font-semibold"
        : "font-medium"
    } md:px-4 px-2 py-2 rounded-lg`}
    onClick={() => onButtonClicked(text)}
  >
    {text}
  </button>
);

export default PageButton;
