import dayjs from "dayjs";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

interface Props {
  onClick: () => void;
  bitacoraid: number;
  author: string;
  bitacoraDate: string;
  totalEvents: number;
}

const notify = () =>
  toast.custom((t) => (
    <div
      className={`bg-white px-6 py-4 shadow-md rounded-full ${
        t.visible ? "animate-enter" : "animate-leave"
      }`}
    >
      Toast successfully 👋
    </div>
  ));

const HeaderBitacora: React.FC<Props> = ({
  bitacoraid,
  author,
  bitacoraDate,
  totalEvents,
}) => {
  const convertDate = (date: any) => {
    const d = dayjs(date).format("DD-MM-YYYY");
    return d;
  };
  //console.log("EventoHeader", totalEvents);
  return (
    <div className="flex rounded mb-1 shadow bg-slate-100 dark:bg-slate-800">
      <div className="py-1">
        <h3 className="text-2xl tahoma font-extrabold tracking-widest text-gray-500 dark:text-white">
          Administration Bitacora Events
        </h3>
        <h3 className="text-2xl tahoma font-extrabold tracking-widest  text-gray-500 dark:text-white">
          Bitacora:{bitacoraid}, Events:{totalEvents}{" "}
          <Link
            href={`/bita_events/4?id=${encodeURIComponent(bitacoraid)}`}
            target="_blank"
          >
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold mr-1 py-1 px-1 rounded-full inline-flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
              </svg>
            </button>
          </Link>
        </h3>
      </div>
      <div className="flex-grow text-right px-3 py-1 m-2">
        <button onClick={notify}>Toast</button>
        <Toaster />
      </div>{" "}
      <div className="py-1">
        <ul className="flex">
          <li className="flex flex-col items-center p-2 border-l-2 border-indigo-200  text-gray-500 dark:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-blue-600  dark:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />
            </svg>
            <span className="text-sm">Author</span>
            <span className="text-sm">{author}</span>
          </li>
          <li className="flex flex-col p-2 border-l-2 border-indigo-200  text-gray-500 dark:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-blue-600  dark:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="text-sm">{convertDate(bitacoraDate)}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderBitacora;
