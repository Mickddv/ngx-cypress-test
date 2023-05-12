import { defineConfig } from 'cypress'

export default defineConfig({
  viewportHeight: 1000,
  viewportWidth: 1920,
  e2e: {
    baseUrl: 'http://localhost:4200',
  },
})