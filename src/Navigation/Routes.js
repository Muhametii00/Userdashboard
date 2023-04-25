import { useRoutes } from "react-router-dom";
import { Dashboard } from "../components/screens/Dashboard";
import { Profile } from "../components/screens/Profile";
import { Formelement } from "../components/screens/Formelement";
import { Table } from "../components/screens/Table";
import { FormLayout } from "../components/screens/FormLayout";
import { Inbox } from "../components/screens/Inbox";
import { Invoice } from "../components/screens/Invoice";
import { Settings } from "../components/screens/Settings";
import { SignIn } from "../components/screens/SignIn";
import { SignUp } from "../components/screens/SignUp";
import { ResetPassword } from "../components/screens/ResetPassword";
import { Alerts } from "../components/screens/Alerts";
import { Buttons } from "../components/screens/Buttons";
import { Calendar } from "../components/screens/Calendar";

export const dashboardRoutes = [
  {
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/profile", element: <Profile /> },
      { path: "/form-element", element: <Formelement /> },
      { path: "/form-layout", element: <FormLayout /> },
      { path: "/table", element: <Table /> },
      { path: "/inbox", element: <Inbox /> },
      { path: "/invoice", element: <Invoice /> },
      { path: "/settings", element: <Settings /> },
      { path: "/sign-in", element: <SignIn /> },
      { path: "/sign-up", element: <SignUp /> },
      { path: "/reset-password", element: <ResetPassword /> },
      { path: "/alerts", element: <Alerts /> },
      { path: "/buttons", element: <Buttons /> },
      { path: "/calendar", element: <Calendar /> },
    ],
  },
];

export const Routes = () => {
  const routes = useRoutes(dashboardRoutes);

  return routes;
};
