package br.com.edutech.model

data class Question(
    val id: Int? = null,
    val name: String? = null,
    val title: String? = null,
    val answer1: String? = null,
    val answer2: String? = null,
    val answer3: String? = null,
    val correct: Int? = null
)