import { useUserStore } from '../../stores/userStore';

export const UserList = () => {
  const users = useUserStore((store) => store.users);

  const userListItems = users.map(
    ({ id, firstName, lastName, streetAddress, zipCode, city, email, phoneNumber }) => (
      <li
        className="ml-6 list-disc"
        key={id}
      >{`${firstName}, ${lastName}, ${streetAddress}, ${zipCode}, ${city}, ${email} ${phoneNumber}`}</li>
    )
  );

  return (
    <section>
      <h2 className="mb-5 text-3xl font-bold ">Users</h2>
      <ul>{userListItems}</ul>
    </section>
  );
};
