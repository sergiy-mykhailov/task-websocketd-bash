#!/bin/bash

data=''
maxCount=10*1024*8;

for ((count = 1; count <= maxCount; count++)); do

    rnd=$(( $RANDOM % 2 ))
    data=$data$rnd

done

echo $data
