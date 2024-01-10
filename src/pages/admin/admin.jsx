import { Link, Outlet, useLocation } from "react-router-dom";

// Components
import Layout from "../../components/layout";

const Admin = () => {
  const location = useLocation();

  return (
    <Layout>
      <div className="w-1/2 h-14 flex items-center justify-between mt-10">
        <div
          className={
            location?.pathname === "/admin/users"
              ? "w-1/2 h-full flex items-center justify-center border-b-2 border-pink"
              : "w-1/2 h-full flex items-center justify-center"
          }
        >
          <Link
            to={"/admin/users"}
            className={location?.pathname === "/admin/users" && "text-pink"}
          >
            Users
          </Link>
        </div>
        <div
          className={
            location?.pathname === "/admin/audios"
              ? "w-1/2 h-full flex items-center justify-center border-b-2 border-pink"
              : "w-1/2 h-full flex items-center justify-center"
          }
        >
          <Link
            to={"/admin/audios"}
            className={location?.pathname === "/admin/audios" && "text-pink"}
          >
            Audios
          </Link>
        </div>
      </div>
      <div className="w-1/2 h-auto gap-6 items-center border-t border-t-grayish pt-4">
        <Outlet />
      </div>
    </Layout>
  );
};

export default Admin;
