//* Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = (list1, list2) => { // O(n)
  const temp = new ListNode(0)
  let currentNode = temp

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      currentNode.next = list1;
      list1 = list1.next
    } else {
      currentNode.next = list2
      list2 = list2.next
    }
    currentNode = currentNode.next
  }
  if (list1 !== null) {
    currentNode.next = list1;
    list1 = list1.next
  }
  if (list2 !== null) {
    currentNode.next = list2;
    list2 = list2.next
  }

  return temp.next
}

const list1 = {
  val: 'val1',
  next: {
    val: 'val2',
    next: {
      val: 'val3',
      next: {
        val: 'val4',
        next: {
          val: 'val5',
          next: null
        }
      }
    }
  }
}
const list2 = {
  val: 'val1*',
  next: {
    val: 'val2*',
    next: {
      val: 'val3*',
      next: {
        val: 'val4*',
        next: {
          val: 'val5*',
          next: null
        }
      }
    }
  }
}
const result = mergeTwoLists(list1, list2)
console.log(result);