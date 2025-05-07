# Recomendations Product App



![screencapture-localhost-3000-2025-05-06-21_53_59](https://github.com/user-attachments/assets/d571b56d-9449-4412-a9b5-cf38cdea81fc)

✔️ Receber preferências do usuário via formulário<br>
✔️ Retornar recomendações baseadas nas preferências<br>
✔️ Modo "SingleProduct": retornar um produto<br>
✔️ Modo "MultipleProducts": retornar lista de produtos<br>
✔️ Em caso de empate, retornar o último produto válido<br>
✔️ Lidar com diferentes tipos de preferências<br>
✔️ Serviço modular e extensível<br>

### Atuação
- Criação de funções modulares para validar a escolha do usuário, validando produtos inerentes a expectativa do usuário e retornando uma lista com os produtos que deram match caso a opção "Múltiplos Produtos" seja marcada e caso a opção "Produto Único" seja marcada, listei todos os matchs que poderiam dar em relação as preferencias do usuário e os produtos, fiz um rank ordenado para ver qual produto mais score tinha em relação ao match, e em caso de empate busquei o último produto e retornei na função.
- Para servir os componentes e evitar props entre "irmãos", criei um contextApi com um provider simples, pensando em escalabilidade em escopo menor, contextAPI serviria para começar a gerenciar estados, e evitar props entre componentes de mesmo nível.

### O que falta fazer
- Testes unitários.

### O que sugeriria mudar no projeto?
- O uso de useState para manipular estados complexos (objetos), trocaria para o uso do useReducer.
 
