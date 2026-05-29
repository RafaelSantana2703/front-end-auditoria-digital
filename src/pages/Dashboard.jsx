
function Dashboard() {
  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      background: '#0f172a',
      color: 'white',
      fontFamily: 'Arial'
    }}>

      {/* SIDEBAR */}
      <div style={{
        width: '250px',
        background: '#1e293b',
        padding: '20px'
      }}>

        <h2 style={{
          marginBottom: '40px'
        }}>
          Auditoria Digital
        </h2>

        <ul style={{
          listStyle: 'none',
          padding: 0
        }}>

          <li style={menuItem}>
            Dashboard
          </li>

          <li style={menuItem}>
            Nova Vistoria
          </li>

          <li style={menuItem}>
            Evidências
          </li>

          <li style={menuItem}>
            Relatórios
          </li>

          <li style={menuItem}>
            Configurações
          </li>

        </ul>

      </div>

      {/* CONTEÚDO */}
      <div style={{
        flex: 1,
        padding: '30px'
      }}>

        <h1>
          Painel de Controle
        </h1>

        {/* CARDS */}
        <div style={{
          display: 'flex',
          gap: '20px',
          marginTop: '30px'
        }}>

          <div style={cardStyle}>
            <h3>Vistorias Hoje</h3>
            <p style={numeroStyle}>12</p>
          </div>

          <div style={cardStyle}>
            <h3>Evidências</h3>
            <p style={numeroStyle}>58</p>
          </div>

          <div style={cardStyle}>
            <h3>Relatórios</h3>
            <p style={numeroStyle}>23</p>
          </div>

        </div>

        {/* TABELA */}
        <div style={{
          marginTop: '40px',
          background: '#1e293b',
          padding: '20px',
          borderRadius: '12px'
        }}>

          <h2>
            Últimas Vistorias
          </h2>

          <table style={{
            width: '100%',
            marginTop: '20px',
            borderCollapse: 'collapse'
          }}>

            <thead>

              <tr>

                <th style={tableHeader}>
                  ID
                </th>

                <th style={tableHeader}>
                  Plataforma
                </th>

                <th style={tableHeader}>
                  Responsável
                </th>

                <th style={tableHeader}>
                  Data
                </th>

              </tr>

            </thead>

            <tbody>

              <tr>

                <td style={tableCell}>001</td>
                <td style={tableCell}>Instagram</td>
                <td style={tableCell}>eduardo</td>
                <td style={tableCell}>29/05/2026</td>

              </tr>

              <tr>

                <td style={tableCell}>002</td>
                <td style={tableCell}>Telegram</td>
                <td style={tableCell}>carlos</td>
                <td style={tableCell}>29/05/2026</td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  )
}

const menuItem = {
  padding: '15px',
  cursor: 'pointer',
  borderRadius: '8px',
  marginBottom: '10px',
  background: '#334155'
}

const cardStyle = {
  background: '#1e293b',
  padding: '20px',
  borderRadius: '12px',
  width: '220px'
}

const numeroStyle = {
  fontSize: '40px',
  fontWeight: 'bold'
}

const tableHeader = {
  textAlign: 'left',
  padding: '12px',
  borderBottom: '1px solid #334155'
}

const tableCell = {
  padding: '12px',
  borderBottom: '1px solid #334155'
}

export default Dashboard
