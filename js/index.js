//const theme = 'There are the quadratic formula';
//alert(theme);

const a = prompt('Enter value for quadratic-coefficient a');
const b = prompt('Enter value for linear-coefficient b');
const c = prompt('Enter value for free-term c');

function discriminant(a, b, c) {
    const D = Math.pow(b, 2) - 4 * a * c;
    return D;
}

const D = discriminant(a, b, c);

if (D > 0) {
    const x1 = (-b + Math.sqrt(D)) / (2 * a);
    const x2 = (-b - Math.sqrt(D)) / (2 * a);
    alert('There are two distinct roots');
    alert(x1);
    alert('and');
    alert(x2);
}

else if (D === 0) {
    alert('There is exactly one real root');
    const x = (-b) / 2 * a;
    alert(x);
}

else if (D < 0) {
    const Q = 'There are no real roots!';
    alert(Q);
}
