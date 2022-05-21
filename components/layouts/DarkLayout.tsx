
interface props {
  children: React.ReactNode
}
export function DarkLayout({ children }: props): JSX.Element {
  return (
    <div style={{
      backgroundColor: 'rgba(0,0,0,0.3)',
      borderRadius: '15px',
      padding: '10px'
    }}>
      <h3>Dark-Layout</h3>
      <div>
        {children}
      </div>
    </div>
  )
}


