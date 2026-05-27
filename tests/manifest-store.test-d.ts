import type { ManifestStore } from '../src/types'

import carEsPsCr from '../examples/car-es-Ps-Cr.json'
import chatGptImage from '../examples/ChatGPT_Image.json'
import cloudscapeAcaCr from '../examples/cloudscape-ACA-Cr.json'
import craterLakeCr from '../examples/crater-lake-cr.json'
import fireflyTabbyCat from '../examples/Firefly_tabby_cat.json'

// If any of these assignments fail to compile, ManifestStore doesn't cover that example.
const _car: ManifestStore = carEsPsCr
const _chatGpt: ManifestStore = chatGptImage
const _cloudscape: ManifestStore = cloudscapeAcaCr
const _craterLake: ManifestStore = craterLakeCr
const _firefly: ManifestStore = fireflyTabbyCat
