# Correção do Erro de Agendamento de Consultas

## Problema Identificado
O erro "new row violates row-level security policy for table 'consultas'" indica que as políticas de RLS (Row Level Security) estão impedindo a inserção de novas consultas.

## Solução

### 1. Execute o Script de Correção
Execute o script `scripts/45-final-consultas-fix.sql` no Supabase SQL Editor:

1. Acesse o painel do Supabase
2. Vá para a seção "SQL Editor"
3. Cole e execute o conteúdo do arquivo `scripts/45-final-consultas-fix.sql`

### 2. Verifique se a Correção Funcionou
Execute o script `scripts/46-test-consultas-insert.sql` para verificar:

1. Se o usuário atual existe e tem clínica associada
2. Se há pacientes na clínica
3. Se há tipos de consulta disponíveis
4. Se as políticas RLS estão corretas

### 3. Teste o Agendamento
Após executar os scripts:

1. Acesse a aplicação
2. Vá para um paciente
3. Tente agendar uma consulta
4. Verifique se não há mais erros no console

## O que o Script Faz

1. **Verifica e adiciona a coluna `medico_id`** se ela não existir
2. **Habilita RLS** na tabela consultas
3. **Remove todas as políticas existentes** que podem estar causando conflito
4. **Cria novas políticas corretas** que permitem:
   - Usuários autenticados inserirem consultas na sua clínica
   - Usuários autenticados visualizarem consultas da sua clínica
   - Usuários autenticados atualizarem consultas da sua clínica
   - Usuários autenticados deletarem consultas da sua clínica

## Logs Adicionados
O código do componente de agendamento foi atualizado para incluir logs adicionais que ajudarão a identificar problemas futuros.

## Se o Problema Persistir

1. Verifique se o usuário está autenticado
2. Verifique se o usuário tem uma clínica associada
3. Verifique se há pacientes e tipos de consulta disponíveis
4. Execute o script de teste para diagnosticar o problema

## Estrutura Esperada da Tabela Consultas

```sql
CREATE TABLE public.consultas (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    paciente_id uuid REFERENCES public.pacientes(id) NOT NULL,
    medico_id uuid REFERENCES public.usuarios(id) NOT NULL,
    clinica_id uuid REFERENCES public.clinicas(id) NOT NULL,
    tipo_consulta_id uuid REFERENCES public.tipos_consulta(id),
    data_hora timestamp with time zone NOT NULL,
    data_fim timestamp with time zone,
    valor decimal(10,2),
    forma_pagamento text,
    status consulta_status DEFAULT 'agendado',
    status_pagamento pagamento_status DEFAULT 'pendente',
    observacoes text,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);
``` 