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

const mergeKLists = (lists) => { // O(n * log k)
  if (lists === null || lists.length === 0) {
    return null
  }
  let interval = 1;
  while (interval < lists.length) {
    for (let i = 0; i + interval < lists.length; i = i + interval * 2) {
      lists[i] = mergeTwoLists(lists[i], lists[i + interval])
    }
    interval = interval * 2
  }
  return lists[0]
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
const list3 = {
  val: 'val1*x',
  next: {
    val: 'val2*x',
    next: {
      val: 'val3*x',
      next: {
        val: 'val4*x',
        next: {
          val: 'val5*x',
          next: null
        }
      }
    }
  }
}
const list4 = {
  val: 'val1*z',
  next: {
    val: 'val2*z',
    next: {
      val: 'val3*z',
      next: {
        val: 'val4*z',
        next: {
          val: 'val5*z',
          next: null
        }
      }
    }
  }
}
const result = mergeKLists([list1, list2, list3, list4])
console.log(result);