/*
 ============================================================================
 Name        : S2_Ex_6b.c
 Author      : Cyril M
 Version     : 4
 Copyright   : Your copyright notice
 Description : Test corrigé
 ============================================================================
 */

#define N 5 
void mapDouble(int e[], int r[]){
  for (int i = 0; i < N; i++)
    r[i] = e[i] * 2;
}

void mapTriple(int e[], int r[]){
  for (int i = 0; i < N; i++)
    r[i] = e[i] * 3;
}
void mapSquare(int e[], int r[]){
  for (int i = 0; i < N; i++)
    r[i] = e[i] * e[i];
}
void mapMaximize3(int e[], int r[]){
  for (int i = 0; i < N; i++)
    if (e[i] <= 3)
      r[i] = e[i];
    else
      r[i] = 3;
    // Ou remplacer le if / else par l'opérateur ternaire ()?:
      r[i] = e[i] <= 3?e[i]:3;
}

int main() {
  int e[N] = {1, 5, 2, 4, 3};
  int r_double[N]; mapDouble(e, r_double); // r_double contiendra {2, 10, 4, 8, 6}
  int r_triple[N];
  mapTriple(e, r_triple); // r_triple contiendra {3, 15, 6, 12, 9}
  int r_square[N];
  mapSquare(e, r_square); // r_square contiendra {1, 24, 4, 16, 9}
  int r_maximize3[N];
  mapMaximize3(e, r_maximize3); // r_maximize3 contiendra {1, 3, 2, 3, 3};
}