
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import TimeTable from "./views/Timetable/TimeTable";
import UpdateTimeTable from "./views/Test/UpdateTimeTable";
import Inspector from "./components/Inspector/Inspector";
import Tasks from "./views/Tasks/Tasks";


const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    icon: Person,
    component: UserProfile,
    layout: "/admin",
    auth:"PASSENGER"
  },
  {
    path: "/table",
    name: "Ticket Pricing",
    icon: "content_paste",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Ride Schedules",
    icon: LibraryBooks,
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Smart Card",
    icon: BubbleChart,
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/timetable",
    name: "Time Table",
    icon: LibraryBooks,
    component: TimeTable,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Route Maps",
    icon: LocationOn,
    component: Maps,
    layout: "/admin",
    auth:"admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin",
    auth : "admin"
  },
  {
    path: "/updateTimeTable",
    name: "Update Time Table",
    icon: Notifications,
    component: UpdateTimeTable,
    layout: "/admin",
    auth : "admin"
  },
  {
    path: "/addInspector",
    name: "Add inspector",
    icon: Notifications,
    component: Inspector,
    layout: "/admin",
    auth : "admin"
  },
  {
    path: "/addTasks",
    name: "Add Tasks",
    icon: Notifications,
    component: Tasks,
    layout: "/admin",
    auth : "admin"
  }



];

export default dashboardRoutes;
