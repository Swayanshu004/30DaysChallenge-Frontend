import Link from "next/link";
import { FaCircle } from "react-icons/fa"; // Importing the dot icon

const Home: React.FC = () => {
  // Example list data
  const items: string[] = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
    "Item 10",
    "Item 11",
    "Item 12",
    "Item 13",
    "Item 14",
    "Item 15",
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black-100">
      <div className="bg-black p-6 rounded-lg shadow-lg w-2/4">
        <h1 className="text-3xl font-bold mb-4 text-white">List of Items</h1>

        <ul className="space-y-2 mb-6">
          {items.map((item, index) => (
            <li
              key={index}
              className="bg-black px-5 rounded-lg shadow-sm text-white text-lg flex items-center"
            >
              {/* Dot Icon and item */}
              {/* <FaCircle className="mr-2 text-xs text-white" />  */}
              {/* Dot Icon added */}
              {index + 1}.{item}
            </li>
          ))}
        </ul>

        {/* Centered Registration button with custom color */}
        <div className="flex justify-center">
          <Link href="/" passHref>
            <button
              className="text-black font-semibold px-4 py-2 rounded-lg shadow hover:opacity-80 transition"
              style={{ backgroundColor: "#ff4000" }}
            >
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
