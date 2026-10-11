import { contarVotos, calcularMedia, classificarFilme, avaliarFilme } from '../src/avaliarFilme.js';
import assert from 'node:assert';

describe('Contar votos do filme', function () {

  it('Deve retornar 5 votos para Minha mãe é uma peça', function () {
    const avaliacoes = [5, 4, 4, 4, 5];

    assert.equal(contarVotos(avaliacoes), 5);
  });

  it('Deve retornar 3 votos para Se eu fosse você', function () {
    const avaliacoes = [1, 2, 3];

    assert.equal(contarVotos(avaliacoes), 3);
  });

  it('Deve retornar 1 voto quando houver apenas uma avaliação', function () {
    const avaliacoes = [5];

    assert.equal(contarVotos(avaliacoes), 1);
  });

  it('Deve retornar 0 quando não houver avaliações', function () {
    const avaliacoes = [];

    assert.equal(contarVotos(avaliacoes), 0);
  });
});

describe('Calcular média das notas', function () {

  it('Deve retornar a média 4.4 para Minha mãe é uma peça', function () {
    const avaliacoes = [5, 4, 4, 4, 5];

    assert.equal(calcularMedia(avaliacoes), 4.4);
  });

  it('Deve retornar a média 3.2 para Saneamento Básico', function () {
    const avaliacoes = [3, 4, 2, 3, 4];

    assert.equal(calcularMedia(avaliacoes), 3.2);
  });

  it('Deve retornar a média 2 para Se eu fosse você', function () {
    const avaliacoes = [1, 2, 3];

    assert.equal(calcularMedia(avaliacoes), 2);
  });

  it('Deve retornar a própria nota quando houver apenas uma avaliação', function () {
    const avaliacoes = [5];

    assert.equal(calcularMedia(avaliacoes), 5);
  });
});

describe('Classificar filme pela média', function () {

  it('Deve retornar Filme recomendado quando a média for maior que 4', function () {
    assert.equal(classificarFilme(4.4), 'Filme recomendado');
  });

  it('Deve retornar Filme recomendado quando a média for igual a 4', function () {
    assert.equal(classificarFilme(4), 'Filme recomendado');
  });

  it('Deve retornar Filme razoável quando a média estiver entre 3 e 4', function () {
    assert.equal(classificarFilme(3.2), 'Filme razoável');
  });

  it('Deve retornar Filme razoável quando a média for igual a 3', function () {
    assert.equal(classificarFilme(3), 'Filme razoável');
  });

  it('Deve retornar Filme ruim quando a média for menor que 3', function () {
    assert.equal(classificarFilme(2.9), 'Filme ruim');
  });

  it('Deve retornar Filme ruim quando a média for 2', function () {
    assert.equal(classificarFilme(2), 'Filme ruim');
  });
});

describe('Avaliar filme', function () {

  it('Deve retornar 5 votos, média 4.4 e Filme recomendado para Minha mãe é uma peça', function () {
    const filme = { nome: 'Minha mãe é uma peça', avaliacoes: [5, 4, 4, 4, 5] };

    const resultado = avaliarFilme(filme);

    assert.equal(resultado.nome, 'Minha mãe é uma peça');
    assert.equal(resultado.votos, 5);
    assert.equal(resultado.media, 4.4);
    assert.equal(resultado.avaliacao, 'Filme recomendado');
  });

  it('Deve retornar 5 votos, média 3.2 e Filme razoável para Saneamento Básico', function () {
    const filme = { nome: 'Saneamento Básico', avaliacoes: [3, 4, 2, 3, 4] };

    const resultado = avaliarFilme(filme);

    assert.equal(resultado.nome, 'Saneamento Básico');
    assert.equal(resultado.votos, 5);
    assert.equal(resultado.media, 3.2);
    assert.equal(resultado.avaliacao, 'Filme razoável');
  });

  it('Deve retornar 3 votos, média 2 e Filme ruim para Se eu fosse você', function () {
    const filme = { nome: 'Se eu fosse você', avaliacoes: [1, 2, 3] };

    const resultado = avaliarFilme(filme);

    assert.equal(resultado.nome, 'Se eu fosse você');
    assert.equal(resultado.votos, 3);
    assert.equal(resultado.media, 2);
    assert.equal(resultado.avaliacao, 'Filme ruim');
  });
});