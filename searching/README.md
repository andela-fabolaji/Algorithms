# Search Algorithms

### Linear Search
The linear search algorithm makes a one-off pass on a collection sequentially, comparing each value with the target value. If the target value is found, the execution terminates. If not, the entire list is walked and execution terminates without success. Linear search is most efficient if the search target is found in the first index, else it's costly for a large data set. Worst case scenario occurs when the target value does not exist within the list becuase by this, the algorithm would have made a complete pass without success. It's most practical for a very minimal ordered data set.

### Binary Search
The binary search algorithm uses the divide and conquer mechanism to find a target value within an `ordered collection`. First, the middle element of the list is compared with the target value. If found, the execution is terminated with success, else, the half that cannot hold the target value is discarded. This process is done recursively until the data is found. For really large ordred dataset, Binary search proves to be a lot more efficient that linear search. 