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

          <label>Nome completo</label>
          <input type="text" placeholder="Nome completo" v-model="users.nomeCompleto">

          <label>Nome social</label>
          <input type="text" placeholder="Nome social" v-model="users.nomeSocial">

          <label>Data de nascimento</label>
          <input type="date" placeholder="Data" v-model="users.dataDeNascimento">

          <label>Código</label>
          <input type="number" placeholder="Codigo" v-model="users.codigo">

          <label>Sexo</label>
          <input type="text" placeholder="Sexo" v-model="users.sexo">

          <label>Email</label>
          <input type="text" placeholder="Email" v-model="users.email">

          <label>Estado</label>
          <input type="text" placeholder="Estado" v-model="users.estado">

          <label>Município</label>
          <input type="text" placeholder="Municipio" v-model="users.municipio">

          <label>Número de acessos ao curso</label>
          <input type="text" placeholder="Número de acessos ao curso" v-model="users.numeroDeAcessosAoCurso">

          <label>Situação no curso</label>
          <input type="text" placeholder="Situação no curso" v-model="users.situacaoNoCurso">

          <label>Data de vínculo</label>
          <input type="date" placeholder="Data de vínculo" v-model="users.dataDeVinculo">


          <button class="waves-effect waves-light btn-small">Salvar<i class="material-icons left">save</i></button>

      </form>

      <table>

        <thead>

          <tr>
            <th>NOME COMPLETO</th>
            <th>NOME SOCIAL</th>
            <th>DATA DE NASCIMENTO</th>
            <th>CODIGO</th>
            <th>SEXO</th>
            <th>EMAIL</th>
            <th>ESTADO</th>
            <th>MUNICIPIO</th>
            <th>NUMERO DE ACESSOS AO CURSO</th>
            <th>SITUACAO NO CURSO</th>
            <th>DATA DE VINCULO</th>
          </tr>

        </thead>

        <tbody>

          <tr v-for="users of userss" :key="users.id">

            <td>{{ users.nomeCompleto }}</td>
            <td>{{ users.nomeSocial }}</td>
            <td>{{ users.dataDeNascimento }}</td>
            <td>{{ users.codigo }}</td>
            <td>{{ users.sexo }}</td>
            <td>{{ users.email }}</td>
            <td>{{ users.estado }}</td>
            <td>{{ users.municipio }}</td>
            <td>{{ users.numeroDeAcessosAoCurso }}</td>
            <td>{{ users.situacaoNoCurso }}</td>
            <td>{{ users.dataDeVinculo }}</td>
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
      users: {
        id: '',
        nomeCompleto: '',
        nomeSocial: '',
        dataDeNascimento: '',
        codigo: '',
        email: '',
        estado: '',
        municipio: '',
        numeroDeAcessosAoCurso: '',
        situacaoNoCurso: '',
        dataDeVinculo: ''
      },
      userss: []
      // errors: []
    }
  },

  // mounted(){
  //   Usuario.listar().then(resposta => {
  //     this.resposta = resposta
  //     console.log(resposta.data)
  //     this.usuarios = resposta.data
  //   })
  // },

  // data() {
  //   return {
  //     usuario: {
  //       id: '',
  //       nomeCompleto: '',
  //       nomeSocial: '',
  //       dataDeNascimento: ''
  //     },
  //     usuarios: [],
  //     errors: []
  //   }
  // },

  mounted(){
    this.listar()
  },

  methods: {

    listar(){
      Usuario.listar().then(resposta => {
        this.userss = resposta.data
      })
    }

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