const tree = {
  value: 1,
  left: {
    value: 2,
    right: {  left: {
        value: 2,
        right: {  left: {
            value: 2,
            right: { value: 5 },
          } },
      }},
  },
  right: { left: {
    value: 2,
    right: { value: 5 },
  },
    right: { value: 2,
        right: { value: 2,
            right: { value: 2,
                right: { value: 5 }, },},}, },
};
function treePath(root) {
  const answer = [];
  let tmp = [];
  const travel = (r) => {
    if (r == null) {
      return;
    }
    //@ts-ignore
    tmp.push(r.value);
    if (r.left == null && r.right == null) {
      //@ts-ignore
      answer.push(tmp);
      tmp = [tmp[0]];
      return;
    }
    if (r.left) travel(r.left);
    if (r.right) travel(r.right);
  };
  travel(root);
  //@ts-ignore
  return answer.map((t) => t.join("->"));
}
console.log(treePath(tree)); // [ '1->2->5', '1->3' ]
