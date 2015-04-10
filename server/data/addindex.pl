#!/usr/bin/perl

open(IN, "netflow.json");
open(OUT, ">>netflow_new.json");

my $i = 0;
while(<IN>) {
  chomp();
  if(/\{/) {
    print(OUT "{\n    \"index\":$i,\n");
    ++$i;
  } else {
    print(OUT "$_\n");
  }
}
