package br.com.edutech.model

data class RegisterUser (
    val name: String,
    val email: String = "",
    val password: String = "",
)