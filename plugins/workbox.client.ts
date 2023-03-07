import { Workbox } from 'workbox-window'
import { swFile } from '@/common/global'

export default defineNuxtPlugin(() => {
  if ('serviceWorker' in navigator) {
    const wb = new Workbox(swFile)
    wb.addEventListener('installed', event => {
      if (event.isUpdate) {
        alert('update')
        window.location.reload()
      }
    })
    wb.register()
  }
})
