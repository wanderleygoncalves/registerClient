<template>
  <div class="headline">
    <div class="headline-title">Cadastro de Produtos</div>
  </div>

  <div class="form">
    <label for="product-active">Produto</label>
    <select name="active-client" id="active-client">
      <option value="select-one-product">Selecione um Produto</option>
      <option value="Mailing List">Mailing List</option>
      <option value="data-enrichment">Enriquecimento de Dados</option>
      <option value="prospecting-business">Prospeccao de novos Negócios</option>
    </select>

    <label for="product-active">Produto ativo?</label>

    <select name="active-client" id="active-client">
      <option value="select-one-option">Selecione uma Opção</option>
      <option value="yes">Sim</option>
      <option value="no">Não</option>
    </select>

    <button class="btn-register">Salvar</button>
  </div>
</template>
