import { defineStore } from "pinia";


export const useGameStore = defineStore('gameStore', {
	state: () => ({
		player: 0,
		house: 0,
		score: 0
	}),
	actions: {

	},
	getters: {

	}
})