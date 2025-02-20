import Link from "next/link";

interface Props {
  children: React.ReactNode;
  asLinked?: boolean;
  className?: string; 
  path?: string;
  type?: "button" | "submit" | "reset";
}

const CustomButton = ({
  children,
  asLinked = false,
  path = "#",
  type = "button",
}: Props) => {
  if (asLinked && !path) {
    console.error(
      "Button component with 'asLinked' must have a valid 'path' prop."
    );
  }

  if (asLinked) {
    return (
      <Link
        href={path}
        className={`relative text-white font-bold text-lg bg-yellow-400 rounded shadow-lg 
  before:content-[''] before:absolute before:-bottom-1.5 before:left-1.5 before:w-full before:h-full 
  before:bg-white before:rounded before:-z-10 hover:-translate-y-0.5 hover:before:-translate-y-0.5 transition-all duration-300 ease-in-out `}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className="relative px-6 py-3 text-black font-bold text-lg bg-yellow-400 rounded shadow-lg 
  before:content-[''] before:absolute before:-bottom-1.5 before:left-1.5 before:w-full before:h-full 
  before:bg-white before:rounded before:-z-10"
    >
      {children}
    </button>
  );
};

export default CustomButton;
