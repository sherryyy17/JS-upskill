const express = require('express');
const app = express();
const port = 3000;
const calculator = require('arithmatic-demo-pkg');


app.get('/api/calculate/:operation', (req, res) => {
  const operation = req.params.operation.toLowerCase();
  const { num1, num2 } = req.query;

  if (!num1 || !num2) {
    return res.status(400).json({ error: 'Please provide both numbers' });
  }

  const x = parseFloat(num1);
  const y = parseFloat(num2);

  let result;
  switch (operation) {
    case 'add':
      result = calculator.add(x, y);
      break;
    case 'subtract':
      result = calculator.sub(x, y);
      break;
    case 'multiply':
      result = calculator.mult(x, y);
      break;
    case 'divide':
      if (y === 0) {
        return res.status(400).json({ error: 'Cannot divide by zero' });
      }
      result = calculator.div(x,y);
      break;
    case 'percentage':
      result = calculator.percentage(x,y);
      break;
    default:
      return res.status(400).json({ error: 'Invalid operation' });
  }

  res.json({ result });
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
