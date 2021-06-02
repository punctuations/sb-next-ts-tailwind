export interface ButtonProps {
  size: string;
  content: string;
}

export const Button = ({ size, content }: ButtonProps) => {
  return (
    <button className={` bg-red-400 font-bold text-white px-6 py-2 ${size} `}>
      {content}
    </button>
  );
};
