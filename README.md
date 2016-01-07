# JavaScript Sort Stability Test

Small snippet meant to test if the sort in JavaScript's implementation is stable

It turns out that currently V8 implementation of the Sort in JavaScript is unstable for over 10 elements (perhaps uses different algorithm for larger collections).

Most likely V8 is using QuickSort (which is unstable) for collections over 10 elements,
and InsertionSort (which is stable) for collections of 10 elements or less.
