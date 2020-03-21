/*
 ============================================================================
 Name        : S2_Ex_7-boucle.c
 Author      : Cyril M
 Version     : 3
 Copyright   : Your copyright notice
 Description : Test Boucle
 ============================================================================
 */

#define N 5
  //lire la ième case du tableau e: e[i]
  //affecter la ième cse du tableau r: r[i]=valeur;
  //le tableau est accessible de 0 à N -1, ie de e[0] à e[4] en l'occurence
  
void mapDouble(int e[],int r[]){
  boucle(r[i]=e[i]*2);
}

void boucle(){
  for(int i=0;i<N;i++)
  {  }

int main(){
  int e[N] = {1,5,2,4,3};
  int r_double[N];
  mapDouble(e,r_double); // r_double contiendra {2,10,4,8,6}
  boucle(printf("Le double de %d est égal à %d\n", e[i], r_double[i]);
    ){
  }
}
