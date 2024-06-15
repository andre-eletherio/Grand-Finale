package br.com.edutech.service

import br.com.edutech.model.AlterName
import br.com.edutech.model.LoginResponse
import br.com.edutech.model.LoginUser
import br.com.edutech.model.Question
import br.com.edutech.model.RegisterResponse
import br.com.edutech.model.RegisterUser
import retrofit2.Call
import retrofit2.http.Body
import retrofit2.http.DELETE
import retrofit2.http.GET
import retrofit2.http.PATCH
import retrofit2.http.POST
import retrofit2.http.Path
import retrofit2.http.Query

interface UserService {

    @POST("fiap/register")
    fun registerUser(@Body registerUser: RegisterUser): Call<RegisterResponse>

    @POST("fiap/login")
    fun loginUser(@Body loginUser: LoginUser): Call<LoginResponse>

    @GET("fiap/question/{name}")
    fun getQuestion(@Path("name") name: String): Call<Question>

    @GET("fiap/profile/{id}")
    fun getProfile(@Path("id") id: Int): Call<RegisterResponse>

    @DELETE("fiap")
    fun deleteAccount(
        @Query("id") id: Int = 0
    ): Call<RegisterResponse>

    @PATCH("fiap/name")
    fun altername(@Body alterName: AlterName): Call<RegisterResponse>
}