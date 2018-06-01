const a = prompt('Enter value for quadratic-coefficient a', 1);
const b = prompt('Enter value for linear-coefficient b', 1);
const c = prompt('Enter value for free-term c', 0);

function discriminant(a, b, c) {
    const d = Math.pow(b, 2) - 4 * a * c;
    return d;
}

function firstRoot(a, b, d) {
    const x1 = (-b + Math.sqrt(d)) / (2 * a);
    return x1;
}

function secondRoot(a, b, d) {
    const x2 = (-b - Math.sqrt(d)) / (2 * a);
    return x2;
}

function oneRealRoot(a, b) {
    const x = (-b) / (2 * a);
    return x;
}

const d = discriminant(a, b, c);
const x1 = firstRoot(a, b, d);
const x2 = secondRoot(a, b, d);
const x = oneRealRoot(a, b);

if (d > 0) {
    alert('There are two distinct roots');
    alert(x1);
    alert('and');
    alert(x2);
} else if (d === 0) {
    alert('There is exactly one real root');
    alert(x);
} else if (d < 0) {
    const q = 'There are no real roots!';
    alert(q);
}
