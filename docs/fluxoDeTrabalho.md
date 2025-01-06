## Fluxo de Trabalho e Colaboração

### Como Criar uma Fork e Colaborar no Repositório

1. **Criar uma Fork**:  
   Para começar a trabalhar no projeto, crie uma **fork** do repositório principal no GitHub. Isso permitirá que você tenha uma cópia independente para trabalhar sem afetar o código principal diretamente.

2. **Clonar o Repositório Forked**:  
   Após criar a fork, clone o repositório para o seu ambiente local:
   ```bash
   git clone https://github.com/IcaroMoreir4/frontEnd-e-commercer-binco
   ```

3. **Criar uma Branch para sua Tarefa**:  
   Antes de começar a desenvolver, crie uma branch específica para a tarefa ou feature em que você está trabalhando. Exemplo:
   ```bash
   git checkout -b nome-da-tarefa
   ```

4. **Realizar o Desenvolvimento**:  
   Realize as modificações ou implementações que estão sendo solicitadas. Não se esqueça de seguir o padrão de commits abaixo.

5. **Fazer Commits de Forma Frequente**:  
   Para cada alteração ou tarefa concluída, faça um commit específico. Por exemplo:
   - Se você fez alterações no **header**, faça um commit apenas para isso.
   - Se você fez alterações no **footer**, faça um commit separado.

   **Exemplo de commits**:
   ```bash
   git add .
   git commit -m "feat: Adiciona header com logo e navegação"
   ```

6. **Notificar para Análise**:  
   Após ter feito suas alterações e commitado, faça um **push** para a sua branch e envie um **Pull Request (PR)** para o repositório principal.  
   Ao criar o PR, **notifique-me** para que eu possa analisar as mudanças e, se estiver tudo certo, dar o **merge**.

7. **Não Faça Commits Combinados**:  
   Evite fazer um commit único com várias alterações (ex: "concluído header, footer, e login"). Isso torna difícil a análise e revisão de código. Prefira fazer um commit por tarefa e só inicie um novo commit após o anterior ser **merged**.

8. **Aguardar o Merge Antes de Continuar**:  
   Após enviar um PR e o merge ser feito, você pode começar a trabalhar em outra tarefa e criar uma nova branch. Evite continuar com o desenvolvimento de outra feature antes de o código atual ser revisado e mergeado.
