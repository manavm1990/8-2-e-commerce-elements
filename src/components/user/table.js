export default function UserTable(users) {
  return `
    <table>
      <thead>
        <tr>
          🆔
        </tr>
        <tr>
          Name
        </tr>
        <tr>
          Email
        </tr>
        <tr>
          Role
        </tr>
      </thead>

      <tbody>
        ${users
          .map((user) => {
            return `
            <tr>
              <td>${user.id}</td>
              <td>${user.name}</td>
              <td>${user.email}</td>
              <td>${user.role}</td>
            </tr>
          `;
          })
          .join("\n")}
      </tbody>
    </table>
    `;
}
