var app = new Vue({
  el: '.app-page',
  data: {
    joueur: 1,
    scorej1: 0,
    scorej2: 0,
    matchNul: 0,
    case1: 0,
    case2: 0,
    case3: 0,
    case4: 0,
    case5: 0,
    case6: 0,
    case7: 0,
    case8: 0,
    case9: 0
  },
  methods: {
    ajouter: function(numCase){
      // On converti numCase en nombre entier
      numCase = parseInt(numCase);
      console.log(numCase);
      // Test si la case est égale à 1 et caseX = 0
      if(numCase == 1 && this.case1 == 0){
        // attribue la valeur de player à la case
        this.case1 = this.joueur;
        // lance fonction testVictoire et ChangePlayer
        this.testVictoire();
        this.changePlayer();
        this.checkNul();
      } else if(numCase == 2 && this.case2 == 0){
        this.case2 = this.joueur;
        this.testVictoire();
        this.changePlayer();
        this.checkNul();
      } else if(numCase == 3 && this.case3 == 0){
        this.case3 = this.joueur;
        this.testVictoire();
        this.changePlayer();
        this.checkNul();
      }
      else if(numCase == 4 && this.case4 == 0){
        this.case4 = this.joueur;
        this.testVictoire();
        this.changePlayer();
        this.checkNul();
      }
      else if(numCase == 5 && this.case5 == 0){
        this.case5 = this.joueur;
        this.testVictoire();
        this.changePlayer();
        this.checkNul();
      }
      else if(numCase == 6 && this.case6 == 0){
        this.case6 = this.joueur;
        this.testVictoire();
        this.changePlayer();
        this.checkNul();
      }
      else if(numCase == 7 && this.case7 == 0){
        this.case7 = this.joueur;
        this.testVictoire();
        this.changePlayer();
        this.checkNul();
      }
      else if(numCase == 8 && this.case8 == 0){
        this.case8 = this.joueur;
        this.testVictoire();
        this.changePlayer();
        this.checkNul();
      }
      else if(numCase == 9 && this.case9 == 0){
        this.case9 = this.joueur;
        this.testVictoire();
        this.changePlayer();
        this.checkNul();
      }
      // faire tous les tests, jusqu'à la 9e case.
    },
    testVictoire: function(){
      if(this.joueur == 1){
        //CAS HORIZONTAUX
        if(this.case1 == 1 && this.case2 == 1 && this.case3 == 1){
          this.scorej1++;
          this.case1 = this.case2 = this.case3 = this.case4 = this.case5 = this.case6 = this.case7 = this.case8 = this.case9 = 0;
        } else if(this.case4 == 1 && this.case5 == 1 && this.case6 == 1){
          this.scorej1++;
          this.case1 = this.case2 = this.case3 = this.case4 = this.case5 = this.case6 = this.case7 = this.case8 = this.case9 = 0;
        } else if(this.case7 == 1 && this.case8 == 1 && this.case9 == 1){
          this.scorej1++;
          this.case1 = this.case2 = this.case3 = this.case4 = this.case5 = this.case6 = this.case7 = this.case8 = this.case9 = 0;
        }
        //CAS VERTICAUX
        else if(this.case1 == 1 && this.case4 == 1 && this.case7 == 1){
          this.scorej1++;
          this.case1 = this.case2 = this.case3 = this.case4 = this.case5 = this.case6 = this.case7 = this.case8 = this.case9 = 0;
        }
        else if(this.case2 == 1 && this.case5 == 1 && this.case8 == 1){
          this.scorej1++;
          this.case1 = this.case2 = this.case3 = this.case4 = this.case5 = this.case6 = this.case7 = this.case8 = this.case9 = 0;
        }
        else if(this.case3 == 1 && this.case6 == 1 && this.case9 == 1){
          this.scorej1++;
          this.case1 = this.case2 = this.case3 = this.case4 = this.case5 = this.case6 = this.case7 = this.case8 = this.case9 = 0;
        }
        //CAS DIAGONALES
        else if(this.case1 == 1 && this.case5 == 1 && this.case9 == 1){
          this.scorej1++;
          this.case1 = this.case2 = this.case3 = this.case4 = this.case5 = this.case6 = this.case7 = this.case8 = this.case9 = 0;
        }
        else if(this.case3 == 1 && this.case5 == 1 && this.case7 == 1){
          this.scorej1++;
          this.case1 = this.case2 = this.case3 = this.case4 = this.case5 = this.case6 = this.case7 = this.case8 = this.case9 = 0;
        }
      } else {
        //CAS HORIZONTAUX
        if(this.case1 == 2 && this.case2 == 2 && this.case3 == 2){
          this.scorej2++;
          this.case1 = this.case2 = this.case3 = this.case4 = this.case5 = this.case6 = this.case7 = this.case8 = this.case9 = 0;
        } else if(this.case4 == 2 && this.case5 == 2 && this.case6 == 2){
          this.scorej2++;
          this.case1 = this.case2 = this.case3 = this.case4 = this.case5 = this.case6 = this.case7 = this.case8 = this.case9 = 0;
        } else if(this.case7 == 2 && this.case8 == 2 && this.case9 == 2){
          this.scorej2++;
          this.case1 = this.case2 = this.case3 = this.case4 = this.case5 = this.case6 = this.case7 = this.case8 = this.case9 = 0;
        }
        //CAS VERTICAUX
        else if(this.case1 == 2 && this.case4 == 2 && this.case7 == 2){
          this.scorej2++;
          this.case1 = this.case2 = this.case3 = this.case4 = this.case5 = this.case6 = this.case7 = this.case8 = this.case9 = 0;
        }
        else if(this.case2 == 2 && this.case5 == 2 && this.case8 == 2){
          this.scorej2++;
          this.case1 = this.case2 = this.case3 = this.case4 = this.case5 = this.case6 = this.case7 = this.case8 = this.case9 = 0;
        }
        else if(this.case3 == 2 && this.case6 == 2 && this.case9 == 2){
          this.scorej2++;
          this.case1 = this.case2 = this.case3 = this.case4 = this.case5 = this.case6 = this.case7 = this.case8 = this.case9 = 0;
        }
        //CAS DIAGONALES
        else if(this.case1 == 2 && this.case5 == 2 && this.case9 == 2){
          this.scorej2++;
          this.case1 = this.case2 = this.case3 = this.case4 = this.case5 = this.case6 = this.case7 = this.case8 = this.case9 = 0;
        }
        else if(this.case3 == 2 && this.case5 == 2 && this.case7 == 2){
          this.scorej2++;
          this.case1 = this.case2 = this.case3 = this.case4 = this.case5 = this.case6 = this.case7 = this.case8 = this.case9 = 0;
        }
      }
    },
    changePlayer: function(){
      console.log("changePlayer");
      if (this.joueur == 1)
      this.joueur = 2;
      else
      this.joueur = 1;
    },
    resetPartie: function(){
      this.case1 = this.case2 = this.case3 = this.case4 = this.case5 = this.case6 = this.case7 = this.case8 = this.case9 = 0;
    },
    checkNul: function(){
      if(this.case1 != 0 && this.case2 != 0 && this.case3 != 0 && this.case4 != 0 && this.case5 != 0 && this.case6 != 0 && this.case7 != 0 && this.case8 != 0 && this.case9 != 0){
        this.matchNul++;
        this.resetPartie();
      }
    }
  }
});
