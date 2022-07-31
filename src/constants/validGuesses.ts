import { CONFIG } from './config'

export const VALIDGUESSES = [
  'आकाशम्',
  'उदरम्',
  'कमलम्',
  'मधुकोष',
  'चरणम्',
  'एकादश',
  'ललाटम्',
  'कनकम्',
  'दूरवाणी',
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
