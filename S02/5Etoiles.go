erall

to etoile
  make "petitAngle 72
  make "grandAngle 144
  repeat 5[fd :cote rt :grandAngle fd :cote lt :petitAngle]
end

to Deplacer
  pu
  rt :petitAngle
  fd 3*:cote
  pd
  lt :petitAngle
end

to DESSIN
repeat :nb_Etoiles [etoile Deplacer]
ht
end

to DECALAGE_DEBUT
pu
lt 90
fd :nb_Etoiles * :cote *1.4
rt 90
pd
end

to PREPARATION
clearscreen
setsc 7
setpencolor 14
pd
make "AngleDpart 18
rt :AngleDpart
DECALAGE_DEBUT
end

make "nb_Etoiles (readword [Combien d'étoiles?])
make "cote 50
PREPARATION
DESSIN