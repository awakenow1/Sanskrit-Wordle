import { CONFIG } from './config'

export const ORTHOGRAPHY = [
 'आ',
 'का',
 'ला',
 'श',
 'म्',
 'ल',
 'धु', 
 'ट',
 'ए',
 'द',
 'श',
 'उ',
 'र',
 'म',
 'को',
 'ष',
 'क',
 'म',
 'न',
 'दू',
 'वा',
 'णी',
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
