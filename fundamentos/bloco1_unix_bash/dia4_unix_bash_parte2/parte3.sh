#!/bin/bash

#Exercício 1
ps

#Exercício 2
sleep 30 &

#Exercício 3
ps | grep sleep
kill 13842 #usar o número de PID qu estiver na sua listagem

#Exercício 4
sleep 30
#CTRL+z para suspender o processo
bg

#Exercício 5
sleep 300 &

#Exercício 6
sleep 200
#CTRL+z para suspender o processo
sleep 100
#CTRL+z para suspender o processo

#Exercício 7
jobs
fg %1
#CTRL+z para suspender o processo

#Exercício 8
bg %3

#Exercício 9
kill %1 %2 %3

END

