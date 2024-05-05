import { UserList } from './components/userlist/UserList';
import { UserRegistration } from './components/userregistration/UserRegistration';

export default function App() {
  return (
    <main className="ml-3 mt-3 flex gap-20">
      <UserRegistration />
      <div className="w-0 border-l-2 border-l-gray-700"></div>
      <UserList />
    </main>
  );
}
