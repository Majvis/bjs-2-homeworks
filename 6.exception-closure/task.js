﻿function parseCount(value) {
  let parseValue = Number.parseFloat(value);
  if (Number.isNaN(parseValue)) throw new Error("Невалидное значение");
  return parseValue;
}
 
function validateCount(value) {
  try {
    return parseCount(value);
  } catch (error) {
      return error;
    }
}

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    if (a > b + c || b > a + c || c > a + b) {
      throw new Error ("Треугольник с такими сторонами не существует");
    }
  }
  getPerimeter () {
   return (this.a + this.b + this.c);
  }
  getArea () {
    const p = this.getPerimeter() / 2;
    return (Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
  }
}

function getTriangle (a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (error) {
      return {
        getPerimeter: function () { 
          return "Ошибка! Треугольник не существует";
        },
        getArea: function () { 
          return "Ошибка! Треугольник не существует";
        }
      }
    }
}