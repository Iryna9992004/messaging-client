import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import MessagePage from "../pages/MessagePage";

export const publicRoutes = [
  {
    link: "/",
    component: SignInPage,
  },
  {
    link: "/auth/registration",
    component: SignUpPage,
  },
];

export const protectedRoutes = [
  {
    link: "messaging",
    component: MessagePage,
  },
];
