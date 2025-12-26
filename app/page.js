'use client'

import { useState } from 'react'

export default function Home() {
  const [selectedSolvent, setSelectedSolvent] = useState(null)

  const solvents = [
    {
      id: 1,
      name: 'Óleo de Espique (Spike Lavender Oil)',
      toxicity: 'Baixa',
      color: '#4ade80',
      pros: [
        'Odor agradável de lavanda',
        'Baixa toxicidade',
        'Evapora lentamente',
        'Não requer ventilação especial'
      ],
      cons: [
        'Mais caro que solventes tradicionais',
        'Seca mais lentamente',
        'Pode ser difícil de encontrar'
      ],
      usage: 'Use como substituto direto para aguarrás. Adicione pequenas quantidades à tinta até obter a consistência desejada.'
    },
    {
      id: 2,
      name: 'Óleo de Cítricos (Citrus Solvent)',
      toxicity: 'Baixa',
      color: '#4ade80',
      pros: [
        'Biodegradável',
        'Odor cítrico agradável',
        'Não inflamável',
        'Limpa pincéis eficientemente'
      ],
      cons: [
        'Pode causar irritação em peles sensíveis',
        'Evapora lentamente',
        'Preço moderado'
      ],
      usage: 'Excelente para limpeza de pincéis e diluição moderada. Evite contato prolongado com a pele.'
    },
    {
      id: 3,
      name: 'Óleo de Linhaça',
      toxicity: 'Muito Baixa',
      color: '#22c55e',
      pros: [
        'Praticamente atóxico',
        'Aumenta brilho e transparência',
        'Melhora fluidez da tinta',
        'Fácil de encontrar'
      ],
      cons: [
        'Não é solvente verdadeiro (é um medium)',
        'Aumenta tempo de secagem',
        'Pode amarelar com o tempo'
      ],
      usage: 'Use em pequenas quantidades para diluir tinta. Combine com solvente mais volátil para controlar secagem.'
    },
    {
      id: 4,
      name: 'Solventes sem Odor (Gamsol, Sansodor)',
      toxicity: 'Baixa a Moderada',
      color: '#fbbf24',
      pros: [
        'Sem odor forte',
        'Menos vapores tóxicos que aguarrás',
        'Evapora em taxa moderada',
        'Amplamente disponível'
      ],
      cons: [
        'Ainda requer ventilação adequada',
        'Mais caro que aguarrás comum',
        'Não é completamente atóxico'
      ],
      usage: 'Use com ventilação. Opção intermediária entre aguarrás tradicional e solventes naturais.'
    },
    {
      id: 5,
      name: 'Técnica Sem Solvente',
      toxicity: 'Nenhuma',
      color: '#22c55e',
      pros: [
        'Zero toxicidade',
        'Sem vapores nocivos',
        'Economiza dinheiro',
        'Melhor para saúde'
      ],
      cons: [
        'Requer adaptação da técnica',
        'Pintura mais espessa',
        'Limpeza diferente (óleo + sabão)'
      ],
      usage: 'Use tinta direto do tubo ou misture com óleos (linhaça, papoula, cártamo). Limpe pincéis com óleo vegetal seguido de sabão.'
    }
  ]

  const dangerousSolvents = [
    {
      name: 'Aguarrás Comum',
      reason: 'Vapores tóxicos, irritação respiratória, dores de cabeça'
    },
    {
      name: 'White Spirit',
      reason: 'Neurotóxico, pode causar danos ao sistema nervoso'
    },
    {
      name: 'Terebintina',
      reason: 'Alergênica, irritante para pele e vias respiratórias'
    }
  ]

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <header style={{
          textAlign: 'center',
          color: 'white',
          marginBottom: '40px'
        }}>
          <h1 style={{
            fontSize: '2.5rem',
            marginBottom: '10px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            🎨 Solventes Menos Tóxicos para Tinta a Óleo
          </h1>
          <p style={{
            fontSize: '1.2rem',
            opacity: 0.9
          }}>
            Proteja sua saúde enquanto cria arte
          </p>
        </header>

        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '30px',
          marginBottom: '30px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
        }}>
          <h2 style={{
            color: '#333',
            marginBottom: '20px',
            fontSize: '1.8rem'
          }}>
            ⚠️ Evite Estes Solventes Tóxicos
          </h2>
          <div style={{
            display: 'grid',
            gap: '15px'
          }}>
            {dangerousSolvents.map((solvent, idx) => (
              <div key={idx} style={{
                background: '#fee2e2',
                border: '2px solid #ef4444',
                borderRadius: '8px',
                padding: '15px'
              }}>
                <h3 style={{
                  color: '#dc2626',
                  margin: '0 0 8px 0',
                  fontSize: '1.2rem'
                }}>
                  {solvent.name}
                </h3>
                <p style={{
                  color: '#991b1b',
                  margin: 0,
                  fontSize: '0.95rem'
                }}>
                  {solvent.reason}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '30px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
        }}>
          <h2 style={{
            color: '#333',
            marginBottom: '20px',
            fontSize: '1.8rem'
          }}>
            ✅ Alternativas Seguras
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
            marginBottom: '30px'
          }}>
            {solvents.map((solvent) => (
              <div
                key={solvent.id}
                onClick={() => setSelectedSolvent(selectedSolvent?.id === solvent.id ? null : solvent)}
                style={{
                  background: selectedSolvent?.id === solvent.id ? '#f0f9ff' : '#f9fafb',
                  border: `3px solid ${selectedSolvent?.id === solvent.id ? '#3b82f6' : '#e5e7eb'}`,
                  borderRadius: '12px',
                  padding: '20px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  transform: selectedSolvent?.id === solvent.id ? 'scale(1.02)' : 'scale(1)',
                  boxShadow: selectedSolvent?.id === solvent.id ? '0 8px 16px rgba(59,130,246,0.2)' : '0 2px 4px rgba(0,0,0,0.05)'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '12px'
                }}>
                  <h3 style={{
                    color: '#1f2937',
                    margin: 0,
                    fontSize: '1.1rem',
                    flex: 1
                  }}>
                    {solvent.name}
                  </h3>
                  <span style={{
                    background: solvent.color,
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    marginLeft: '10px',
                    whiteSpace: 'nowrap'
                  }}>
                    {solvent.toxicity}
                  </span>
                </div>

                <p style={{
                  color: '#6b7280',
                  fontSize: '0.9rem',
                  margin: 0
                }}>
                  Clique para ver detalhes
                </p>
              </div>
            ))}
          </div>

          {selectedSolvent && (
            <div style={{
              background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
              border: '2px solid #3b82f6',
              borderRadius: '12px',
              padding: '30px',
              animation: 'fadeIn 0.3s ease'
            }}>
              <h3 style={{
                color: '#1e40af',
                fontSize: '1.6rem',
                marginTop: 0,
                marginBottom: '20px'
              }}>
                {selectedSolvent.name}
              </h3>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '20px',
                marginBottom: '20px'
              }}>
                <div>
                  <h4 style={{
                    color: '#047857',
                    marginBottom: '10px',
                    fontSize: '1.1rem'
                  }}>
                    ✓ Vantagens
                  </h4>
                  <ul style={{
                    color: '#065f46',
                    paddingLeft: '20px',
                    margin: 0
                  }}>
                    {selectedSolvent.pros.map((pro, idx) => (
                      <li key={idx} style={{ marginBottom: '6px' }}>{pro}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 style={{
                    color: '#c2410c',
                    marginBottom: '10px',
                    fontSize: '1.1rem'
                  }}>
                    ⚠ Desvantagens
                  </h4>
                  <ul style={{
                    color: '#9a3412',
                    paddingLeft: '20px',
                    margin: 0
                  }}>
                    {selectedSolvent.cons.map((con, idx) => (
                      <li key={idx} style={{ marginBottom: '6px' }}>{con}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div style={{
                background: 'white',
                borderRadius: '8px',
                padding: '20px',
                marginTop: '20px'
              }}>
                <h4 style={{
                  color: '#1e40af',
                  marginTop: 0,
                  marginBottom: '10px',
                  fontSize: '1.1rem'
                }}>
                  💡 Como Usar
                </h4>
                <p style={{
                  color: '#334155',
                  margin: 0,
                  lineHeight: '1.6'
                }}>
                  {selectedSolvent.usage}
                </p>
              </div>
            </div>
          )}
        </div>

        <div style={{
          background: 'rgba(255,255,255,0.95)',
          borderRadius: '12px',
          padding: '25px',
          marginTop: '30px',
          boxShadow: '0 8px 20px rgba(0,0,0,0.15)'
        }}>
          <h3 style={{
            color: '#1f2937',
            marginTop: 0,
            marginBottom: '15px',
            fontSize: '1.3rem'
          }}>
            📋 Dicas Gerais de Segurança
          </h3>
          <ul style={{
            color: '#4b5563',
            lineHeight: '1.8',
            paddingLeft: '20px'
          }}>
            <li>Sempre trabalhe em ambiente ventilado, mesmo com solventes menos tóxicos</li>
            <li>Use luvas de nitrilo para proteger a pele</li>
            <li>Mantenha solventes longe de fontes de calor</li>
            <li>Armazene em recipientes bem fechados</li>
            <li>Considere trabalhar sem solventes usando técnicas alla prima</li>
            <li>Limpe pincéis primeiro com óleo vegetal, depois com sabão</li>
          </ul>
        </div>

        <footer style={{
          textAlign: 'center',
          color: 'white',
          marginTop: '40px',
          padding: '20px',
          opacity: 0.9
        }}>
          <p style={{ margin: 0, fontSize: '0.9rem' }}>
            🎨 Feito para artistas que valorizam sua saúde
          </p>
        </footer>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
