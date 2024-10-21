/**
 * TODO: Create a user table component that displays a list of users from our 'database.'
 *
 * See users in the `'db'` folder 📁.
 *
 * The table should have the following columns:
 * - 🆔
 * - Name
 * - Email
 * - Role
 *
 * Make sure it's semantic HTML.
 * No styles 💄 needed.
 */

export default function UserTable(users) {
  return `
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>EMail</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        ${users.map(
          (user) => `
          <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.role}</td>
          </tr>
        `,
        )}
      </tbody>
    </table>
    `;
}
