/*
 ============================================================================
 Name        : S2_Ex_6.c
 Author      : Cyril M
 Version     : 3
 Copyright   : Your copyright notice
 Description : Test fonction in C, Ansi-style
 ============================================================================
 */

#define N 5
  //lire la ième case du tableau e: e[i]
  //affecter la ième cse du tableau r: r[i]=valeur;
  //le tableau est accessible de 0 à N -1, ie de e[0] à e[4] en l'occurence
  
void mapDouble(int e[],int r[]){
  for(int i=0;i<N;i++)
  {
    r[i]=e[i]*2;
  }
}

void mapTriple(int e[], int r[]){
  for(int i=0;i<N;i++)  {
    r[i]=e[i]*3;
  }
}

void mapSquare(int e[], int r[]){
  for(int i=0;i<N;i++)
  {
    r[i]=e[i]*e[i];
  }
}

void mapMaximize3(int e[], int r[]){
  int maxi=3;
  for(int i=0;i<N;i++){
    if(e[i]>maxi){
      r[i]=maxi;
      }
    else{
      r[i]=e[i];
    }
  }
}

int main(){
  int e[N] = {1,5,2,4,3};
  int r_double[N];
  mapDouble(e,r_double); // r_double contiendra {2,10,4,8,6}
  for(int i=0;i<N;i++){
    printf("Le double de %d est égal à %d\n", e[i], r_double[i]);
  }
  int r_triple[N];
  mapTriple(e, r_triple);
  for(int i=0;i<N;i++){
    printf("Le triple de %d est égal à %d\n", e[i], r_triple[i]);
  }
  int r_square[N];
  mapSquare (e,r_square);
    for(int i=0;i<N;i++){
    printf("Le carré de %d est égal à %d\n", e[i], r_square[i]);
  }
  int r_maximize3[N];
  mapMaximize3(e,r_maximize3);
  for(int i=0;i<N;i++){
    printf("Le résultat: %d est égal à %d\n", e[i], r_maximize3[i]);
  }
}
// résultat: OK avec 108 étapes