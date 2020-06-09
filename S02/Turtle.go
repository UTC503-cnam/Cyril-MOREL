to etoile
  make "cote 50
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

to DECALAGE_DEBUT
  pu
  lt 90
  fd :nb_Etoiles * :cote *1.4
  rt 90
  pd
  end
clearscreen
setsc 7
setpencolor 6
make "nb_Etoiles 10
decalage_debut
pd
make "AngleDpart 18
rt :AngleDpart
repeat :nb_Etoiles [etoile Deplacer]
ht