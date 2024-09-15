import { Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <button className="btn btn-primary">Hello daisyUI</button>
      <Outlet />
    </>
  )
}
export default HomePage
