
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeFromEnd = (head, n) => { // O(n)
  const dummy = new ListNode()
  dummy.next = head;

  let front = dummy;
  let back = dummy;

  for (let i = 0; i < n; i++) {
    front = front.next
  }
  while (front.next !== null) {
    front = front.next
    back = back.next
  }

  back.next = back.next.next

  return dummy.next
}

const list = {
  head: {
    value: 'value1',
    next: {
      value: 'value2',
      next: {
        value: 'value3',
        next: {
          value: 'value4',
          next: {
            value: 'value5',
            next: null
          }
        }
      }
    }
  }
}
const result = removeFromEnd(list.head, 2)
console.log(result);