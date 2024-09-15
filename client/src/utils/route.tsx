import { createBrowserRouter } from "react-router-dom";
import ConversationPage from "../pages/ConversationPage";
import HomePage from "../pages/HomePage";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    children: [
      {
        path: 'chat',
        element: <ConversationPage />
      }
    ]
  }
]);
