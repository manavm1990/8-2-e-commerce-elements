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
export default function UserTable() {
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
        <td>1</td>
        <td>Alice Johnson</td>
        <td>alice.johnson@example.com</td>
        <td>Customer</td>
      </tbody>
    </table>
    `;
}
