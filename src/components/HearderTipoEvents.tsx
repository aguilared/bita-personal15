import { Button } from "@mui/material";
import dayjs from "dayjs";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

interface Props {
  onClick: () => void;

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

const HearderTipoEvents: React.FC<Props> = ({ totalEvents }) => {
  //console.log("EventoHeader", totalEvents);
  return (
    <div className="flex rounded items-center justify-between flex-wrap bg-gray-500">
      <div className="flex-grow text-left text-gray-100 px-3 py-1 m-2 ">
        {" Admin Tipo Events"}
      </div>
      <div className="flex-grow text-right px-3 py-1 m-2 text-gray-100">
        <Button color="success" variant="contained" onClick={modalCreateOpen}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#F3F3F3"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
          </svg>
          Add
        </Button>
      </div>
    </div>
  );
};

export default HearderTipoEvents;
