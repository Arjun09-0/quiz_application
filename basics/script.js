Nested Arrays :


a=[['a','b','c'],['A','B','C']]
a1=a
a1[0][0]='KLH'
console.log(a)

a2=Object.assign({},a)
a2[0][0]="KLU"
console.log(a)


a3=structuredClone(a)
a3[0][0]="India"
console.log(a)


Output:

[ [ 'KLH', 'b', 'c' ], [ 'A', 'B', 'C' ] ]
[ [ 'KLU', 'b', 'c' ], [ 'A', 'B', 'C' ] ]
[ [ 'KLU', 'b', 'c' ], [ 'A', 'B', 'C' ] ]