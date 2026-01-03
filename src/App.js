function App() {
  return (
  <div>
    <nav>
      <ul style={{
        color: 'blue',
        backgroundColor: 'lightgray',
        padding: '10px',
        flex: 'center',
        listStyleType: 'none', 
        display: 'flex', 
        gap: '20px'}}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
    <h1 style={{
      fontSize: '32px',
      color: 'red'
    }}>Hello My Name is sourav</h1>
    <p>This is a simple app to demonstrate a React component.</p>
    <table>
    <th>Table
    </th>
     <tr>Sourav</tr>
     <tr>Surav</tr>
     </table>
  </div>
)
}
 
export default App;