import { useEffect} from "react";

export default function Logout() {
  useEffect(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("typeId");
    window.location = "/login";
  }, []);
  return null;
}
