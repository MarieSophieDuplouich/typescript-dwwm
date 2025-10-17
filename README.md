La POO par l'exemple - EarthDefender
Pour apprendre la POO nous allons conçevoir un petit jeu vidéo nommé EarthDefender.

Concept du jeu
Ce jeu est une version simplifiée de SpaceInvader, où un petit vaisseau spacial détruit des aliens pour proteger la Terre.

Les aliens se déplacent vers la terre et lui font perdre des points de vie lors de leurs collisions.

Le joueur contrôle le vaisseau spacial, il se déplace latéralement. Il peut également tirer des missiles qui détruisent alors un alien lors de leurs collision.

Maquette du jeu Earth Defender

Retrouvez toute les assets graphiques du projet via ce lien figma : https://www.figma.com/file/Th3KWNwiV7TtXDKNSMv6do/EarthDefender?type=design&node-id=0%3A1&mode=design&t=MUCNIKJfrDGeNUtj-1

Use Case Diagramme
Voici le diagramme de cas d'utilisation de l'application. alt text

Technologies néccessaires
TypeScript
HTML Canva
Cette application web a besoin d'une haute intéractivité il nous faudra donc JavaScript, nous utiliserons également un Canva HTML pour afficher le jeu.

Nous utiliseront TypeScript plutôt que JavaScript pour sa syntaxe Orientée Objet. TypeScript néccessitera cependant de compiler le code en JavaScript.

TypeScript est un surcouche de JavaScript développé par Microsoft, il renforce JavaScript en lui rajoutant les types, c'est un langage moins permissif que JavaScript et il est obligatoire de le connaitre pour utiliser, à l'avenir, le framework Angular. Tout code TypeScript sera au final tranformé en code JavaScript après la compilation.

A l'origine TypeScript a été crée par Microsoft pour faciliter le développement des versions Web de la suite Office. Le premier programme développé en TypeScript est VSCode. Le développement de VSCode à permis à Microsoft de tester TypeScript en condition réel. Pour plus d'info je recommande ce documentaire sur les conditions de développement de TypeScript : https://www.youtube.com/watch?v=U6s2pdxebSo&t=2189s.

Cahier des charges
Tache	Description	Contraintes
Créer le canva du jeu	Le HTML Canva est un rectangle qui prend presque tout l'écran	Il possède un fond d'écran similaire à celui de la maquette
Afficher le joueur	Afficher le joueur sur le HTML Canva.	Le joueur se trouve à quelque pixels du bord inférieur du canva.
Mouvement du joueur	Le joueur peut se déplacer de gauche à droite avec les touches 'Q' ou 'D'.	
Apparition d'un Alien	Faire apparaitre un alien	L'alien avance tout droit vers le bas du canva.
Afficher la Terre	La terre possède 3 PV	Afficher les pv restant de la terre
Perte de pv de la terre	La terre perd 1 pv si un alien la touche	
Mort du joueur	Le joueur meurt si un alien le touche.	Le jeu recommence
Tir du joueur	Le joueur tir des missiles qui détruisent un alien au contact	Les missiles vont tout droit vers le haut de l'écran. La touche espace tir un missile. Le joueur peut tirer à une cadence maximum de 200ms
Vague d'aliens	Faire apparaitre de nombreux aliens qui arriveront petit à petit de façon aléotoire.	Il n'y maximum que 10 aliens en jeu et le nombres d'alien tué est affiché en haut de l'écran.
Bonus SON Joueur	Emmettre un son au tir du joueur	
Bonus SON musique	Faire tourner une musique en boucle en fond.
