/*
 ============================================================================
 Name        : S2_Ex_7.c
 Author      : Cyril M
 Version     : 1
 Copyright   : Your copyright notice
 Description : Reprise exercice après correction
 ============================================================================
 */
#define N 5

int mydouble(int v){
  return v*2;
}

/*int mytriple(int v){
  return v*3;
}*/

void map(int e[],int r[], int (*pointeurSurFonction)(int)){
  for(int i=0;i<N;i++){
      r[i]=pointeurSurFonction(e[i]);
      }

int main(){
  int e[N] = {1,5,2,4,3};
  int r_double[N];
  map(e[N],r_double[N],é&mydouble)


//}