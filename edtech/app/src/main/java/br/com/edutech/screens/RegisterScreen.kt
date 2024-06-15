package br.com.edutech.screens

import android.util.Log
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Email
import androidx.compose.material.icons.filled.Lock
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.unit.dp
import androidx.navigation.NavController
import br.com.edutech.components.Container
import br.com.edutech.components.CustomSpacer
import br.com.edutech.components.Input
import br.com.edutech.components.MainButton
import br.com.edutech.components.SubButton
import br.com.edutech.components.SubTitle
import br.com.edutech.components.Title
import br.com.edutech.model.RegisterUser
import br.com.edutech.service.RetrofitFactory
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response
import android.os.Build
import androidx.annotation.RequiresApi
import br.com.edutech.components.Modal
import br.com.edutech.model.RegisterResponse


@RequiresApi(Build.VERSION_CODES.TIRAMISU)
@Composable
fun RegisterScreen(navController: NavController) {

    var name = remember {
        mutableStateOf("")
    }

    var email = remember {
        mutableStateOf("")
    }

    var password = remember {
        mutableStateOf("")
    }

    var error = remember {
        mutableStateOf("")
    }

    Container {
        Modal {
            Title(text = "Seja bem-vindo!")

            SubTitle(text = "Por favor, registre-se")

            CustomSpacer(space = 50.dp)

            Input(value = name.value, onValueChange = { name.value = it }, label = "Nome", leadingIcon = Icons.Default.Email, keyboardType = KeyboardType.Text)

            Input(value = email.value, onValueChange = { email.value = it }, label = "E-mail", leadingIcon = Icons.Default.Email, keyboardType = KeyboardType.Text)

            Input(value = password.value, onValueChange = { password.value = it }, label = "Senha", leadingIcon = Icons.Default.Lock, keyboardType = KeyboardType.Password)

            if (error.value.length > 0) {
                Text(text = error.value)
            }

            MainButton(onclick = {
                if (email.value.isNotBlank() && password.value.isNotBlank()){
                    var registerUser = RegisterUser(name.value, email.value, password.value)
                    var call = RetrofitFactory().userService().registerUser(registerUser)
                    call.enqueue(object : Callback<RegisterResponse> {
                        override fun onResponse(call: Call<RegisterResponse>, response: Response<RegisterResponse>) {
                            val user = response.body()
                            if (user != null) {
                                navController.navigate(("mainEd/${user.id}"))
                            } else {
                                error.value = "Erro ao cadastrar"
                            }
                            Log.i("consolelog", "onResponse: ${response.body()}")
                        }

                        override fun onFailure(call: Call<RegisterResponse>, t: Throwable) {
                            Log.i("RegisterScreen", "Error", t)
                        }

                    })
                } else {
                    error.value = "Preencha todos os campos"
                }
            }, text = "Registrar")

            CustomSpacer(space = 20.dp)

            SubButton(onclick = { navController.navigate("login") }, text = "Fazer Login")
        }
    }
}