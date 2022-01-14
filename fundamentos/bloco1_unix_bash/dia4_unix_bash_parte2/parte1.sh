#!/bin/bash

#Exercício 1
#navegar até a pasta de acordo com seus documentos
cd /home/xx/xx/unix_tests

#Exercício 2
cat > skills2.txt
Internet
Unix
Bash
#Ctrl+d para sair do comando

#Exercício 3
cat >> skills2.txt
JavaScript
Git
GitHub
HTML
CSS
#Ctrl+d para sair do comando
sort < skills2.txt

#Exercício 4
wc -l skills2.txt

#Exercício 5
sort < skills2.txt | head -3 > top_skills.txt

#Exercício 6
cat > phrases2.txt
A melhor liberdade é quando você se livra do que te faz mal.
É melhor dar valor porque a saudade não traz ninguém de volta.
Humildade não te faz melhor que ninguém, mas te faz diferente de muitos.
Que a felicidade vire rotina.
#Ctrl+d para sair do comando

#Exercício 7
grep br phrases2.txt | wc -l

#Exercício 8
grep -v br phrases2.txt | wc -l

#Exercício 9
cat >> phrases2.txt
Holanda
Argentina
#Ctrl+d para sair do comando

#Exercício 10
cat phrases2.txt countries.txt > bunch_of_things.txt

#Exercício 11
sort bunch_of_things.txt -o bunch_of_things.txt

END