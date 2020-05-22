arc(1, 2).
arc(1, 3).
arc(2, 4).
arc(3, 5).
arc(2, 5).
arc(4, 5).
arc(4, 6).
arc(5, 6).

chemin(X, Y) :- arc(X, Y).
chemin(X, Y) :- arc(X, Z), chemin(Z, Y).
