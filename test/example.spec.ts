import {expect, test} from 'vitest'
import {app} from '../src/app'
import request from 'supertest'

test('O usuário consegue criar uma nova transação',()=>{ //fazer um enunciado explicativo sobre para que serve o teste

    //fazer o código com a chamada HTTP para criar uma nova transação
    //...codigo

    //fazer a validação da resposta esperada
    const responseStatusCode = 201 //example, depende do que vai chegar no código

    expect(responseStatusCode).toEqual(201)

})