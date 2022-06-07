import { useEffect} from "react";

export default function Logout() {
  useEffect(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("typeId");
    localStorage.removeItem("userId");
    localStorage.clear();
    window.location = "/login";
  }, []);
  return null;
}
