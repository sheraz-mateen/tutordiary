import { Alert, Badge, Group, Loader, Text } from '@mantine/core'
import { useEffect, useState } from 'react'
import { getHealth, type HealthResponse } from './healthApi.ts'

type HealthState =
  | { kind: 'loading' }
  | { kind: 'loaded'; health: HealthResponse }
  | { kind: 'failed'; message: string }

export function HealthStatus() {
  const [state, setState] = useState<HealthState>({ kind: 'loading' })

  useEffect(() => {
    const abortController = new AbortController()

    getHealth(abortController.signal)
      .then((health) => setState({ kind: 'loaded', health }))
      .catch((error: unknown) => {
        if (abortController.signal.aborted) {
          return
        }
        const message = error instanceof Error ? error.message : 'Unknown error'
        setState({ kind: 'failed', message })
      })

    return () => abortController.abort()
  }, [])

  if (state.kind === 'loading') {
    return (
      <Group gap="xs">
        <Loader size="xs" />
        <Text>Checking API health…</Text>
      </Group>
    )
  }

  if (state.kind === 'failed') {
    return (
      <Alert color="red" title="API unreachable">
        {state.message}
      </Alert>
    )
  }

  return (
    <Group gap="xs">
      <Text>API status:</Text>
      <Badge color="green">{state.health.status}</Badge>
    </Group>
  )
}
