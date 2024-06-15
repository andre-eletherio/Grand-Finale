package br.com.edutech.screens

import android.util.Log
import androidx.compose.material.icons.Icons
import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.unit.dp
import androidx.navigation.NavController
import br.com.edutech.components.Container
import br.com.edutech.components.CustomSpacer
import br.com.edutech.components.Input
import br.com.edutech.components.MainButton
import br.com.edutech.components.Title
import br.com.edutech.service.RetrofitFactory
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response
import android.os.Build
import androidx.annotation.RequiresApi
import androidx.compose.material.icons.filled.Add
import androidx.compose.runtime.DisposableEffect
import br.com.edutech.components.Modal
import br.com.edutech.model.AlterName
import br.com.edutech.model.RegisterResponse


@RequiresApi(Build.VERSION_CODES.TIRAMISU)
@Composable
fun ProfileScreen(navController: NavController, id: String) {

    var name = remember {
        mutableStateOf("")
    }

    var alteredName = remember {
        mutableStateOf("")
    }

    fun getUser() {
        var call = RetrofitFactory().userService().getProfile(id.toInt())
        call.enqueue(object : Callback<RegisterResponse> {
            override fun onResponse(call: Call<RegisterResponse>, response: Response<RegisterResponse>) {
                Log.i("consolelog", "onResponse: ${response.body()?.name}")
                val ok = response.body()?.name
                if (ok != null) {
                    name.value = ok
                }
            }

            override fun onFailure(call: Call<RegisterResponse>, t: Throwable) {
                Log.i("consolelog2", "Error", t)
            }
        })
    }

    DisposableEffect(Unit) {
        getUser()
        onDispose { /* Nada a limpar */ }
    }

    fun deleteAccount() {
        val call = RetrofitFactory().userService().deleteAccount(id = id.toInt())
        call.enqueue(object : Callback<RegisterResponse> {
            override fun onResponse(call: Call<RegisterResponse>, response: Response<RegisterResponse>) {
                Log.i("consolelog", "onResponse: ${response.body()}")
                navController.navigate(("register"))
            }

            override fun onFailure(call: Call<RegisterResponse>, t: Throwable) {
                Log.i("RegisterScreen", "Error", t)
            }
        })
    }

    fun alterName() {
        val alterName = AlterName(id.toInt(), alteredName.value)
        var call = RetrofitFactory().userService().altername(alterName)
        call.enqueue(object : Callback<RegisterResponse> {
            override fun onResponse(call: Call<RegisterResponse>, response: Response<RegisterResponse>) {
                Log.i("consolelog2", "onResponse: ${response.body()}")
                val ok = response.body()?.name
                if (ok != null) {
                    name.value = ok
                }
            }

            override fun onFailure(call: Call<RegisterResponse>, t: Throwable) {
                Log.i("consolelog2", "Error", t)
            }
        })
    }

    Container {
        Modal {
            Title(text = "Olá, ${name.value}")

            Input(value = alteredName.value, onValueChange = { alteredName.value = it }, label = "Novo nome", leadingIcon = Icons.Default.Add)

            MainButton(onclick = { alterName() }, text = "Alterar nome")

            MainButton(onclick = { navController.navigate(("mainEd/${id}")) }, text = "Voltar")

            MainButton(onclick = { navController.navigate(("login")) }, text = "Sair")

            MainButton(onclick = { deleteAccount() }, text = "Deletar")

            CustomSpacer(space = 20.dp)
        }
    }
}