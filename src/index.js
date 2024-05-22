import { Camera, Matrix,Complex } from './lib/index.js';
import "./lib/vector.js";

const canvas=document.getElementById('the-void');
const ctx=canvas.getContext('2d');

const WIDTH = canvas.width = 800;
const HEIGHT = canvas.height = 600;

const matrixes = new Matrix(3, 3);
const complexArr = [];
for (let i = 0; i < 3; i++) {
  complexArr.push([]);
  for (let j = 0; j < 3; j++) {
    complexArr[i].push(new Complex(i, j).randomize(-50, 50));

  }
};

matrixes.data = complexArr;
matrixes.print();
