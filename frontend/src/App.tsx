import { Container, Stack, Title } from '@mantine/core'
import { HealthStatus } from './health/HealthStatus.tsx'

function App() {
  return (
    <Container py="xl">
      <Stack>
        <Title order={1}>TutorDiary</Title>
        <HealthStatus />
      </Stack>
    </Container>
  )
}

export default App
