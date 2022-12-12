function formturma(){
    return(
        <form>
        <div>
        <label for="turno">Turno:</label> 
        <select required>
            <option value="Manhã">Selecione uma opção.</option>
            <option value="Manhã">Manhã</option>
            <option value="Tarde">Tarde</option>
            <option value="Noite">Noite</option>
        </select>
        </div>

        <div><input type="number" placeholder="Número da sala" required /></div>
        
        <div>
        <label for="ano">Ano:</label> 
        <select required>
            <option value="1°ano">1° ano</option>
            <option value="2°ano">2° ano</option>
            <option value="3°ano">3° ano</option>
        </select>
        </div>

        <div><input type="number" placeholder="Quantidade de alunos" required /></div>

        </form>
    )
}

export default formturma