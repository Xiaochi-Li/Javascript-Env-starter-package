import numeral from 'numeral';
import './index.css';

const courseValue = numeral(1000).format('$8,0.00');
console.log(`I would pay ${courseValue} for this awesme course`)
