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

I worked on this project with Megan, Ashlyn, and Olivia. I also had help from chat gpt specifically to help with a counter example problem of [1,0] which gave us the idea of checking a swap variable to know when the array is properly sorted.

The time complexity of this algorithm is O(n^2) because the inner for loop is checking through the entire array giving linear time and the outer do while loop is running for every time the elements are swapped until it is a sorted array giving another instance of linear time, and combining those two gives us the time complexity of the algorithm. The best case would be if the array is already sorted because there would be no swaps made reducing the inner loop to a constant giving time complexity of just O(n). The worst case for this algorithm would be if it is reverse sorted making the inner loop swap every single element multiple times. The complexity would drastically worse because there would be n! permutations and checking if its sorted would also be linear so the time complexity would change to O(n x n!), also if it was truly random then it is possible that it could be checking indefinitely and that it would have a chance of 1/n! to get the right ordering to be sorted randomly.

"I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice."
