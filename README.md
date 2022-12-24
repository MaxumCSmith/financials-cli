There are some useful calculations that I wonder about a lot. So I made a cli to handle my repeat questions.

# Commands

## time-to-passive

This will output a file that presents how long it will take to get to a target income given an input starting amount, anual savings, and rate of return.

Example:

```pwsh
npm start time-to-passive -- -x0 200000 -s 50000 -int 0.04 -end 30000 -out sample.json
```
