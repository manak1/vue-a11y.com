import { ref, watch, onMounted } from '@vue/composition-api'

import { debounce } from '@/theme/utils'

import useEventListener from './useEventListener'

export default function useSidebar (refs) {
  const isSidebarOpen = ref(false)
  const sidebarFixed = ref(false)
  const isSidebarFixed = debounce(setSidebarFixed, 200)

  useEventListener('resize', isSidebarFixed)

  onMounted(() => {
    isSidebarFixed()
  })

  watch(isSidebarOpen, val => {
    if (val) return window.addEventListener('keydown', toggleSidebarByKeyEscape)
    window.removeEventListener('keydown', toggleSidebarByKeyEscape)
  })

  function setSidebarFixed () {
    if (refs.sidebar) {
      sidebarFixed.value = window.getComputedStyle(refs.sidebar).position === 'fixed'
    }
  }

  function toggleSidebarByKeyEscape (e) {
    if (e.key === 'Escape') toggleSidebar()
  }

  function toggleOverflow (value) {
    setTimeout(() => {
      document.body.style.overflow = value ? 'hidden' : 'auto'
    }, 200)
  }

  function toggleSidebar () {
    isSidebarOpen.value = !isSidebarOpen.value
    toggleOverflow(isSidebarOpen.value)
  }

  return {
    sidebarFixed,
    isSidebarOpen,
    toggleSidebar
  }
}
