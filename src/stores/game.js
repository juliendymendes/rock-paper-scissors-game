import { defineStore } from "pinia";

export const useGameStore = defineStore("gameStore", {
  state: () => ({
    player: 0,
    house: 0,
    score: 0,
  }),
  actions: {
    setChoice(target, choice) {
      if (choice <= 4) {
        this[target] = choice;
      }
    },
  },
  getters: {
    getResult() {
			let winner = ''
      switch (this.player) {
        case 0:
          if (this.house == 0) {
            winner = "player";
            this.score += 1;
            break;
          }
          if (this.house == 1) {
            winner = "house";
            this.score -= 1;
            break;
          }
          if (this.house == 2) {
            winner = "player";
            this.score += 1;
            break;
          }
        case 1:
          if (this.house == 0) {
            winner = "player";
            this.score += 1;
            break;
          }
          if (this.house == 1) {
            winner = "player";
            this.score += 1;
            break;
          }
          if (this.house == 2) {
            winner = "house";
            this.score -= 1;
            break;
          }
				case 2:
					if (this.house == 0) {
            winner = "house";
            this.score -= 1;
            break;
          }
          if (this.house == 1) {
            winner = "player";
            this.score += 1;
            break;
          }
          if (this.house == 2) {
            winner = "house";
            this.score += 1;
            break;
          }
      }

			return winner
    },
  },
});
