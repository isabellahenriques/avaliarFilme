export function contarVotos(avaliacoes) {
  return avaliacoes.length;
}

export function calcularMedia(avaliacoes) {
  let soma = 0;

  avaliacoes.forEach(nota => {
    soma += nota;
  });

  return soma / avaliacoes.length;
}

export function classificarFilme(media) {
  if (media >= 4) {
    return 'Filme recomendado';
  }

  if (media >= 3) {
    return 'Filme razoável';
  }

  return 'Filme ruim';
}

export function avaliarFilme(filme) {
  let votos = contarVotos(filme.avaliacoes);
  let media = calcularMedia(filme.avaliacoes);
  let avaliacao = classificarFilme(media);

  return {
    nome: filme.nome,
    votos: votos,
    media: media,
    avaliacao: avaliacao
  };
}