import { useNavigate } from 'react-router-dom'


function Login() {
 
 const navigate = useNavigate()
   
 return (
    
    <div style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#0f172a'
    }}>

      <div style={{
        background: '#1e293b',
        padding: '40px',
        borderRadius: '12px',
        width: '420px',
        color: 'white'
      }}>

        <h1 style={{
          textAlign: 'center',
          marginBottom: '30px',
          whiteSpace: 'nowrap'
        }}>
          Auditoria Digital
        </h1>

        <input
          type="email"
          placeholder="E-mail"
          style={{
            width: '100%',
            padding: '12px',
            marginBottom: '15px',
            borderRadius: '8px',
            border: 'none'
          }}
        />

        <input
          type="password"
          placeholder="Senha"
          style={{
            width: '100%',
            padding: '12px',
            marginBottom: '20px',
            borderRadius: '8px',
            border: 'none'
          }}
        />

        <button onClick={() => navigate('/dashboard')} 
        style={{ width: '100%', 
        padding: '12px',
         background: '#2563eb',
          color: 'white',
           border: 'none',
            borderRadius: '8px',
             cursor: 'pointer' }} 
             > Entrar 
             </button>

      </div>

    </div>
  )
}

export default Login
