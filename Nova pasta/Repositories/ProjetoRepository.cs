using senai_roman_WebApi.Context;
using senai_roman_WebApi.Domains;
using senai_roman_WebApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace senai_roman_WebApi.Repositories
{   

    public class ProjetoRepository : IProjetoRepository
    {
        RomanContext ctx = new RomanContext(); 

        public void AtualizarUrl(int idProjeto, Projeto ProjetoAtualizado)
        {
            throw new NotImplementedException();
        }

        public Projeto BuscarPorId(int idProjeto)
        {
            throw new NotImplementedException();
        }

        public void Cadastrar(Projeto novoProjeto)
        {
            throw new NotImplementedException();
        }

        public void Deletar(int idProjeto)
        {
            throw new NotImplementedException();
        }

        public List<Projeto> ListarTodos()
        {
            return ctx.Projeto
                .Select(p => 
                
                )


        }
    }
}
