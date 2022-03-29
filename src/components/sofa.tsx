import Protected from "./protected";
import UserLayout from "./user-layout";

const UserDashboard: React.FC = () => (
  <Protected>
    <UserLayout>Sofa</UserLayout>
  </Protected>
);

export default UserDashboard;
