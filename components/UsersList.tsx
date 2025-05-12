import { fetchUsers } from "@/utils/actions";

const UsersList = async () => {
  const users = await fetchUsers();
  return (
    <div className="mt-3">
      {users.map((user) => {
        return (
          <h4 key={user.id} className="capitalize text-lg">
            {user.firstName} {user.lastName}
          </h4>
        );
      })}
    </div>
  );
};
export default UsersList;
