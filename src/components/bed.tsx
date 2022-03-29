import Protected from "./protected";
import UserLayout from "./user-layout";

const UserDashboard: React.FC = () => (
  <Protected>
    <UserLayout>Bed</UserLayout>
  </Protected>
);

export default UserDashboard;
