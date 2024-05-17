import { MdDashboard, MdSupervisorAccount } from "react-icons/md";
import { RiComputerLine, RiCupFill } from "react-icons/ri";
import { FaHands } from "react-icons/fa";
import { nanoid } from "nanoid";

export const sidebarItems = [
    {
        id: nanoid(),
        title: "dashboard",
        icon: <MdDashboard color="#fff" className="icon"></MdDashboard>
    },
    {
        id: nanoid(),
        title: "workplace",
        icon: <RiComputerLine color="#fff" className="icon"></RiComputerLine>
    },
    {
        id: nanoid(),
        title: "holidays",
        icon: <RiCupFill color="#fff" className="icon"></RiCupFill>
    },
    {
        id: nanoid(),
        title: "employees",
        icon: <MdSupervisorAccount color="#fff" className="icon"></MdSupervisorAccount>
    },
    {
        id: nanoid(),
        title: "inbound requests",
        icon: <FaHands color="#fff" className="icon"></FaHands>
    },
]