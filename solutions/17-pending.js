/*
 *
 * PROBLEM #16: Merge Two Sorted Lists
 *
 * Source: https://leetcode.com/problems/merge-two-sorted-lists/description/
 *
 * You are given the heads of two sorted linked lists list1 and list2
 * Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
 * Return the head of the merged linked list.
 *
 * Examples:
 *
 * Input: list1 = [1,2,4], list2 = [1,3,4]
 * Output: [1,1,2,3,4,4]
 *
 * Input: list1 = [], list2 = []
 * Output: []
 *
 * Input: list1 = [], list2 = [0]
 * Output: [0]
 *
 */

// const mergeSortedList = (list1, list2) => {
//   if (list1.length === 0 && list2.length === 0) return null;
// };

// let first, second;

// first = [1, 2, 4];
// second = [1, 3, 4];
// console.log(mergeSortedList(first, second)); // returns [1,1,2,3,4,4]

// first = [];
// second = [];
// console.log(mergeSortedList(first, second)); // returns []

// first = [];
// second = [0];
// console.log(mergeSortedList(first, second)); // returns [0]

/*

        if list1 is None and list2 is None:
            return None

        head = ListNode()
        tail = head
        list1_tail = list1
        list2_tail = list2
        
        while list1_tail or list2_tail:
            
            if list2_tail is None:
                tail.val = list1_tail.val
                list1_tail =  list1_tail.next
            elif list1_tail is None:
                tail.val = list2_tail.val
                list2_tail =  list2_tail.next
            else:
                if list1_tail.val <= list2_tail.val:
                    tail.val = list1_tail.val
                    list1_tail = list1_tail.next
                else:
                    tail.val = list2_tail.val
                    list2_tail = list2_tail.next
            
            # for cases where list1 tail and list2 tail are now both None after moving the pointers above
            # linked list traversal done; avoids adding 0 at end of new linked list
            if list1_tail is None and list2_tail is None:
                break
            else: # at least 1 linked list still has an element, move tail pointer to new node
                tail.next = ListNode()
                tail = tail.next        
        
        return head

*/

// module.exports = mergeSortedList;
