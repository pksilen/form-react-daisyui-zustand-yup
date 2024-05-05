import { useUserStore } from '../../stores/userStore';

export const UserList = () => {
  const users = useUserStore((store) => store.users);

  const userListItems = users.map(
    ({ id, firstName, lastName, streetAddress, zipCode, city, email, phoneNumber }) => (
      <li
        className="list-disc ml-6"
        key={id}
      >{`${firstName}, ${lastName}, ${streetAddress}, ${zipCode}, ${city}, ${email} ${phoneNumber}`}</li>
    )
  );

  return (
    <section>
      <h2 className="text-3xl mb-5">Users</h2>
      <ul>{userListItems}</ul>
    </section>
  );
};
