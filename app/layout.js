export const metadata = {
  title: 'Solventes Menos Tóxicos para Tinta a Óleo',
  description: 'Guia de solventes seguros e menos tóxicos para diluir tintas a óleo',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
