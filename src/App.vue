<template>
  <div id="app">

    <nav>
      <div class="nav-wrapper blue darken-1">
        <a href="#" class="brand-logo center">Usuarios</a>
      </div>
    </nav>

    <div class="container">

      <!-- <ul>
        <li v-for="(erro, index) of errors" :key="index">
          campo <b>{{ erro.field }}</b> - {{ erro.defaultMessage }}
        </li>
      </ul>

      <p v-if="errors != ''">
            <b>Por favor, corrija o(s) seguinte(s) erro(s):</b>
            <ul>
              <li v-for="(error, index) of errors" :key="index">{{ error }}</li>
            </ul>
      </p> -->

      <form>

          <label>NomeCompleto</label>
          <input type="text" placeholder="NomeCompleto" v-model="usuario.nomeCompleto">
          <label>NomeSocial</label>
          <input type="text" placeholder="NomeSocial" v-model="usuario.nomeSocial">
          <!-- <input type="text" placeholder="Nome" v-model="usuario.nome">
          <label>Quantidade</label>
          <input type="number" placeholder="QTD" v-model="usuario.quantidade">
          <label>Valor</label>
          <input type="text" placeholder="Valor" v-model="usuario.valor"> -->

          <button class="waves-effect waves-light btn-small">Salvar<i class="material-icons left">save</i></button>

      </form>

      <table>

        <thead>

          <tr>
            <th>NOME COMPLETO</th>
            <th>NOME SOCIAL</th>
            <!-- <th>DATA DE NASCIMENTO</th>
            <th>CODIGO</th>
            <th>SEXO</th>
            <th>EMAIL</th>
            <th>ESTADO</th>
            <th>MUNICIPIO</th>
            <th>NUMERO DE ACESSOS AO CURSO</th>
            <th>SITUACAO NO CURSO</th>
            <th>DATA DE VINCULO</th> -->
          </tr>

        </thead>

        <tbody>

          <tr v-for="usuario of usuarios" :key="usuario.id">

            <td>{{ usuario.nomeCompleto }}</td>
            <td>{{ usuario.nomeSocial }}</td>
            <td>{{ usuario.dataDeNascimento }}</td>
            <td>{{ usuario.codigo }}</td>
            <td>{{ usuario.sexo }}</td>
            <td>{{ usuario.email }}</td>
            <td>{{ usuario.estado }}</td>
            <td>{{ usuario.municipio }}</td>
            <td>{{ usuario.numeroDeAcessosAoCurso }}</td>
            <td>{{ usuario.situacaoNoCurso }}</td>
            <td>{{ usuario.dataDeVinculo }}</td>
            <td>
              <button class="waves-effect btn-small blue darken-1"><i class="material-icons">create</i></button>
              <button class="waves-effect btn-small red darken-1"><i class="material-icons">delete_sweep</i></button>
            </td>

          </tr>

        </tbody>
      
      </table>

    </div>

  </div>
</template>

<script>

import Usuario from './services/usuarios'

export default {

  data() {
    return {
      usuario: {
        id: '',
        nomeCompleto: '',
        nomeSocial: ''
      },
      usuarios: [],
      errors: []
    }
  },

  mounted(){
    this.listar()
  },

  methods: {

    listar(){
      Usuario.listar().then(resposta => {
        this.usuarios = resposta.data
      })
    },

    // salvar() {

    //   if(!this.produto.id){
    //     Produto.salvar(this.produto).then(resposta => {
    //       this.reposta = resposta
    //       this.produto = {}
    //       alert('Produto salvo com sucesso!')
    //       this.listar()
    //       this.error = []
    //     }).catch(e => {
    //       this.errors = e.response.data.errors
    //     })
    //   }else {
    //     Produto.atualizar(this.produto).then(resposta => {
    //       this.reposta = resposta
    //       this.produto = {}
    //       alert('Produto atualizado com sucesso!')
    //       this.listar()
    //       this.error = []
    //     }).catch(e => {
    //       this.errors = e.response.data.errors
    //     })
    //   }
      

    // },

    // editar(produto){
    //     this.produto = produto
    // },

    // remover(produto){
    //   if(confirm('Deseja excluir o produto?')){
    //     Produto.apagar(produto).then(resposta => {
    //       this.reposta = resposta
    //       this.listar()
    //       this.errors = []
    //     }).catch(e => {
    //       this.errors = e.response.data.errors
    //     })
    //   }
    // }
  }
}
</script>

<style>

</style>