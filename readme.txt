Treball individual

Volem crear una app de posts online.
Es tracta de donar capacitat a usuaris per poder accedir a la plataforma un cop registrats.
Tipus d'usuari:
guest: explorar posts sense veure
user: veure posts i puntuar
loaders: crear, etiquetar i veure posts
admin: administració d'usuaris i posts

Tots els posts es poden etiquetar
De cada usuari volem tenir un historial dels posts visualitzats que es veuran  al perfil d'usuari
Volem donar llibertat a l'hora de plantejar l'aplicació.

Annexe
Disseny d’un blog de posts





Inici - Home

Presentació de dades: Entitat que es maneja - 



Login

Exclusivament login o registre (recordatori de si es vol registrar)



Dashboard - Menú especialitzat segons autorizaciones

Pantalla de treball de l’usuari

user: Pot crear les seves  pròpies entitats i administrar  el seu  perfil
Perfil: 
Canvi de contraseña
Modificar dades
Els meus posts Mostra els posts associats


ADMIN: Pot administrar Perfil i propietats així com la resta d'entitats.
Perfil: 
Canvi de contrasenya
Modificar dades
Administrar usuaris
Administrar posts




Subpantalles - associades



-Registre



-Registre de entidades (en general) - requereix token(API)  o CSRF



-Edición de entidades (en general) - requereix token (API) o CSRF



Navegació i rutes principals



Home —>Login

Login —>dashboard

Login —>registre

Dashboard

