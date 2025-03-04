# Document Ready State & Session Storage Example using API

This project demonstrates:

- How to check `document.readyState`
- How to use the `readystatechange` event to detect when the page is fully loaded
- How to use `sessionStorage` to store and retrieve data

## Code Explanation

### 1. Log Document Ready State

```javascript
console.log(document.readyState); // Outputs: "loading", "interactive", or "complete"
