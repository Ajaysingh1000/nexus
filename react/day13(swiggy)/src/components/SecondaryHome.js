import RestHeader from "./RestHeader"
import { Outlet } from "react-router"

const SecondaryHome = () => (
  <>
    <RestHeader />
    <Outlet />
  </>
)

export default SecondaryHome
