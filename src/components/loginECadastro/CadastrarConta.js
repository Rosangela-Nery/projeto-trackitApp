export default function CadastrarConta({LoginComponents, setClicado}) {
    return (
        <LoginComponents>
            <img src="../images/logo.svg" alt="Logo" />
             <form >
                <label></label>
                <input 
                    id="formEmail" 
                    placeholder="email"
                    type="email" 
                    required
                />
                <input  
                    id="forSenha" 
                    placeholder="senha"
                    type="password"
                    required
                />
                <input  
                    id="forName" 
                    placeholder="nome"
                    type="text"
                    required
                />
                <input  
                    id="forFoto" 
                    placeholder="foto"
                    type="foto"
                    required
                />
                <button>Cadastrar</button>
            </form>
            <p onClick={() => {
                    setClicado(false);
                }}>Já tem uma conta? Faça login!</p>
        </LoginComponents>
    )
}