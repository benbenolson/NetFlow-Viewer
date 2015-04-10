#!/usr/bin/perl

open(IN, "BetterChoropleth.html");
open(OUT, ">>test.jade");

while(<IN>) {
  chomp();
  if(/<path(.*)\/>/) {
    print(OUT "path($1)\n");
  }
}
