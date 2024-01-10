<template>
  <div class="headline">
    <div class="headline-title">Cadastro de Clientes</div>
  </div>

  <div class="form">
    <input type="text" placeholder="Nome" required />
    <input type="text" placeholder="CPF / CNPJ" required />
    <input type="tel" placeholder="Telefone" required />
    <input type="email" placeholder="E-mail" required />

    <label for="client-active">Cliente ativo?</label>
    <select name="active-client" id="active-client">
      <option value="select-one-option">Selecione uma Opção</option>
      <option value="yes">Sim</option>
      <option value="no">Não</option>
    </select>

    <button class="btn-register">Cadastrar</button>
  </div>
</template>
