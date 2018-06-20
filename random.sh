#!/bin/bash

maxCount=10*1024*8;

for ((count = 1; count <= maxCount; count++)); do
    echo $(($RANDOM % 2));
done
