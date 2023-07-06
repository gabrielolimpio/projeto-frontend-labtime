import { http } from "./config"

export default {
    listar: () => {
        return http.get('users')
    }

    // salvar: (produto) => {
    //     return http.post('produto', produto)
    // },

    // atualizar: (produto) => {
    //     return http.put('produto', produto)
    // },

    // apagar: (produto) => {
    //     return http.delete('produto', {data: produto})
    // }
}