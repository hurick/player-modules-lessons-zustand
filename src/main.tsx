import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Player } from '@/modules/Player'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Player />
  </StrictMode>
)
