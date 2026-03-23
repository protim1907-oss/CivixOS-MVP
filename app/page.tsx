import { createClient } from '@/lib/supabase/server'

export default async function Home() {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('districts')
    .select('*')

  return (
    <main style={{ padding: '24px' }}>
      <h1>Supabase Test</h1>
      <pre>{JSON.stringify({ data, error }, null, 2)}</pre>
    </main>
  )
}
