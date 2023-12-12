import { defineStore } from "pinia";


export const useGameStore = defineStore('gameStore', {
	state: () => ({
		player: 0,
		house: 0,
		score: 0,
	}),
	actions: {
		setChoice(target, choice){
			if(choice <= 4){
				this[target] = choice
				console.log(this[target]);
			}
		},
	
	},
	getters: {

	}
})