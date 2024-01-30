import { Button } from '../../components/Button/button.jsx'
import { Header } from '../../components/Header/header.jsx'
import { Container, Links, Content } from './styles'
import { Section } from '../../components/Section/section.jsx'
import { Tag } from '../../components/Tag/tag.jsx'
import { ButtonText } from '../../components/ButtonText/button-text.jsx'

import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'

export function Details() {
  const [data, setData] = useState(null)
  const params = useParams()
  const navigate = useNavigate()

  function hadleBack() {
    navigate(-1)
  }

  async function hadleRemove() {
    const confirm = window.confirm('Tem certeza que deseja excluir essa nota?')

    if (confirm) {
      await api.delete(`/notes/${params.id}`)
      navigate(-1)
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }

    fetchNote()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container>
      <Header />

      {data && (
        <main>
          <Content>
            <ButtonText title="Excluir nota" onClick={hadleRemove} />

            <h1>{data.title}</h1>
            <p>{data.description}</p>

            {data.links && (
              <Section title="Links úteis">
                <Links>
                  {data.links.map((link) => (
                    <li key={String(link.id)}>
                      <a href={link.url} target="_blank" rel="noreferrer">
                        {link.url}
                      </a>
                    </li>
                  ))}
                </Links>
              </Section>
            )}

            {data.tags && (
              <Section title="Marcadores">
                {data.tags.map((tag) => (
                  <Tag key={String(tag.id)} title={tag.name} />
                ))}
              </Section>
            )}

            <Button onClick={hadleBack} title="Voltar" />
          </Content>
        </main>
      )}
    </Container>
  )
}
