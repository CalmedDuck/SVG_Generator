const { Circle, Triangle, Square } = require('./shapes.js');

test('Circle should render correct SVG', () => {
    const circle = new Circle('red');
    expect(circle.render()).toBe('<circle cx="150" cy="100" r="80" fill="red" />');
});

test('Triangle should render correct SVG', () => {
    const triangle = new Triangle('blue');
    expect(triangle.render()).toBe('<polygon points="150,18 244,182 56,182" fill="blue" />');
});

test('Square should render correct SVG', () => {
    const square = new Square('green');
    expect(square.render()).toBe('<rect x="70" y="20" width="160" height="160" fill="green" />');
});