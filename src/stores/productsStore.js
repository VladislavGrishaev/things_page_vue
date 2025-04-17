import { defineStore } from 'pinia'
import itemsData from '../data/items.json'

export const useProductsStore = defineStore('products', {
  state: () => ({
    userItems: itemsData.userItems,
    rightItems: itemsData.rightItems,
    selectedUserItems: [],
    selectedRightItem: null
  }),
  actions: {
    toggleUserItem(item) {
      const index = this.selectedUserItems.findIndex(i => i.id === item.id)

      if (index > -1) {
        if (this.selectedUserItems.length > 1) {
          this.selectedUserItems.splice(index, 1)
        }
      }
      else {
        if (this.selectedUserItems.length < 6) {
          this.selectedUserItems.push(item)
        }
      }
    },

    toggleRightItem(item) {
      this.selectedRightItem = this.selectedRightItem?.id === item.id ? null : item
    },

    clearAllSelections() {
      this.selectedUserItems = []
      this.selectedRightItem = null
    }
  },
  getters: {
    isUserItemSelected: (state) => (item) => {
      return state.selectedUserItems.some(i => i.id === item.id)
    },
    isRightItemSelected: (state) => (item) => {
      return state.selectedRightItem?.id === item.id
    }
  }
})