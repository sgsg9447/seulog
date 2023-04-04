
interface IconButtonProps {
  icon: React.ReactNode;
}

export default function IconButton({ icon }: IconButtonProps) {
  return (
    <button className="p-2 bg-black rounded-md hover:bg-gray-700 ">
      {icon}
    </button>
  );
}
