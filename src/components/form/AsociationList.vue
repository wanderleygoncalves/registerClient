<template>
  <main>
    <div class="headline">
      <div class="headline-title">Lista de associações</div>
    </div>

    <div class="form">
      <div class="clients">
        <label for="clients">Cliente</label>
        <select name="active-client" id="active-product">
          <option value="select-one-option">Selecione um Cliente</option>
          <option value="person">ABC Transportes</option>
          <option value="person">Cargo Log</option>
          <option value="person">Express Trend</option>
          <option value="person">João Neto</option>
          <option value="person">Jessy Medeiros</option>
          <option value="person">Marco Paulo</option>
          <option value="person">Mario Oliveira</option>
          <option value="person">Maria Marta</option>
          <option value="person">Philipe Edson</option>
          <option value="person">Uber</option>
        </select>
      </div>

      <div class="products">
        <label for="product-active">Produto</label>
        <select name="active-client" id="active-client">
          <option value="select-one-product">Selecione um Produto</option>
          <option value="Mailing List">Mailing List</option>
          <option value="data-enrichment">Enriquecimento de Dados</option>
          <option value="prospecting-business">
            Prospeccao de novos Negócios
          </option>
        </select>
      </div>

      <div class="active-product">
        <label for="product-active">Produto ativo?</label>
        <select name="active-client" id="active-product">
          <option value="select-one-option">Selecione uma Opção</option>
          <option value="yes">Sim</option>
          <option value="no">Não</option>
        </select>
        <button class="btn-register">Associar</button>
      </div>
    </div>
  </main>
</template>
