#!/bin/bash

for ((count = 1; count <= 10000; count++)); do
  echo $(($RANDOM % 256));
done
