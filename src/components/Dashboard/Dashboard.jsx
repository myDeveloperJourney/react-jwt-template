import { useEffect, useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { index } from '../../services/userService';

const Dashboard = () => {
  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const fetchedUsers = await index();
        console.log(fetchedUsers);
      } catch (error) {
        console.log(error)
      }
    }
    if (user) fetchUsers();
  }, [user]);

  return (
    <main>
      <h1>Welcome, {user.username}</h1>
      <p>
        This is the dashboard page where you can see a list of all the users.
      </p>
    </main>
  );
};

export default Dashboard;
