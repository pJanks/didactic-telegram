// console confirmation that scripts and jQuery work
console.log(
  `scripts made it and jQuery is type: %c${typeof $}`,
  `
    background-color: #000;
    border: 1px solid #FF00FF;
    border-radius: 3px;
    color: ${typeof $ !== 'function' ? '#FF0000' : '#00FF00'};
    padding: 0 3px;
  `
)