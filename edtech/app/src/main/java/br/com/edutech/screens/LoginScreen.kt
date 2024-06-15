package br.com.edutech.screens

import android.util.Log
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Email
import androidx.compose.material.icons.filled.Lock
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.unit.dp
import androidx.navigation.NavController
import br.com.edutech.components.Container
import br.com.edutech.components.CustomSpacer
import br.com.edutech.components.Input
import br.com.edutech.components.MainButton
import br.com.edutech.components.Modal
import br.com.edutech.components.SubButton
import br.com.edutech.components.Title
import br.com.edutech.model.LoginResponse
import br.com.edutech.model.LoginUser
import br.com.edutech.service.RetrofitFactory
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response

@Composable
fun LoginScreen(navController: NavController) {

    var email = remember {
        mutableStateOf("")
    }

    var password = remember {
        mutableStateOf("")
    }

    var error = remember {
        mutableStateOf("")
    }

    fun signIn() {
        if (email.value.isNotBlank() && password.value.isNotBlank()){
            var loginUser = LoginUser(email.value, password.value)
            Log.i("consolelog", loginUser.email)
            Log.i("consolelog", loginUser.password)
            var call = RetrofitFactory().userService().loginUser(loginUser)
            call.enqueue(object : Callback<LoginResponse> {
                override fun onResponse(call: Call<LoginResponse>, response: Response<LoginResponse>) {
                    val user = response.body()
                    if (user != null) {
                        navController.navigate(("mainEd/${user.id}"))
                    } else {
                        error.value = "Tente novamente"
                    }
                    Log.i("consolelog", "onResponse: ${response.body()}")
                }

                override fun onFailure(call: Call<LoginResponse>, t: Throwable) {
                    Log.i("RegisterScreen", "Error", t)
                }

            })
        } else {
            error.value = "Preencha todos os campos"
        }
    }

    Container {
        Modal {
            Title(text = "Seja bem-vindo!")

            CustomSpacer(space = 30.dp)

            Input(value = email.value, onValueChange = { email.value = it }, label = "E-mail", leadingIcon = Icons.Default.Email, keyboardType = KeyboardType.Email)

            Input(value = password.value, onValueChange = { password.value = it }, label = "Senha", leadingIcon = Icons.Default.Lock, keyboardType = KeyboardType.Password)

            if (error.value.length > 0) {
                Text(text = error.value)
            }

            MainButton(onclick = { signIn() }, text = "Entrar")

            CustomSpacer(space = 20.dp)

            SubButton(onclick = { navController.navigate("register") }, text = "Cadastre-se")
        }
    }
}