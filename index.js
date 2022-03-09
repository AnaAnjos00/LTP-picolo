class Retangulo {
  constructor(largura, altura){

    this.altura = altura
    this.largura = largura
  }

  calcularArea(){
    return this.altura * this.largura;
  }
  area() {
    return this.calcularArea();
  }
}

let quadrado = new Retangulo("10","10")
let retangulo = new Retangulo("60","30")
let triangulo = new Retangulo("20","40")

console.log(triangulo.altura)
console.log(triangulo.largura)
console.log(quadrado.altura)
console.log(quadrado.largura)
console.log(retangulo.altura)
console.log(retangulo.largura)

console.log(quadrado.area())
console.log(retangulo.area())
console.log(triangulo.area())

