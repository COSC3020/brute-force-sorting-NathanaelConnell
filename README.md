# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered". The unsorted list passed as an argument should be
sorted, i.e. do not copy the list and sort the copy.

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

I worked on this project with Megan, Ashlyn, and Olivia. I also had help from chat gpt specifically to figure out how to use .concat function aswell as some debugging for counter example [1,0]

The time complexity of this algorithm is O(n! n) on average because it goes through each permutation, with each permutation being n, creating n factorial and then another instance of n because it is checking if the curretly generated permutation is sorted. The best case input for this implementation is if the array is already sorted which would give time complexity O(n) because it just needs to check one permutation which is n time. Worst case input would be if the last generated permutation is sorted one giving time complexity O(n! n). I would expect the complexity to not change if we generated randomly because there is still a 1/n! chance that the correct permutation would be reandomly generated. It still scales with n per permutation so asymptotically it would be the same, in practice though randomly generating the permutations would take less memory because it isnt storing the permutations. With the random aproach there is also no guaranteed best case which might cause problems or it could generate randomly for a very very long time with even a chance to be infinitely generating, even if it is unlikely.

"I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice."
